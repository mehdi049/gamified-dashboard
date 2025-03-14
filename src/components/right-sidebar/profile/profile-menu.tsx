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

export const ProfileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconBorderGradient>
          <IconBlur icon="user" />
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
            <span
              className="text-foreground inline-block rounded-full bg-linear-to-r from-[#70B4E5] from-0% to-[#C417E0] px-2 py-1 text-center text-xs font-semibold"
              /*style={{
                background:
                  'linear-gradient(129.67deg, #70B4E5 0%, #C417E0 99.9%)',
              }}*/
            >
              Designer
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-4 border-t border-white/50 p-4 pb-0">
          <Link href="#" className="flex items-center gap-4">
            <Image
              src="/svg/profile-menu-settings.svg"
              alt=""
              width={32}
              height={32}
            />
            <span className="text-foreground text-base font-semibold">
              Account Settings
            </span>
          </Link>
          <Link href="#" className="flex items-center gap-4">
            <Image
              src="/svg/profile-menu-dollar.svg"
              alt=""
              width={32}
              height={32}
            />
            <span className="text-foreground text-base font-semibold">
              Manage Billing
            </span>
          </Link>
          <Link href="#" className="flex items-center gap-4">
            <Image
              src="/svg/profile-menu-help.svg"
              alt=""
              width={32}
              height={32}
            />
            <span className="text-foreground text-base font-semibold">
              Get Support
            </span>
          </Link>

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
