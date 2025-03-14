import { ROUTES } from '../../../routes'
import { LeftNavItem } from '../ui/left-nav/left-nav-item'
import { LeftNavWrapper } from '../ui/left-nav/left-nav-wrapper'

export const TopNavLinks = () => {
  const navItems = [
    {
      icon: 'dashboard',
      href: ROUTES.HOME,
      isActive: true,
      children: 'Dashboard',
    },
    {
      icon: 'studio',
      href: ROUTES.STUDIO.HOME,
      isActive: false,
      children: 'Create',
    },
    {
      icon: 'library',
      href: ROUTES.INVENTORY,
      isActive: false,
      children: 'Inventory',
    },
    {
      icon: 'store',
      href: ROUTES.STORE,
      isActive: false,
      children: 'Store',
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
