import { NavSection } from './nav-section'

export const RightSidebar = () => {
  return (
    <div className="hidden min-h-[calc(100vh-64px)] min-w-[350px] space-y-8 pr-8 lg:block">
      <NavSection />
    </div>
  )
}
