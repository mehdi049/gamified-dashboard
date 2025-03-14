import { Badge } from '../../ui/badge'
import { IconBorderGradient } from '../../ui/icon/icon-border-gradient'
import { IconBlur } from '../../ui/icon/icon-white-blur'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Notification } from '@/types/notification.types'
import { NotificationItem } from './notification-item'

const notificationItems: Notification[] = [
  {
    message:
      'Unlock premium features with a special 20% discount! Upgrade your plan today.',
  },
  {
    message:
      'You’ve used 80% of your monthly quota. Consider upgrading to avoid.',
  },
  {
    message:
      'Your subscription will expire on Jan 15, 2024. Renew now to keep your benefits.',
  },
  {
    message:
      'New! Try the advanced analytics dashboard exclusive to Pro users.',
  },
]

export const NotificationPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconBorderGradient className="relative">
          <Badge variant="notification" className="absolute top-0 right-0" />
          <IconBlur icon="ring" />
        </IconBorderGradient>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <IconBlur icon="alert" />

            <span className="text-foreground inline-block h-4 text-sm font-bold uppercase">
              Alerts
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <IconBlur icon="updates" />
            <span className="text-foreground/70 text-sm font-bold uppercase">
              Updates
            </span>
          </div>
        </div>

        <div className="my-4 space-y-4 border-y border-white/50 p-4">
          {notificationItems.map((item, index) => (
            <NotificationItem key={index} item={item} />
          ))}
        </div>

        <p className="text-foreground text-center text-xs">
          See all notifications
        </p>
      </PopoverContent>
    </Popover>
  )
}
