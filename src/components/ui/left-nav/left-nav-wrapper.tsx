import { ChildrenProps } from '../types'

export const LeftNavWrapper = ({ children }: ChildrenProps) => {
  return <ul className="space-y-4">{children}</ul>
}
