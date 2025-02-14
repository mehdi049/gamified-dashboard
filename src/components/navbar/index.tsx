import { TopNavLinks } from './top-nav-links'
import { BottomNavLinks } from './bottom-nav-links'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] w-max flex-col justify-between gap-4 border-r border-white px-8">
      <div className="space-y-12">
        <Image src="/svg/logo.svg" alt="logo" width={50} height={50} />
        <TopNavLinks />
      </div>
      <BottomNavLinks />
    </div>
  )
}
