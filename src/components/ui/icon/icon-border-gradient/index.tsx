import { IconBorderGradientProps } from '../types'

export const IconBorderGradient = ({
  children,
  className,
}: IconBorderGradientProps) => {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: 'url(/img/bg-icon-border-gradient.png)',
        backgroundSize: '100% 100%',
      }}
    >
      {children}
    </div>
  )
}
