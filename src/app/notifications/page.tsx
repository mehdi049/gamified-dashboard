'use client'

import H2 from '@/components/ui/typography/h2'
import { NotificationNav } from './_components/notification-nav'
import { NotificationList } from './_components/notification-list'

export default function Page() {
  return (
    <>
      <H2 className="text-foreground">Notifications</H2>
      <NotificationNav />
      <NotificationList />
    </>
  )
}
