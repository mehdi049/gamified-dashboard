import { IconBorderGradient } from '../../ui/icon/icon-border-gradient'
import { IconBlur } from '../../ui/icon/icon-white-blur'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
const menuItems = [
  {
    href: '#',
    icon: '/svg/profile-menu-settings.svg',
    title: 'Account Settings',
  },
  {
    href: '#',
    icon: '/svg/profile-menu-dollar.svg',
    title: 'Manage Billing',
  },
  {
    href: '#',
    icon: '/svg/profile-menu-help.svg',
    title: 'Get Support',
  },
]
export const ProfileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconBorderGradient>
          <IconBlur icon="user" size={22} />
        </IconBorderGradient>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex items-center gap-2">
          <Image
            src="/img/avatar.png"
            alt="Madelen Sam"
            width={72}
            height={72}
            className="rounded-full object-contain object-center"
          />
          <div className="space-y-0.5">
            <span className="text-foreground block text-lg/5 font-semibold">
              Madelen Sam
            </span>
            <span className="text-foreground/70 block text-xs">
              @raymadelen
            </span>
            <span className="text-foreground inline-block rounded-full bg-linear-to-r from-[#70B4E5] from-0% to-[#C417E0] px-2 py-1 text-center text-xs font-semibold">
              Designer
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-4 border-t border-white/50 p-4 pb-0">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4"
            >
              <Image src={item.icon} alt="" width={32} height={32} />
              <span className="text-foreground text-base font-semibold">
                {item.title}
              </span>
            </Link>
          ))}

          <Button variant="secondary" className="w-full text-xs">
            <Image src="/svg/logout.svg" width={14} height={14} alt="logout" />
            Logout
          </Button>

          <div className="space-x-4 text-center">
            <Link href="#" className="text-foreground text-xs">
              Term of Service
            </Link>
            <Link href="#" className="text-foreground text-xs">
              Privacy Policy
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
