import Image from 'next/image'
import { IconCtaCoinsBorderGradient } from '../ui/icon/icon-cta-coins-border-gradient'
import { NotificationPopover } from './notification/notification-popover'
import { ProfileMenu } from './profile/profile-menu'

export const NavSection = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <IconCtaCoinsBorderGradient>
        <div className="relative flex h-11 w-full max-w-max items-center justify-between gap-3 rounded-full p-1.5 pr-6">
          <Image src="/svg/coins-gold.svg" width={36} height={36} alt="coins" />
          <span className="text-lg">100,000</span>
          <Image
            src="/svg/plus-bg-red.svg"
            width={30}
            height={30}
            alt="plus"
            className="absolute -top-2.5 -right-10 h-20 w-20"
          />
        </div>
      </IconCtaCoinsBorderGradient>

      <div className="flex items-center gap-4">
        <NotificationPopover />

        <ProfileMenu />
      </div>
    </div>
  )
}
