import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChildrenProps } from '../types'

interface NavItemProps extends ChildrenProps {
  icon?: string
  href?: string
  isActive?: boolean
}
export const LeftNavItem = ({
  icon,
  href,
  isActive,
  children,
}: NavItemProps) => {
  return (
    <li
      className={`w-full max-w-44 cursor-pointer rounded-full border border-transparent px-4 py-2 text-lg font-semibold text-white duration-200 hover:border-white hover:bg-white/20 ${isActive ? 'border-white bg-white/20 shadow-md shadow-[#00000040]' : ''}`}
    >
      <Link href={href ?? '#'} className="flex items-center gap-4">
        {' '}
        {icon && (
          <Image src={`/svg/${icon}.svg`} alt="icon" width={22} height={22} />
        )}
        {children}
      </Link>
    </li>
  )
}
