import { Navbar } from '@/components/navbar'
import { RightSidebar } from '@/components/right-sidebar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-content grow px-8"></div>
      <RightSidebar />
    </>
  )
}
