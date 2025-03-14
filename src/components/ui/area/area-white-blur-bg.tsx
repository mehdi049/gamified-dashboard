import { ChildrenProps } from '../types'

interface AreaWhiteBlurBgProps extends ChildrenProps {
  className?: string
}
export const AreaWhiteBlurBg = ({
  children,
  className,
}: AreaWhiteBlurBgProps) => {
  return (
    <div
      className={`text-foreground/70 rounded-2xl border border-white/40 bg-white/10 p-4 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}
