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
      className={`rounded-2xl border border-white/40 bg-white/10 p-4 text-white/70 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}
