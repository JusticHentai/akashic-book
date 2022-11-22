import { pagesConfig } from '@/config'

const Head = () => {
  const { keywords, description, title } = pagesConfig

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

export default Head
