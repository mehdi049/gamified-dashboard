import { TypographyProps } from './types'

export default function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={'text-xl font-bold md:text-[30px] ' + (className ?? '')}
      {...props}
    >
      {children}
    </h3>
  )
}
