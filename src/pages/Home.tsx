import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

const stats = [
  { value: '1998', label: 'Founded' },
  { value: '500+', label: 'Projects Completed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: 'Licensed', label: '& Insured in CO' },
]

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = (idx: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(idx)
    setTimeout(() => setIsAnimating(false), 400)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      go((current + 1) % testimonials.length)
    }, 5500)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  // Show 3 at a time on desktop, 1 on mobile
  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            className={`transition-opacity duration-400 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
          >
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all ${
              i === current
                ? 'bg-amber-400 w-6 h-2.5'
                : 'bg-slate-300 w-2.5 h-2.5 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=75"
            alt="Home renovation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Serving South Denver Metro Since 1998
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Colorado Homes
              <br />
              <span className="text-amber-400">Built to Last.</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              From kitchen remodels and basement finishing to full home additions, Peak Ridge Contracting delivers honest craftsmanship, on-time projects, and zero surprises on your bill.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Get Your Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                View All Services
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No-pressure estimates
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fixed-price contracts
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed &amp; insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-amber-400 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[#0F172A] font-bold text-2xl sm:text-3xl leading-none">{stat.value}</p>
                <p className="text-[#0F172A]/70 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="What We Do"
              title="Full-Scope Renovation Services"
              subtitle="We handle every phase of your project — no subcontracting out the parts that matter most."
            />
            <Link
              to="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors"
            >
              See All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Why Peak Ridge"
                title="We Build Like It's Our Own Home"
                subtitle="Over 25 years in Colorado, we've learned that trust is built one honest project at a time. Here's what makes us different."
              />
              <ul className="mt-8 space-y-5">
                {[
                  {
                    icon: '📋',
                    title: 'Fixed-Price Contracts',
                    desc: 'No surprises. Your estimate is your contract price — we absorb any cost overruns that aren\'t scope changes.',
                  },
                  {
                    icon: '📅',
                    title: 'Dedicated Project Manager',
                    desc: 'Every project has a single PM who coordinates all trades and gives you daily progress updates.',
                  },
                  {
                    icon: '🔧',
                    title: 'Our Own Crews',
                    desc: 'We don\'t flip jobs to unknown subs. Our core carpenters, tile setters, and finishers are full-time employees.',
                  },
                  {
                    icon: '📸',
                    title: 'Full Documentation',
                    desc: 'We photograph every phase for your records, handle all permit paperwork, and manage every inspection.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
                alt="Peak Ridge crew at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {['RH', 'CM', 'JP'].map((init) => (
                        <div key={init} className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                          {init}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A] text-sm">Trusted by 500+ Colorado families</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-slate-500 ml-1">4.9 / 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Client Stories"
              title="Don't Take Our Word for It"
              subtitle="Real reviews from real Colorado homeowners who trusted us with their biggest investment."
              centered
            />
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0F172A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Ready to Start?"
            title="Your Project Starts with a Free Conversation"
            subtitle="Describe your project and we'll get back to you within one business day with an honest assessment and a no-pressure estimate."
            centered
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Request a Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17205550148"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (720) 555-0148
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
