import { ChildrenProps } from '../types'

interface BadgeProps extends ChildrenProps {
  className?: string
}
export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={`bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-sm font-medium shadow-md shadow-black/30 ${className}`}
    >
      {children}
    </span>
  )
}
