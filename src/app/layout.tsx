import type { Metadata } from 'next'
import { Providers } from './components/providers'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'alex tana',
  description:
    "a collection of thoughts and projects I've worked on over the years",
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className='antialiased'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
