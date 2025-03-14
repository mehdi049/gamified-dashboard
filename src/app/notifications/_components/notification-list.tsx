import { NotificationListItem } from '@/components/notification-list-item'

const notifications = [
  {
    avatar: '/img/avatar.png',
    name: 'Madelen Sam',
    time: '1 min ago',
    message:
      'By accessing the Sites and using our Services, you covenant that you have carefully read, clearly understood and agreed to stick to the provisions of the Agreements and any update and modification thereto. In case the User refuses the Agreements or objects to any part of the Agreements, the User is prohibited from using the Services.',
  },
  {
    avatar: '/img/avatar.png',
    name: 'Madelen Sam',
    time: '1 min ago',
    message:
      'By accessing the Sites and using our Services, you covenant that you have carefully read, clearly understood and agreed to stick to the provisions of the Agreements and any update and modification thereto. In case the User refuses the Agreements or objects to any part of the Agreements, the User is prohibited from using the Services.',
  },
  {
    avatar: '/img/avatar.png',
    name: 'Madelen Sam',
    time: '1 min ago',
    message:
      'By accessing the Sites and using our Services, you covenant that you have carefully read, clearly understood and agreed to stick to the provisions of the Agreements and any update and modification thereto. In case the User refuses the Agreements or objects to any part of the Agreements, the User is prohibited from using the Services.',
  },
  {
    avatar: '/img/avatar.png',
    name: 'Madelen Sam',
    time: '1 min ago',
    message:
      'By accessing the Sites and using our Services, you covenant that you have carefully read, clearly understood and agreed to stick to the provisions of the Agreements and any update and modification thereto. In case the User refuses the Agreements or objects to any part of the Agreements, the User is prohibited from using the Services.',
  },
  {
    avatar: '/img/avatar.png',
    name: 'Madelen Sam',
    time: '1 min ago',
    message:
      'By accessing the Sites and using our Services, you covenant that you have carefully read, clearly understood and agreed to stick to the provisions of the Agreements and any update and modification thereto. In case the User refuses the Agreements or objects to any part of the Agreements, the User is prohibited from using the Services.',
  },
]
export const NotificationList = () => {
  return (
    <>
      {notifications.map((notification, index) => (
        <NotificationListItem key={index} notification={notification} />
      ))}
    </>
  )
}
