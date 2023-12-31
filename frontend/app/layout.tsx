import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/app/components/Providers'
import Appbar from '@/app/components/Appbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
