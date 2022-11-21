import NextImage from 'next/image'
import { useEffect, useRef, MutableRefObject } from 'react'
import nextImage from 'next/image'
import { imageLoad } from '@/utils/loadImage'
import { createRoot, createPortal } from 'react-dom/client'

const Image = () => {
  const imageRootNode = useRef(null)

  useEffect(() => {
    initImage(imageRootNode)
  }, [])

  return (
    <div ref={imageRootNode}>
      <nextImage />
    </div>
  )
}

export default Image

async function initImage(
  imageRootNode: MutableRefObject<null | HTMLDivElement>
) {
  const url = ''
  const image = await imageLoad(url)

  if (!image) {
    return
  }

  const { width, height } = image

  const root = imageRootNode.current as Element
  const reactRoot = createRoot(root)
  console.log(reactRoot)
  // console.log(
  //   NextImage({
  //     src: url,
  //     width,
  //     height,
  //   })
  // )
  // @ts-ignore 222
  // root.render(
  //   NextImage({
  //     src: url,
  //     width,
  //     height,
  //   })
  // )

  console.log('testImage')
  console.log(image.width)
  console.log(image)
}
