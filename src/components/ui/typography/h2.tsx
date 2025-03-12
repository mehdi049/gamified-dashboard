import { TypographyProps } from './types'

export default function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={'text-xl font-bold md:text-[25px] ' + (className ?? '')}
      {...props}
    >
      {children}
    </h2>
  )
}
