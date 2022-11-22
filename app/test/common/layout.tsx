import React from 'react'
import Init from './init'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Init />
      {children}
    </>
  )
}
