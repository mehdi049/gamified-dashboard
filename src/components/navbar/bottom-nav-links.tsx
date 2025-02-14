import { NavItem } from '../ui/nav/nav-item'
import { NavWrapper } from '../ui/nav/nav-wrapper'

export const BottomNavLinks = () => {
  const navItems = [
    {
      icon: 'help-round',
      href: '#',
      isActive: false,
      children: 'Help',
    },
    {
      icon: 'settings',
      href: '#',
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
    <NavWrapper>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          href={item.href}
          isActive={item.isActive}
        >
          {item.children}
        </NavItem>
      ))}
    </NavWrapper>
  )
}
