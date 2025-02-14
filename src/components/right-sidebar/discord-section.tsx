import { Button } from '../ui/button'
import H4 from '../ui/typography/h4'
import Image from 'next/image'

export const DiscordSection = () => {
  return (
    <div className="space-y-8 pb-4 text-center">
      <div className="space-y-1">
        <Image
          alt="discord"
          src="/svg/discord.svg"
          width={52}
          height={52}
          className="mx-auto"
        />
        <H4 className="text-white">Join us on discord!</H4>
        <p className="text-sm">
          Connect with fellow creators, stay in touch with the team, and get the
          latest updates and news from OOR!
        </p>
      </div>
      <Button className="w-full">Join Now</Button>
    </div>
  )
}
