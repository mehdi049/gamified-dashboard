import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBlur } from '../icon/icon-white-blur'
import { TopNavItemType } from './types'

interface NavItemProps {
  navItem: TopNavItemType
}
export const TopNavItem = ({ navItem }: NavItemProps) => {
  return (
    <li
      className={`text-foreground text-base font-medium duration-200 hover:opacity-100 ${navItem.isActive ? '' : 'opacity-70'}`}
    >
      <Link
        href={navItem.href ?? '#'}
        className="flex items-center justify-between gap-1"
      >
        {navItem.icon && (
          <>
            {navItem.isActive ? (
              <IconBlur icon={navItem.icon} />
            ) : (
              <Image
                src={`/svg/${navItem.icon}.svg`}
                alt="icon"
                width={21}
                height={21}
              />
            )}
          </>
        )}
        {navItem.text}
      </Link>
    </li>
  )
}
