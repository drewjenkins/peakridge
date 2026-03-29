import { Link } from 'react-router-dom'
import type { Service } from '../data/services'

interface ServiceCardProps {
  service: Service
  compact?: boolean
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  if (compact) {
    return (
      <Link
        to={`/services#${service.id}`}
        className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-400/50 transition-all duration-200"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{service.icon}</span>
            <h3 className="font-bold text-[#0F172A] text-base">{service.name}</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{service.description}</p>
          <p className="mt-3 text-amber-600 font-semibold text-sm">Starting at {service.startingPrice}</p>
        </div>
      </Link>
    )
  }

  return (
    <div id={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 scroll-mt-24">
      <div className="aspect-[16/7] overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{service.icon}</span>
            <h3 className="font-bold text-[#0F172A] text-xl sm:text-2xl">{service.name}</h3>
          </div>
          <span className="flex-shrink-0 bg-amber-50 text-amber-700 border border-amber-200 text-sm font-semibold px-3 py-1 rounded-full">
            From {service.startingPrice}
          </span>
        </div>
        <p className="text-slate-600 leading-relaxed mb-6">{service.fullDescription}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5 text-sm text-slate-700">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          Get a Free Estimate
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
