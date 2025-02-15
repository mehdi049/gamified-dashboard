import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import H3 from '@/components/ui/typography/h3'
import Image from 'next/image'

export const QuickActions = () => {
  return (
    <>
      <H3 className="text-white">Get Started – Quick Actions</H3>

      <Carousel className="relative -mt-4">
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
              isFree
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
        <CarouselPrevious className="left-0 z-10" />
        <CarouselNext className="right-0 z-10" />
        <Image
          src="/img/carousel-transparent.png"
          width={122}
          height={319}
          alt=""
          className="absolute -top-14 -left-12 z-0 h-[380px] opacity-90"
        />

        <Image
          src="/img/carousel-transparent.png"
          width={122}
          height={319}
          alt=""
          className="absolute -top-8 -right-14 z-0 h-[330px]"
        />
      </Carousel>
    </>
  )
}

interface ActionItemProps {
  background: string
  title: string
  text: string
  isFree?: boolean
}

const ActionItem = ({ background, title, text, isFree }: ActionItemProps) => {
  return (
    <div
      className={`relative mt-4 flex h-60 flex-col justify-end gap-4 rounded-4xl bg-cover bg-center p-4 ${isFree ? 'border-3 border-white' : ''}`}
      style={{ backgroundImage: `url(/img/${background}.png)` }}
    >
      {isFree && (
        <Image
          src="/svg/free.svg"
          width={80}
          height={31}
          alt="is free"
          className="absolute -top-4 -right-2"
        />
      )}
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
