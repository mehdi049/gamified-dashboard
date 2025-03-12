import { ChildrenProps } from '../types'

export const CardBorderYGradient = ({ children }: ChildrenProps) => {
  return (
    <div className="py-1">
      <div className="border-gradient-y-pink relative rounded-2xl bg-[#362658] p-4">
        {children}
      </div>
    </div>
  )
}
