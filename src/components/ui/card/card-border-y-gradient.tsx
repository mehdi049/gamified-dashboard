import { CardProps } from './types'

export const CardBorderYGradient = ({ className, children }: CardProps) => {
  return (
    <div
      className={`bg-center bg-no-repeat p-4 ${className}`}
      style={{
        backgroundImage: 'url(/img/bg-border-gradient-y.png)',
        backgroundSize: '100% 100%',
      }}
    >
      {children}
    </div>
  )
}
