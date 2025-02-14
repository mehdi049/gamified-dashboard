import { TypographyProps } from './types'

export default function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4 className={'text-lg font-bold ' + (className ?? '')} {...props}>
      {children}
    </h4>
  )
}
