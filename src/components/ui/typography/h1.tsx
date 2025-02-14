import { TypographyProps } from './types'

export default function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={'text-3xl font-bold md:text-5xl ' + (className ?? '')}
      {...props}
    >
      {children}
    </h1>
  )
}
