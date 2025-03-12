import Image from 'next/image'
import { IconBlur } from '../ui/icon-blur'

export const NavSection = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <div
        className="relative flex w-full max-w-max items-center justify-between gap-3 rounded-full border p-1.5 pr-6"
        /*style={{
          borderImageSource: 'linear-gradient(45deg, #FFC90080, #DD00CEB2)',
          borderImageSlice: 1,
          
        }}*/
      >
        <Image src="/svg/coins-gold.svg" width={36} height={36} alt="coins" />
        <span className="text-lg">100,000</span>
        <Image
          src="/svg/plus-bg-red.svg"
          width={36}
          height={36}
          alt="plus"
          className="absolute -top-3.5 -right-12 h-24 w-24"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center gap-2 rounded-full border border-gray-50">
          <span className="bg-primary absolute top-0 right-0 h-3 w-3 rounded-full"></span>
          <IconBlur icon="ring" />
        </div>

        <div className="flex h-12 w-12 items-center justify-center gap-2 rounded-full border border-gray-50">
          <IconBlur icon="user" />
        </div>
      </div>
    </div>
  )
}
