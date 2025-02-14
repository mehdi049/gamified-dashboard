import { ListProps } from './types'

export const Ul = ({ children, className }: ListProps) => {
  return <ul className={`space-y-2 ${className}`}>{children}</ul>
}
