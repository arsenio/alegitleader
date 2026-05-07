import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SanityLive } from '@/sanity/lib/live'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'A Legit Leader',
  description: 'Executive and startup coaching, technical mentorship, culture development, and leadership training.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SanityLive />
        {children}
      </body>
      <GoogleAnalytics gaId="G-QSSXH484TX" />
    </html>
  )
}
