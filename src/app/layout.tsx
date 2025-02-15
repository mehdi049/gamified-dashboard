import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { RightSidebar } from '@/components/right-sidebar'

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
        className={`${gilroyFont.variable} font-gilroy antialiased`}
        style={{
          background: 'linear-gradient(180deg, #2F2453 0%, #0D0429 100%)',
        }}
      >
        <main className="flex min-h-screen w-full justify-between gap-0 px-4 py-8 md:gap-12">
          <Navbar />
          {children}
          <RightSidebar />
        </main>
      </body>
    </html>
  )
}
