import H1 from '@/components/ui/typography/h1'
import Image from 'next/image'

export const StudioBanner = () => {
  return (
    <div
      className="flex h-72 w-full flex-col justify-end rounded-4xl bg-white bg-cover bg-center p-8"
      style={{ backgroundImage: 'url(/img/bg-banner.png)' }}
    >
      <div className="space-y-4">
        <H1 className="text-foreground lg:text-5xl">Emporium</H1>
        <div className="flex items-center justify-between gap-4">
          <p className="max-w-xl text-lg">
            Browse & Remix a Vast Collection of Editable, Game-Ready Meshes.With
            Remix, transform any Products - no skills needed.
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
  )
}
