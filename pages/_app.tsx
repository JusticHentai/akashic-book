import init from '@/utils/init'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
