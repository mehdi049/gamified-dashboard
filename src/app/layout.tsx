import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/left-navbar'
import { RightSidebar } from '@/components/right-sidebar'
import { SearchForm } from '../components/search-form'

const gilroyFont = localFont({
  display: 'swap',
  variable: '--font-gilroy',
  src: [
    {
      path: './fonts/gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/gilroy/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Gamified Dashboard',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyFont.variable} font-gilroy bg-cover bg-center bg-no-repeat antialiased`}
        style={{
          backgroundImage: 'url(/img/bg.png)',
        }}
      >
        <main className="relative z-10 flex min-h-screen w-full justify-between gap-0 px-4 py-8 2xl:gap-8">
          <Navbar />
          <div className="w-full max-w-7xl grow space-y-8 overflow-auto">
            <SearchForm />
            {children}
          </div>

          <RightSidebar />
        </main>
      </body>
    </html>
  )
}
