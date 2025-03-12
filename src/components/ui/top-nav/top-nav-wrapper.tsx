import { ChildrenProps } from '../types'

export const TopNavWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="px-1">
      <ul className="border-gradient-tx-green relative flex w-full items-center gap-6 rounded-2xl bg-[#362658] px-5 py-3">
        {children}
      </ul>
    </div>
  )
}
