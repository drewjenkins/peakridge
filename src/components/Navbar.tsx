import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F172A] shadow-lg shadow-black/20' : 'bg-[#0F172A]/95'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-amber-400 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <span className="block text-white font-bold text-lg leading-none tracking-tight">Peak Ridge</span>
              <span className="block text-amber-400 text-xs font-medium tracking-widest uppercase">Contracting</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    active
                      ? 'text-amber-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-semibold text-sm rounded transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 pb-4 pt-2">
            {links.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    active ? 'text-amber-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="px-4 pt-2">
              <Link
                to="/contact"
                className="block text-center px-5 py-3 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-semibold text-sm rounded transition-colors"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
