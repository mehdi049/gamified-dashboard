import { Li } from '../ui/list/li'
import { Ul } from '../ui/list/ul'
import H4 from '../ui/typography/h4'

export const StatsSection = () => {
  const recentActivites = [
    'Downloaded new mesh 1',
    'Downloaded new mesh 2',
    'Downloaded new mesh 3',
    'Downloaded new mesh 4',
  ]

  return (
    <div className="space-y-2 pb-4">
      <H4>Recent activities</H4>
      <Ul>
        {recentActivites.map((activity, index) => (
          <Li key={index} className="text-sm">
            {activity}
          </Li>
        ))}
      </Ul>
    </div>
  )
}
