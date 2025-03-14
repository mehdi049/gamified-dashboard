import { ROUTES } from '../../../routes'
import { LeftNavItem } from '../ui/left-nav/left-nav-item'
import { LeftNavWrapper } from '../ui/left-nav/left-nav-wrapper'

export const BottomNavLinks = () => {
  const navItems = [
    {
      icon: 'help-round',
      href: ROUTES.HELP.HELP_CENTER,
      isActive: false,
      children: 'Help',
    },
    {
      icon: 'settings',
      href: ROUTES.SETTINGS.PROFILE,
      isActive: false,
      children: 'Setting',
    },
    {
      icon: 'logout',
      href: '#',
      isActive: false,
      children: 'Logout',
    },
  ]

  return (
    <LeftNavWrapper>
      {navItems.map((item, index) => (
        <LeftNavItem
          key={index}
          icon={item.icon}
          href={item.href}
          isActive={item.isActive}
        >
          {item.children}
        </LeftNavItem>
      ))}
    </LeftNavWrapper>
  )
}
