import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
        className={`${gilroyFont.variable} font-gilroy gp-4 flex min-h-screen justify-between bg-black py-8 antialiased md:gap-12`}
      >
        {children}
      </body>
    </html>
  )
}
