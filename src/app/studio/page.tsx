import H2 from '@/components/ui/typography/h2'
import { StudioBanner } from './_components/banner'
import { Hr } from '@/components/ui/hr'
import { CreationTools } from './_components/creation-tools'

export default function Page() {
  return (
    <>
      <H2 className="text-foreground">Welcome to Your Creative Playground</H2>
      <StudioBanner />
      <Hr />
      <CreationTools />
    </>
  )
}
