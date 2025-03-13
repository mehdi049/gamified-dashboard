import Image from 'next/image'
import { Badge } from '../badge'
import { Button } from '../button'

interface CardClothesProps {
  imgClothes: string
  imgAvatar: string
  pseudo: string
  date: string
  badgeText?: string
  isLiked?: boolean
  hasDownload?: boolean
}
export const CardClothes = ({
  imgClothes,
  imgAvatar,
  pseudo,
  date,
  badgeText,
  isLiked,
  hasDownload,
}: CardClothesProps) => {
  return (
    <div className="space-y-4 sm:max-w-[260px]">
      <div className="group relative rounded-4xl border-3 border-transparent p-1 duration-200 hover:border-white">
        <div
          className="relative h-80 overflow-hidden rounded-4xl bg-cover bg-center bg-no-repeat p-10 shadow-lg shadow-black/20"
          style={{
            backgroundImage: 'url(/img/bg-card-clothes.png)',
          }}
        >
          {badgeText && (
            <Badge
              variant="outline"
              className="absolute top-4 right-4 bg-white/10"
            >
              {badgeText}
            </Badge>
          )}
          <Image src={imgClothes} width={180} height={220} alt="clothes" />
          <Image
            src={imgClothes}
            width={180}
            height={220}
            alt="clothes"
            className="-mt-6 rotate-180 opacity-10"
          />
        </div>

        <div className="absolute bottom-4 left-[4%] flex w-[92%] items-center justify-center gap-2 opacity-0 duration-200 group-hover:opacity-100">
          {hasDownload && (
            <Button variant="outline" className="text-sm sm:max-w-max">
              <Image src="/svg/download.svg" width={16} height={16} alt="" />
              Download
            </Button>
          )}

          <Button className="text-sm sm:max-w-max">
            <Image src="/svg/stars.svg" width={16} height={16} alt="" />
            Remix
          </Button>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <div
            className="flex h-11 w-11 items-center justify-between rounded-full bg-cover bg-center p-1"
            style={{ backgroundImage: 'url(/img/bg-avatar.png)' }}
          >
            <Image
              src={imgAvatar}
              width={30}
              height={30}
              alt="avatar"
              className="w-full"
            />
          </div>
          <div>
            <span className="block text-base text-white">{pseudo}</span>
            <span className="block text-xs text-white opacity-70">{date}</span>
          </div>
        </div>

        {isLiked ? (
          <Image
            src="/svg/heart-active.svg"
            width={20}
            height={20}
            alt="liked"
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/svg/heart-inactive.svg"
            width={20}
            height={20}
            alt="not liked"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  )
}
