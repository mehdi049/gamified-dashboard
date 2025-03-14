import H2 from '@/components/ui/typography/h2'
import { Highlights } from './_components/highlights'
import { QuickActions } from './_components/quick-actions'

import { CommunityHelp } from './_components/community-help'

export default function Home() {
  return (
    <>
      <H2 className="text-foreground">Welcome Back, Madelen</H2>

      <Highlights />

      <QuickActions />

      <CommunityHelp />
    </>
  )
}
