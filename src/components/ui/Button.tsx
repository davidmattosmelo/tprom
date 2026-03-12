import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  children?: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button'
    href?: never
  }

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-orange text-white hover:bg-brand-orange-light shadow-glow-orange hover:shadow-lg',
  secondary:
    'bg-white text-brand-dark hover:bg-brand-gray-light border border-brand-border',
  ghost: 'bg-transparent text-white hover:bg-white/10 border border-white/20',
  outline:
    'bg-transparent text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center gap-2 font-semibold font-display rounded-xl',
    'transition-all duration-200 ease-out active:scale-95',
    'focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ((props as ButtonAsAnchor).as === 'a') {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor & { as: 'a' }
    return (
      <a className={baseClasses} {...anchorProps}>
        {loading ? <span>...</span> : children}
      </a>
    )
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton & { as?: 'button' }
  return (
    <button className={baseClasses} {...buttonProps}>
      {loading ? <span>...</span> : children}
    </button>
  )
}
