import { TypographyProps } from './types'

export default function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={'text-2xl font-bold md:text-[40px] ' + (className ?? '')}
      {...props}
    >
      {children}
    </h2>
  )
}
