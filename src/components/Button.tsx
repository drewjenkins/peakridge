import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2'

const variants = {
  primary: 'bg-amber-400 hover:bg-amber-300 text-[#0F172A] focus:ring-offset-[#0F172A]',
  outline: 'border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#0F172A]',
  ghost: 'text-amber-400 hover:text-amber-300 underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  className = '',
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
