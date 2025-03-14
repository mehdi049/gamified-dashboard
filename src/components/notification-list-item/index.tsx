import Image from 'next/image'
import { CardBorderYGradient } from '../ui/card/card-border-y-gradient'
import { Notification } from '@/types/notification.types'

interface NotificationListItemProps {
  notification: Notification
}
export const NotificationListItem = ({
  notification,
}: NotificationListItemProps) => {
  return (
    <CardBorderYGradient>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {notification.avatar && (
            <Image
              src={notification.avatar}
              alt={notification.name ?? ''}
              width={50}
              height={50}
              className="rounded-full object-contain object-center"
            />
          )}
          <div className="">
            <span className="block text-2xl font-semibold">
              {notification.name}
            </span>
            <span className="block text-base opacity-70">
              {notification.time}
            </span>
          </div>
        </div>
        <p className="text-sm opacity-70">{notification.message}</p>
      </div>
    </CardBorderYGradient>
  )
}
