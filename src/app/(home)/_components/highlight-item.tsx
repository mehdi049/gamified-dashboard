import { Button } from '@/components/ui/button'
import { CardGradient } from '@/components/ui/card/card-gradient'
import H5 from '@/components/ui/typography/h5'
import Image from 'next/image'

interface HightLightItemProps {
  title: string
  text?: string
  icon: string
  ctaText: string
}
export const HightLightItem = ({
  title,
  text,
  icon,
  ctaText,
}: HightLightItemProps) => {
  return (
    <CardGradient>
      <H5 className="flex items-center gap-2 tracking-wider uppercase">
        <Image src="/svg/trophy.svg" width={16} height={16} alt={title} />{' '}
        {title}
      </H5>
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image src={`/svg/${icon}.svg`} width={55} height={55} alt={title} />{' '}
          {text && (
            <span className="text-2xl font-bold text-white">{text}</span>
          )}
        </div>
        <Button className="px-2 sm:max-w-[125px]">
          <Image
            src="/svg/arrow-top-bg-white.svg"
            width={20}
            height={20}
            alt="arrow-top"
            className="h-5 w-5"
          />
          <span>{ctaText}</span>
        </Button>
      </div>
    </CardGradient>
  )
}
