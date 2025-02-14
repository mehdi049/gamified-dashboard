import React from 'react'
import Image from 'next/image'
import { ListProps } from './types'

export const Li = ({ children, className }: ListProps) => {
  return (
    <li className={`flex items-center gap-2 ${className}`}>
      <Image src="/svg/circle-red.svg" alt="check" width={12} height={12} />
      {children}
    </li>
  )
}
