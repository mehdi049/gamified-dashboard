import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import H1 from '@/components/ui/typography/h1'
import H2 from '@/components/ui/typography/h2'
import H3 from '@/components/ui/typography/h3'
import H5 from '@/components/ui/typography/h5'
import Image from 'next/image'

export default function Home() {
  const HightLightItems = [
    {
      title: 'CURRENT PLAN',
      icon: 'trophy-gold',
      text: 'Designer',
      ctaText: 'Upgrade',
    },
    {
      title: 'Saved projects',
      icon: 'folder-gold',
      ctaText: 'Open Library ',
    },
    {
      title: 'TRENDING MESHES',
      icon: 'flower-gold',
      text: 'Popular',
      ctaText: 'Discover',
    },
  ]
  return (
    <>
      <div className="grow space-y-8 px-8">
        <div className="relative">
          <Image
            src="/svg/search.svg"
            width={22}
            height={22}
            alt="search"
            className="absolute top-4 left-4"
          />
          <Input placeholder="Search anything..." />
        </div>
        <H2 className="text-white">Welcome Back, Madelen</H2>

        <div
          className="flex h-72 w-full flex-col justify-end rounded-4xl bg-white bg-cover bg-center p-8"
          style={{ backgroundImage: 'url(/img/bg-banner.png)' }}
        >
          <div className="space-y-4">
            <H1 className="text-white">Your Next Creation Starts Here</H1>
            <div className="flex items-center justify-between gap-4">
              <p className="max-w-xl text-lg">
                Browse & Remix a Vast Collection of Editable, Game-Ready
                Meshes.With Remix AI, transform any asset—no skills needed.
              </p>

              <Image
                src="/svg/arrow-right-bg-black.svg"
                width={45}
                height={45}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-4">
          {HightLightItems.map((item, index) => (
            <HightLightItem
              key={index}
              title={item.title}
              icon={item.icon}
              text={item.text}
              ctaText={item.ctaText}
            />
          ))}
        </div>

        <H3 className="text-white">Get Started – Quick Actions</H3>

        <Carousel>
          <CarouselContent>
            <CarouselItem className="max-w-md">
              <ActionItem
                background="action-img1"
                title="New? Start Here!"
                text="Learn the basics of how to use OOR3D"
              />
            </CarouselItem>

            <CarouselItem className="max-w-md">
              <ActionItem
                background="action-img2"
                title="Edit Your First Mesh"
                text="Beginner friendly"
              />
            </CarouselItem>

            <CarouselItem className="max-w-md">
              <ActionItem
                background="action-img3"
                title="Upload on IMVU"
                text="Learn how to upload the remixed mesh"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
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
    <div
      className="space-y-4 rounded-4xl border border-white/50 p-6"
      style={{
        background:
          'linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(0, 8, 153, 0.6) 100%)',
        backdropFilter: 'blur(50px)',
      }}
    >
      <H5 className="flex items-center gap-2 uppercase">
        <Image src="/svg/trophy.svg" width={16} height={16} alt={title} />{' '}
        {title}
      </H5>
      <div className="flex w-full items-center justify-between gap-4">
        <Image src={`/svg/${icon}.svg`} width={55} height={55} alt={title} />{' '}
        {text && <span className="text-2xl font-bold text-white">{text}</span>}
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
    </div>
  )
}

interface ActionItemProps {
  background: string
  title: string
  text: string
}

const ActionItem = ({ background, title, text }: ActionItemProps) => {
  return (
    <div
      className="flex h-60 flex-col justify-end gap-4 rounded-4xl bg-cover bg-center p-4"
      style={{ backgroundImage: `url(/img/${background}.png)` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[38px] font-bold text-white">{title}</p>
          <p className="text-sm font-bold">{text}</p>
        </div>

        <Image
          src="/svg/arrow-right-bg-black.svg"
          width={45}
          height={45}
          alt=""
        />
      </div>
    </div>
  )
}
