import type { AppProps } from 'next/app'
import React from 'react'
import init from '@/utils/init'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    init()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
