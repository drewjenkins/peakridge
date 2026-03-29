import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.enum(
    ['kitchen-remodeling', 'bathroom-renovation', 'deck-patio', 'basement-finishing', 'roof-repair', 'general-contracting', 'other'] as const,
    { message: 'Please select a project type' }
  ),
  message: z.string().min(10, 'Please tell us a bit more about your project'),
})

type ContactForm = z.infer<typeof contactSchema>

const projectOptions = [
  { value: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
  { value: 'bathroom-renovation', label: 'Bathroom Renovation' },
  { value: 'deck-patio', label: 'Deck & Patio' },
  { value: 'basement-finishing', label: 'Basement Finishing' },
  { value: 'roof-repair', label: 'Roof Repair' },
  { value: 'general-contracting', label: 'General Contracting / Addition' },
  { value: 'other', label: "Other / Not Sure Yet" },
]

const businessHours = [
  { day: 'Monday – Friday', hours: '7:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 3:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

function InputField({
  label,
  error,
  children,
  required,
}: {
  label: string
  error?: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg border text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
    hasError ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white hover:border-slate-400'
  }`

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setLoading(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setSubmitError(json.error || 'Something went wrong. Please call us directly.')
      } else {
        setSubmitted(true)
        reset()
      }
    } catch {
      setSubmitError('Network error. Please call us at (720) 555-0148.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex-1 pt-16 lg:pt-20">
      {/* Page hero */}
      <section className="bg-[#0F172A] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Let's Talk About Your Project
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fill out the form and we'll respond within one business day with an honest assessment and no-pressure estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Message Sent!</h2>
                    <p className="text-slate-600 max-w-sm mx-auto">
                      Thanks for reaching out. We'll review your project details and get back to you within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-[#0F172A] mb-6">Request a Free Estimate</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Full Name" error={errors.name?.message} required>
                          <input
                            {...register('name')}
                            type="text"
                            placeholder="Jane Smith"
                            className={inputCls(!!errors.name)}
                          />
                        </InputField>
                        <InputField label="Email Address" error={errors.email?.message} required>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="jane@example.com"
                            className={inputCls(!!errors.email)}
                          />
                        </InputField>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Phone Number" error={errors.phone?.message}>
                          <input
                            {...register('phone')}
                            type="tel"
                            placeholder="(720) 555-0000"
                            className={inputCls(!!errors.phone)}
                          />
                        </InputField>
                        <InputField label="Project Type" error={errors.projectType?.message} required>
                          <select
                            {...register('projectType')}
                            className={`${inputCls(!!errors.projectType)} appearance-none cursor-pointer`}
                            defaultValue=""
                          >
                            <option value="" disabled>Select a service…</option>
                            {projectOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </InputField>
                      </div>
                      <InputField label="Tell Us About Your Project" error={errors.message?.message} required>
                        <textarea
                          {...register('message')}
                          rows={5}
                          placeholder="Describe your project — what you'd like done, approximate timeline, any concerns or questions…"
                          className={`${inputCls(!!errors.message)} resize-none`}
                        />
                      </InputField>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700 flex items-start gap-2">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed text-[#0F172A] font-bold py-3.5 rounded-lg transition-colors text-sm"
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send My Request
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-xs text-slate-500 text-center">
                        We respond within 1 business day. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="bg-[#0F172A] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-5">Get in Touch Directly</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Phone</p>
                      <a href="tel:+17205550148" className="text-white font-semibold hover:text-amber-400 transition-colors">
                        (720) 555-0148
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Email</p>
                      <a href="mailto:info@peakridgecontracting.com" className="text-white font-semibold hover:text-amber-400 transition-colors text-sm">
                        info@peakridgecontracting.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Office</p>
                      <p className="text-white font-semibold text-sm">4820 Promenade Way<br />Castle Rock, CO 80104</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#0F172A] text-base mb-4">Business Hours</h3>
                <ul className="space-y-3">
                  {businessHours.map(({ day, hours }) => (
                    <li key={day} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{day}</span>
                      <span className={`font-semibold ${hours === 'Closed' ? 'text-slate-400' : 'text-[#0F172A]'}`}>
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Emergency roof service available 24/7
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49327.78838534386!2d-104.88651!3d39.37255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c37b4ed517c3d%3A0x76d5b8940f0bac95!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1711000000000!5m2!1sen!2sus"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peak Ridge Contracting location - Castle Rock, CO"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
