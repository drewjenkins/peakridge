import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.enum(
    ['kitchen-remodeling', 'bathroom-renovation', 'deck-patio', 'basement-finishing', 'roof-repair', 'general-contracting', 'other'] as const,
    { message: 'Please select a project type' }
  ),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const projectTypeLabels: Record<string, string> = {
  'kitchen-remodeling': 'Kitchen Remodeling',
  'bathroom-renovation': 'Bathroom Renovation',
  'deck-patio': 'Deck & Patio',
  'basement-finishing': 'Basement Finishing',
  'roof-repair': 'Roof Repair',
  'general-contracting': 'General Contracting',
  'other': 'Other / Not Sure Yet',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const result = contactSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      issues: result.error.flatten().fieldErrors,
    })
  }

  const { name, email, phone, projectType, message } = result.data

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.RESEND_TO_EMAIL || 'info@peakridgecontracting.com'
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@peakridgecontracting.com'

  if (!apiKey || apiKey.startsWith('re_placeholder')) {
    console.warn('RESEND_API_KEY not configured — email not sent')
    return res.status(200).json({ success: true, message: 'Message received (email delivery pending configuration).' })
  }

  const resend = new Resend(apiKey)
  const projectLabel = projectTypeLabels[projectType] || projectType
  const phoneDisplay = phone || 'Not provided'

  try {
    await resend.emails.send({
      from: `Peak Ridge Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact: ${projectLabel} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0F172A; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F59E0B; margin: 0; font-size: 20px;">Peak Ridge Contracting</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">New Project Inquiry</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">NAME</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">EMAIL</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A; font-size: 15px;"><a href="mailto:${email}" style="color: #0F172A;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">PHONE</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A; font-size: 15px;">${phoneDisplay}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">PROJECT TYPE</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">
                  <span style="background: #F59E0B; color: #0F172A; padding: 2px 10px; border-radius: 999px; font-size: 13px; font-weight: 600;">${projectLabel}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">MESSAGE</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${email}" style="background: #F59E0B; color: #0F172A; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    })

    return res.status(200).json({
      success: true,
      message: "Your message has been sent. We'll be in touch within one business day.",
    })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({
      error: 'Failed to send message. Please call us directly at (720) 555-0148.',
    })
  }
}
