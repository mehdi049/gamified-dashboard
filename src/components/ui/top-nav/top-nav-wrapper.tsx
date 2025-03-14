import { TopNavItem } from './top-nav-item'
import { TopNavItemType } from './types'

interface TopNavWrapperProps {
  navItems: TopNavItemType[]
}
export const TopNavWrapper = ({ navItems }: TopNavWrapperProps) => {
  return (
    <div className="px-1">
      <ul
        className="flex w-full items-center gap-6 bg-center bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: 'url(/img/bg-border-gradient-tx.png)',
          backgroundSize: '100% 100%',
        }}
      >
        {navItems.map((navItem, index) => (
          <TopNavItem key={index} navItem={navItem} />
        ))}
      </ul>
    </div>
  )
}
