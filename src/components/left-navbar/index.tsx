'use client'
import { BottomNavLinks } from './bottom-nav-links'
import Image from 'next/image'
import { TopNavLinks } from './top-nav-links'
import { Button } from '../ui/button'
import { useRouter, usePathname } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <div>
      <div className="hidden min-h-[calc(100vh-64px)] w-[240px] flex-col justify-between gap-4 md:flex">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <Image src="/svg/logo.svg" alt="logo" width={50} height={50} />
            {!isHome && (
              <Button
                variant="secondary"
                size="icon"
                className="h-[50px] w-[50px]"
                onClick={() => router.back()}
              >
                <Image
                  src="/svg/chevron-left.svg"
                  height={20}
                  width={20}
                  alt="back"
                />
              </Button>
            )}
          </div>
          <TopNavLinks />
        </div>
        <BottomNavLinks />
      </div>
    </div>
  )
}
