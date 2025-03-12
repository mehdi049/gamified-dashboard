import { HightLightItem } from './highlight-item'

export const Highlights = () => {
  const hightLightItems = [
    {
      title: 'CURRENT PLAN',
      icon: 'trophy-gold',
      text: 'Designer',
      ctaText: 'Upgrade',
    },
    {
      title: 'Saved projects',
      icon: 'folder-gold',
      text: 'Inventory',
      ctaText: 'Open ',
    },
    {
      title: 'TRENDING MESHES',
      icon: 'flower-gold',
      text: 'Popular',
      ctaText: 'Discover',
    },
  ]

  return (
    <div className="overflow-x-auto pb-2">
      <div className="grid grid-cols-1 items-center gap-4 lg:min-w-5xl lg:grid-cols-3">
        {hightLightItems.map((item, index) => (
          <HightLightItem
            key={index}
            title={item.title}
            icon={item.icon}
            text={item.text}
            ctaText={item.ctaText}
          />
        ))}
      </div>
    </div>
  )
}
