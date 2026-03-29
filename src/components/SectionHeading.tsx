interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-[#0F172A]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
