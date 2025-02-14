import H2 from '@/components/ui/typography/h2'
import { SearchForm } from './_components/search-form'
import { HomeBanner } from './_components/home-banner'
import { Highlights } from './_components/highlights'
import { QuickActions } from './_components/quick-actions'

export default function Home() {
  return (
    <>
      <div className="grow space-y-8 px-8">
        <SearchForm />

        <H2 className="text-white">Welcome Back, Madelen</H2>

        <HomeBanner />

        <Highlights />

        <QuickActions />
      </div>
    </>
  )
}
