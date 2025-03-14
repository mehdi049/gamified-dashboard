import Image from 'next/image'
import { Tag } from '../tag'
import { Badge } from '../badge'

interface CardActionProps {
  background: string
  title: string
  text?: string
  description?: string
  isFree?: boolean
  titleSize?: string
  cardSize?: 'lg' | 'sm'
  arrowRight?: boolean
  tags?: string[]
  isVideo?: boolean
  badge?: string
}

export const CardAction = ({
  background,
  title,
  text,
  description,
  isFree,
  titleSize = 'text-[38px]',
  cardSize = 'lg',
  arrowRight = true,
  tags,
  isVideo,
  badge,
}: CardActionProps) => {
  const cardHeight = cardSize === 'lg' ? 'h-60' : 'h-[215px]'

  return (
    <div className="space-y-4">
      <div
        className={`relative max-w-md cursor-pointer rounded-4xl border-3 border-transparent p-0.5 duration-200 hover:border-white ${isFree ? 'border-white' : ''}`}
      >
        <div
          className={`flex ${cardHeight} relative flex-col justify-end gap-4 rounded-4xl bg-cover bg-center p-4`}
          style={{ backgroundImage: `url(/img/${background}.png)` }}
        >
          {badge && <Badge className="absolute top-4 left-4">{badge}</Badge>}
          {isFree && (
            <Image
              src="/svg/free.svg"
              width={80}
              height={3}
              alt="is free"
              className="absolute -top-4 -right-2"
            />
          )}
          <div className="flex items-center justify-between">
            <div>
              <p className={`${titleSize} text-foreground font-bold`}>
                {title}
              </p>
              {text && <p className="text-sm font-bold opacity-80">{text}</p>}
            </div>
            {arrowRight && (
              <Image
                src="/svg/arrow-right-bg-black.svg"
                width={45}
                height={45}
                alt=""
              />
            )}
          </div>
          {isVideo && (
            <Image
              src="/svg/video-player.svg"
              width={75}
              height={75}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            />
          )}
        </div>
      </div>
      {description && <p className="text-sm opacity-70">{description}</p>}
      {tags && (
        <div
          className={`flex items-center justify-start gap-2 ${description ? '' : 'pl-4'}`}
        >
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      )}
    </div>
  )
}
