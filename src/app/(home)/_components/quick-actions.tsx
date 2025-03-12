import { CardAction } from '@/components/ui/card/card-action'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import H3 from '@/components/ui/typography/h3'
//import Image from 'next/image'

export const QuickActions = () => {
  return (
    <>
      <H3 className="text-white">Get Started – Quick Actions</H3>

      <div className="relative -mt-4">
        <Carousel className="">
          <CarouselContent>
            <CarouselItem className="max-w-md">
              <CardAction
                background="action-img1"
                title="New? Start Here!"
                text="Learn the basics of how to use OOR3D"
              />
            </CarouselItem>

            <CarouselItem className="max-w-md">
              <CardAction
                background="action-img2"
                title="Edit Your First Mesh"
                text="Beginner friendly"
                isFree
              />
            </CarouselItem>

            <CarouselItem className="max-w-md">
              <CardAction
                background="action-img3"
                title="Upload on IMVU"
                text="Learn how to upload the remixed mesh"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0 z-10 bg-white/10" />
          <CarouselNext className="right-0 z-10 bg-white/10" />
          {/* 
          <Image
            src="/img/carousel-transparent.png"
            width={122}
            height={319}
            alt=""
            className="absolute -top-0 -left-8 z-0 h-[300px] rounded-l-3xl"
          />

          <Image
            src="/img/carousel-transparent.png"
            width={122}
            height={319}
            alt=""
            className="absolute -top-8 -right-14 z-0 h-[330px]"
          />
          */}
        </Carousel>
      </div>
    </>
  )
}
