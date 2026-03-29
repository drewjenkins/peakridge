import { Link } from 'react-router-dom'
import { services } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <main className="flex-1 pt-16 lg:pt-20">
      {/* Page hero */}
      <section className="bg-[#0F172A] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=70"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
              Every Trade. One Team.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Whether you're remodeling a single room or adding on a full floor, Peak Ridge handles every phase of the work with our own licensed crews — no hand-offs to strangers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-bold px-7 py-3.5 rounded-lg transition-colors"
            >
              Get a Free Estimate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b border-slate-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How a Peak Ridge Project Works"
            subtitle="We've refined our process over 500+ projects. Here's what you can expect from the first call to the final walkthrough."
            centered
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'We visit your home, listen to your goals, and take detailed measurements. No pressure, no sales pitch — just an honest conversation.',
              },
              {
                step: '02',
                title: 'Detailed Estimate',
                desc: 'Within 5 business days you receive a line-by-line estimate covering all materials, labor, and permit fees. No vague allowances.',
              },
              {
                step: '03',
                title: 'Project Execution',
                desc: 'Your dedicated PM coordinates every trade, manages the schedule, and sends you daily photo updates from the job site.',
              },
              {
                step: '04',
                title: 'Final Walkthrough',
                desc: 'We don\'t collect final payment until you\'ve walked through the finished project and signed off on every detail.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-slate-100 leading-none mb-4 select-none">{item.step}</div>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-400 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">Ready to Talk Through Your Project?</h2>
          <p className="text-[#0F172A]/70 mb-8">Fill out our estimate form and we'll respond within one business day.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Start with a Free Estimate
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
