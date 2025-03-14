import { TopNavWrapper } from '@/components/ui/top-nav/top-nav-wrapper'
import { TopNavItemType } from '@/components/ui/top-nav/types'

export const NotificationNav = () => {
  const navItems: TopNavItemType[] = [
    { text: 'Alerts', icon: 'alert', href: '#', isActive: false },
    { text: 'Updates', icon: 'updates', href: '#', isActive: true },
  ]
  return <TopNavWrapper navItems={navItems} />
}
