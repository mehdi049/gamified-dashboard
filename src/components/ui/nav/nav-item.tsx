import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavItemProps {
  icon?: string
  href?: string
  isActive?: boolean
  children: React.ReactNode
}
export const NavItem = ({ icon,href, isActive, children }: NavItemProps) => {
  return (
    <li className={` w-full max-w-44  rounded-full border-transparent hover:border-white px-4 py-2 text-white border-2 hover:font-bold duration-100 cursor-pointer text-lg ${isActive ? "font-bold border-white" :"font-semibold"}`}>
      <Link href={href ?? "#"} className='flex items-center gap-4'>      {icon && (
        <Image src={`/svg/${icon}.svg`} alt="icon" width={22} height={22} />
      )}

      {children}
      </Link>
    </li>
  )
}
