import { LeftNavItem } from '../ui/left-nav/left-nav-item'
import { LeftNavWrapper } from '../ui/left-nav/left-nav-wrapper'

export const TopNavLinks = () => {
  const navItems = [
    {
      icon: 'dashboard',
      href: '#',
      isActive: true,
      children: 'Dashboard',
    },
    {
      icon: 'studio',
      href: '#',
      isActive: false,
      children: 'Create',
    },
    /*{
      icon: 'global',
      href: '#',
      isActive: false,
      children: 'Emporium',
    },*/
    {
      icon: 'library',
      href: '#',
      isActive: false,
      children: 'Inventory',
    },
    {
      icon: 'store',
      href: '#',
      isActive: false,
      children: 'Store',
    },

    /*{
      icon: 'ocoins',
      href: '#',
      isActive: false,
      children: 'Ocoins',
    },*/
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
