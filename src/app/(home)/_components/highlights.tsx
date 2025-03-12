import { Button } from '@/components/ui/button'
import { CardGradient } from '@/components/ui/card/card-gradient'
import H5 from '@/components/ui/typography/h5'
import Image from 'next/image'

export const Highlights = () => {
  const hightLightItems = [
    {
      title: 'CURRENT PLAN',
      icon: 'trophy-gold',
      text: 'Designer',
      ctaText: 'Upgrade',
    },
    {
      title: 'Saved projects',
      icon: 'folder-gold',
      text: 'Inventory',
      ctaText: 'Open ',
    },
    {
      title: 'TRENDING MESHES',
      icon: 'flower-gold',
      text: 'Popular',
      ctaText: 'Discover',
    },
  ]

  return (
    <div className="overflow-x-auto pb-2">
      <div className="grid grid-cols-1 items-center gap-4 lg:min-w-5xl lg:grid-cols-3">
        {hightLightItems.map((item, index) => (
          <HightLightItem
            key={index}
            title={item.title}
            icon={item.icon}
            text={item.text}
            ctaText={item.ctaText}
          />
        ))}
      </div>
    </div>
  )
}

interface HightLightItemProps {
  title: string
  text?: string
  icon: string
  ctaText: string
}
const HightLightItem = ({
  title,
  text,
  icon,
  ctaText,
}: HightLightItemProps) => {
  return (
    <CardGradient>
      <>
        <H5 className="flex items-center gap-2 tracking-wider uppercase">
          <Image src="/svg/trophy.svg" width={16} height={16} alt={title} />{' '}
          {title}
        </H5>
        <div className="flex w-full items-center justify-between gap-4">
          <Image src={`/svg/${icon}.svg`} width={55} height={55} alt={title} />{' '}
          {text && (
            <span className="text-2xl font-bold text-white">{text}</span>
          )}
          <Button>
            <Image
              src="/svg/arrow-top-bg-white.svg"
              width={24}
              height={24}
              alt="arrow-top"
              className="h-6 w-6"
            />
            {ctaText}
          </Button>
        </div>
      </>
    </CardGradient>
  )
}
