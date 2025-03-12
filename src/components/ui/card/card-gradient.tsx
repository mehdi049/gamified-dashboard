import { ChildrenProps } from '../types'

export const CardGradient = ({ children }: ChildrenProps) => {
  return (
    <div
      className="max-w-sm space-y-4 rounded-4xl border-t border-white/50 p-6"
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
