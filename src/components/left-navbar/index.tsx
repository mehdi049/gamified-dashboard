import { BottomNavLinks } from './bottom-nav-links'
import Image from 'next/image'
import { TopNavLinks } from './top-nav-links'

export const Navbar = () => {
  return (
    <div>
      <div className="hidden min-h-[calc(100vh-64px)] w-[240px] flex-col justify-between gap-4 md:flex">
        <div className="space-y-12">
          <Image src="/svg/logo.svg" alt="logo" width={50} height={50} />
          <TopNavLinks />
        </div>
        <BottomNavLinks />
      </div>
    </div>
  )
}
