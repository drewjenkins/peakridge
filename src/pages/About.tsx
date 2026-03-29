import { Link } from 'react-router-dom'
import { team } from '../data/team'
import SectionHeading from '../components/SectionHeading'

const awards = [
  { icon: '🏆', title: 'Best of Houzz 2023', subtitle: 'Service Award' },
  { icon: '⭐', title: 'BBB A+ Rating', subtitle: 'Since 2001' },
  { icon: '🔨', title: 'NAHB Member', subtitle: 'National Assoc. of Home Builders' },
  { icon: '🛡️', title: '$2M Liability', subtitle: 'Fully Insured' },
  { icon: '📜', title: 'CO Class A License', subtitle: '#CR-2847' },
  { icon: '🌿', title: 'EPA Lead-Safe', subtitle: 'Certified Firm' },
]

export default function About() {
  return (
    <main className="flex-1 pt-16 lg:pt-20">
      {/* Page hero */}
      <section className="bg-[#0F172A] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1400&q=70"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
              Built on Honest Work
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We're a family-owned contracting company that's been building and renovating homes in the South Denver Metro for over 25 years. We're not the cheapest quote in town — and we're proud of that.
            </p>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                  alt="Rick Harmon at a job site"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-amber-400 rounded-xl p-5 hidden lg:block">
                <p className="text-[#0F172A] font-bold text-3xl leading-none">26</p>
                <p className="text-[#0F172A]/80 text-sm font-medium mt-1">Years in Business</p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="From a Pickup Truck to 500+ Projects"
              />
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In 1998, Rick Harmon loaded his tools into a secondhand pickup truck and started Peak Ridge Contracting with one goal: do excellent work and treat people right. He'd spent the previous decade as a journeyman carpenter, watching other contractors overpromise, underdeliver, and disappear when problems arose.
                </p>
                <p>
                  From the beginning, Peak Ridge operated differently. Fixed-price contracts. Daily communication. No subs for the critical work. It turned out Colorado homeowners were hungry for exactly that — and word spread fast across Castle Rock, Highlands Ranch, and the rest of the South Metro.
                </p>
                <p>
                  Today, Peak Ridge employs a core team of 14, has completed over 500 projects ranging from single bathroom renovations to full home additions, and maintains a 4.9-star rating across all review platforms. Rick still personally reviews every project proposal before it goes out.
                </p>
                <p>
                  The truck now has a logo on it. The principles haven't changed.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Work With Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="The People Who Build Your Home"
            subtitle="Every person at Peak Ridge has been with us for years. We don't cycle through crews — you'll see the same faces from day one to completion."
            centered
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F172A] text-base">{member.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.certifications.slice(0, 2).map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trust Signals"
            title="Licensed, Insured, and Recognized"
            subtitle="We hold every license and certification required by Colorado law — and a few more besides."
            centered
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {awards.map((a) => (
              <div
                key={a.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center hover:border-amber-400/50 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <p className="font-semibold text-[#0F172A] text-sm leading-tight">{a.title}</p>
                <p className="text-slate-500 text-xs mt-1">{a.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-14 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">Service Area</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Proudly Serving South Denver Metro</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Castle Rock', 'Highlands Ranch', 'Parker', 'Centennial', 'Lone Tree', 'Littleton', 'Englewood', 'Lakewood'].map((city) => (
                  <span key={city} className="bg-white/10 text-slate-300 text-sm px-3 py-1 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
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
        </div>
      </section>
    </main>
  )
}
