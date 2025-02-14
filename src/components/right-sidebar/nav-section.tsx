import Image from 'next/image'

export const NavSection = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="relative flex w-full max-w-max items-center justify-between gap-3 rounded-2xl border p-2 pr-6">
        <Image src="/svg/coins-gold.svg" width={36} height={36} alt="coins" />
        <span className="text-lg">100,000</span>
        <Image
          src="/svg/plus-bg-red.svg"
          width={36}
          height={36}
          alt="plus"
          className="absolute -top-4 -right-12 h-24 w-24"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center gap-2 rounded-full border border-gray-50">
          <span className="bg-primary absolute top-0 right-0 h-3 w-3 rounded-full"></span>
          <Image
            src="/svg/ring.svg"
            width={21}
            height={21}
            alt="notification"
          />
        </div>

        <div className="flex h-12 w-12 items-center justify-center gap-2 rounded-full border border-gray-50">
          <Image src="/svg/user.svg" width={21} height={21} alt="user" />
        </div>
      </div>
    </div>
  )
}
