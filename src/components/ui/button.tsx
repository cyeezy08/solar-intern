import { cn } from '@/lib/utils'

interface ButtonProps {
  className?: string
  variant?: 'default' | 'secondary' | 'destructive'
  size?: 'default' | 'sm' | 'lg'
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  children: React.ReactNode
}

export function Button({ className, variant = 'default', size = 'default', disabled, onClick, type = 'button', children }: ButtonProps) {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  }

  const sizes = {
    sm: 'h-8 rounded-xs px-3 text-sm',
    default: 'h-10 rounded-md px-4 text-base',
    lg: 'h-12 rounded-md px-6 text-lg',
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </button>
  )
}
