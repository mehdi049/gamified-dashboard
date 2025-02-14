import H4 from '../ui/typography/h4'

export const ActivitiesSection = () => {
  const statsItems = [
    {
      title: 'Total Remixes',
      value: '234',
    },
    {
      title: 'Total Downloads',
      value: '1342',
    },
    {
      title: 'Total projects',
      value: '3494',
    },
  ]

  return (
    <div className="space-y-2 pb-4">
      <H4>Statistics</H4>
      <div className="space-y-2 divide-y divide-dashed divide-white/20">
        {statsItems.map((item, index) => (
          <StatsItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  )
}

interface StatsItemProps {
  title: string
  value: string
}
const StatsItem = ({ title, value }: StatsItemProps) => {
  return (
    <div>
      <span className="block text-[26px] font-bold text-white">{value}</span>
      <span className="text-xs uppercase">{title}</span>
    </div>
  )
}
