import { ChildrenProps } from '../types'

export const TopNavWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="px-1">
      <ul
        className="flex w-full items-center gap-6 bg-center bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: 'url(/img/bg-border-gradient-tx.png)',
          backgroundSize: '100% 100%',
        }}
      >
        {children}
      </ul>
    </div>
  )
}
