import Head from 'next/head'
import { pagesConfig } from '../../config'

const MyHead = () => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <title>{pagesConfig.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default MyHead
