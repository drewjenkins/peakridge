# Peak Ridge Contracting — CLAUDE.md

## Project Overview
Fictional local business website for Peak Ridge Contracting (Castle Rock, CO) — built as a portfolio piece demonstrating a real-world $5k+ client site. Single repo, deployed to Vercel.

## Stack
- **Frontend**: React 19 + Vite + TypeScript + Tailwind CSS v4
- **Backend**: Hono on Vercel Edge Functions (`/api` folder)
- **Forms**: React Hook Form + Zod v4
- **Email**: Resend API
- **Router**: React Router v7

## Project Structure
```
peakridge/
├── api/
│   └── contact.ts          # Hono edge function — POST /api/contact
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ServiceCard.tsx      # compact (home preview) + full (services page)
│   │   └── TestimonialCard.tsx
│   ├── data/
│   │   ├── services.ts         # 6 services with full copy
│   │   ├── testimonials.ts     # 6 testimonials
│   │   └── team.ts             # 4 team members
│   ├── pages/
│   │   ├── Home.tsx            # hero, stats, services preview, why us, testimonials carousel, CTA
│   │   ├── Services.tsx        # full grid + process section
│   │   ├── About.tsx           # brand story, team grid, awards/certs, service area
│   │   └── Contact.tsx         # validated form, contact info, hours, Google Maps embed
│   ├── App.tsx                 # BrowserRouter + Routes + ScrollToTop
│   ├── App.css                 # empty (Tailwind handles everything)
│   └── index.css               # @fontsource/inter + @tailwind directives
├── vercel.json                 # SPA rewrite ONLY — no build config (breaks auto-detection)
├── .env.example
└── index.html
```

## Design Tokens
- **Primary**: `#0F172A` (dark navy)
- **Accent**: `#F59E0B` (amber-400)
- **Font**: Inter (via @fontsource/inter)
- **Breakpoints**: 375px mobile, 768px tablet, 1280px desktop

## Environment Variables
Set in Vercel dashboard (not .env file in production):
```
RESEND_API_KEY=re_...
RESEND_TO_EMAIL=info@peakridgecontracting.com
RESEND_FROM_EMAIL=noreply@peakridgecontracting.com
```

## Deployment
- **Platform**: Vercel (team: grumpus-projects)
- **Repo**: github.com/drewjenkins/peakridge
- **vercel.json rule**: Only use for rewrites/headers. Never add `build`, `framework`, or `outputDirectory` — it breaks Vite auto-detection.
- **Custom domain**: Add via Vercel API, not aliases

## Key Decisions
- Tailwind v4 uses `@tailwindcss/vite` plugin (not PostCSS config)
- Zod v4 uses `message` param (not `errorMap`) for enum error customization
- Images are all Unsplash source URLs — no local image files
- Google Maps embed uses Castle Rock, CO coordinates (fictional address)
- Testimonials carousel auto-advances every 5.5s, shows 3 at a time on desktop

## Commands
```bash
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview production build
```
