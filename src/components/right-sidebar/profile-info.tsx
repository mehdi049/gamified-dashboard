import Image from 'next/image'
import { Profile } from './types'

interface ProfileInfoProps {
  profile: Profile
}

export const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  return (
    <div className="space-y-1 pb-4 text-center">
      <div className="relative mx-auto h-40 w-40">
        <Image
          alt="profile"
          src={`/img/${profile.image}`}
          width={156}
          height={156}
          className="mx-auto h-40 w-40 rounded-full object-cover"
        />
        <Image
          src={'/svg/camera-bg-black.svg'}
          alt="edit"
          width={30}
          height={30}
          className="absolute right-5 bottom-5"
        />
      </div>
      <p className="flex items-center justify-center gap-2 text-[28px] font-semibold text-white">
        {profile.name}

        <Image src={'/svg/edit.svg'} alt="edit" width={16} height={16} />
      </p>
      <span className="block text-sm">@{profile.username}</span>
      <p className="text-sm">{profile.bio}</p>
    </div>
  )
}
