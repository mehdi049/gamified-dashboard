import React from 'react'
import Image from 'next/image'
import { ListProps } from './types'

export const Li = ({ children, className }: ListProps) => {
  return (
    <li className={`flex items-center gap-2 ${className}`}>
      <Image src="/svg/check.svg" alt="check" width={15} height={15} />
      {children}
    </li>
  )
}
