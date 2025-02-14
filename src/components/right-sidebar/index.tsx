import { ProfileInfo } from './profile-info'
import { Profile } from './types'
import { StatsSection } from './stats-section'
import { ActivitiesSection } from './activities-section'
import { DiscordSection } from './discord-section'
import { NavSection } from './nav-section'

export const RightSidebar = () => {
  const profile: Profile = {
    name: 'Madelen Sam',
    username: 'raymadelen',
    image: 'avatar.png',
    bio: 'Lorem  odor amet, consec tetuer adipi scing elit ctus effi citur cura erdiet ntum senectus odio.',
  }

  return (
    <div className="min-h-[calc(100vh-64px)] w-full max-w-80 space-y-8">
      <NavSection />
      <div className="mx-auto max-w-64 space-y-4 divide-y divide-white/30">
        <ProfileInfo profile={profile} />

        <ActivitiesSection />

        <StatsSection />

        <DiscordSection />
      </div>
    </div>
  )
}
