import { CardProps } from './types'

export const CardGradient = ({ className, children }: CardProps) => {
  return (
    <div
      className={`max-w-sm space-y-4 rounded-4xl border-t border-white/50 p-4 md:p-6 ${className}`}
      style={{
        background:
          'linear-gradient(160deg, rgba(255, 255, 255, 0.12) 70%, rgba(0, 8, 153, 0.6) 100%)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {children}
    </div>
  )
}
