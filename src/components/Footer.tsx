import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-amber-400 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <span className="block text-white font-bold text-lg leading-none">Peak Ridge</span>
                <span className="block text-amber-400 text-xs font-medium tracking-widest uppercase">Contracting</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Serving the South Denver Metro since 1998. Licensed, insured, and proud to build the spaces Colorado families live in.
            </p>
            <div className="mt-5 flex gap-3">
              <span className="inline-flex items-center gap-1.5 bg-white/5 text-xs text-slate-300 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed &amp; Insured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 text-xs text-slate-300 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9 Star Rating
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services#kitchen-remodeling" className="hover:text-amber-400 transition-colors">Kitchen Remodeling</Link></li>
              <li><Link to="/services#bathroom-renovation" className="hover:text-amber-400 transition-colors">Bathroom Renovation</Link></li>
              <li><Link to="/services#deck-patio" className="hover:text-amber-400 transition-colors">Deck &amp; Patio</Link></li>
              <li><Link to="/services#basement-finishing" className="hover:text-amber-400 transition-colors">Basement Finishing</Link></li>
              <li><Link to="/services#roof-repair" className="hover:text-amber-400 transition-colors">Roof Repair</Link></li>
              <li><Link to="/services#general-contracting" className="hover:text-amber-400 transition-colors">General Contracting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>4820 Promenade Way<br />Castle Rock, CO 80104</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+17205550148" className="hover:text-amber-400 transition-colors">(720) 555-0148</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@peakridgecontracting.com" className="hover:text-amber-400 transition-colors">info@peakridgecontracting.com</a>
              </li>
              <li className="flex items-start gap-2 mt-1">
                <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Fri 7am–6pm<br />Sat 8am–3pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Peak Ridge Contracting LLC. All rights reserved.</p>
          <p className="text-slate-500">Colorado License #CR-2847 &bull; Fully Insured</p>
        </div>
      </div>
    </footer>
  )
}
