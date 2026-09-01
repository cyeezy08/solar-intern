import { cn } from '@/lib/utils'

interface TableProps {
  className?: string
  children: React.ReactNode
}

export function Table({ className, children }: TableProps) {
  return (
    <div className={cn('rounded-border', className)}>
      <div className="overflow-auto">
        {children}
      </div>
    </div>
  )
}
