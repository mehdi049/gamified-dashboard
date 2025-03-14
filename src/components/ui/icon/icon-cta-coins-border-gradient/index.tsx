import { IconBorderGradientProps } from '../types'

export const IconCtaCoinsBorderGradient = ({
  children,
  className,
}: IconBorderGradientProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: 'url(/img/bg-cta-coins-border-gradient.png)',
        backgroundSize: '100% 100%',
      }}
    >
      {children}
    </div>
  )
}
