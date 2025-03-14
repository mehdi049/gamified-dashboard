import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChildrenProps } from '../types'
import { IconBlur } from '../icon/icon-white-blur'

interface NavItemProps extends ChildrenProps {
  icon?: string
  href?: string
  isActive?: boolean
}
export const TopNavItem = ({
  icon,
  href,
  isActive,
  children,
}: NavItemProps) => {
  return (
    <li
      className={`text-base font-medium text-white duration-200 hover:opacity-100 ${isActive ? '' : 'opacity-70'}`}
    >
      <Link
        href={href ?? '#'}
        className="flex items-center justify-between gap-1"
      >
        {icon && (
          <>
            {isActive ? (
              <IconBlur icon={icon} />
            ) : (
              <Image
                src={`/svg/${icon}.svg`}
                alt="icon"
                width={21}
                height={21}
              />
            )}
          </>
        )}
        {children}
      </Link>
    </li>
  )
}
