import type { Metadata } from 'next'
import { Analytics } from './analytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'CorsoCommand Dashboard',
  description: 'Live AI Actions, Affiliate Links, Campaign Status',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
