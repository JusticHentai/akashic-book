import { pagesConfig } from '@/config'
import Head from 'next/head'

const MyHead = () => {
  const { keywords, description, title } = pagesConfig

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default MyHead
