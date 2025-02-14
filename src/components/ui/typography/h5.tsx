import { TypographyProps } from './types'

export default function H5({ children, className, ...props }: TypographyProps) {
  return (
    <h5 className={'text-xs font-bold ' + (className ?? '')} {...props}>
      {children}
    </h5>
  )
}
