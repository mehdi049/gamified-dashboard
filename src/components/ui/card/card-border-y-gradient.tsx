import { ChildrenProps } from '../types'

export const CardBorderYGradient = ({ children }: ChildrenProps) => {
  return (
    <div className="py-1">
      <div
        className="bg-center bg-no-repeat p-4"
        style={{
          backgroundImage: 'url(/img/bg-border-gradient-y.png)',
          backgroundSize: '100% 100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}
