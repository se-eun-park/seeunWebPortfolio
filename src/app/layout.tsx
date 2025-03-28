import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '박세은 | 프론트엔드 포트폴리오',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  )
}
