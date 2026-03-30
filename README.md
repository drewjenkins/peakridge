# Peak Ridge Contracting

A professional marketing website for a fictional Colorado-based home contracting company. Built as a portfolio piece demonstrating what a real local business site looks like: lead capture, service showcase, mobile-first design, and fast page loads for local SEO.

## Demo

[peakridge.vercel.app](https://peakridge.vercel.app)

## Tech Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Hono (Vercel Edge Functions)
- React Hook Form + Zod
- Resend (contact form email delivery)
- React Router v7

## Getting Started

```bash
git clone https://github.com/drewjenkins/peakridge.git
cd peakridge
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in your Resend API key to enable the contact form.

## Deployment

Deployed to Vercel. The `/api/contact` route runs as a Hono edge function. Set the following environment variables in the Vercel dashboard:

```
RESEND_API_KEY=
RESEND_TO_EMAIL=
RESEND_FROM_EMAIL=
```

## Built By

Andrew Jenkins — [andrew.jenkins88@gmail.com](mailto:andrew.jenkins88@gmail.com)
