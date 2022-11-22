import Init from '@/app/init'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Init />
        {children}
      </body>
    </html>
  )
}
