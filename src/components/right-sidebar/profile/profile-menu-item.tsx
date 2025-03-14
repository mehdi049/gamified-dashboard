import { Notification } from '@/types/notification.types'
import Image from 'next/image'

interface NotificationItemProps {
  item: Notification
}
export const ProfileMenuItem = ({ item }: NotificationItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/svg/arrow-right-bg-transparent.svg"
        alt=""
        width={40}
        height={40}
      />

      <span className="text-foreground/70 text-xs font-semibold">
        {item.message}
      </span>
    </div>
  )
}
