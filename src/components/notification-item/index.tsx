import Image from 'next/image'
import { CardBorderYGradient } from '../ui/card/card-border-y-gradient'

interface NotificationItemProps {
  icon: string
  name: string
  time: string
  message: string
}
export const NotificationItem = ({
  icon,
  name,
  time,
  message,
}: NotificationItemProps) => {
  return (
    <CardBorderYGradient>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Image
            src={icon}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-contain object-center"
          />
          <div className="">
            <span className="block text-2xl font-semibold">{name}</span>
            <span className="block text-lg opacity-70">{time}</span>
          </div>
        </div>
        <p className="text-sm opacity-70">{message}</p>
      </div>
    </CardBorderYGradient>
  )
}
