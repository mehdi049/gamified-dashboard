import { NavSection } from './nav-section'

export const RightSidebar = () => {
  /*const profile: Profile = {
    name: 'Madelen Sam',
    username: 'raymadelen',
    image: 'avatar.png',
    bio: 'Lorem  odor amet, consec tetuer adipi scing elit ctus effi citur cura erdiet ntum senectus odio.',
  }*/

  return (
    <div className="hidden min-h-[calc(100vh-64px)] w-[400px] space-y-8 pr-8 lg:block">
      <NavSection />
      {/* 
      <div className="mx-auto max-w-64 space-y-4 divide-y divide-white/30">
        <ProfileInfo profile={profile} />

        <ActivitiesSection />

        <StatsSection />

        <DiscordSection />
      </div>
      */}
    </div>
  )
}
