/**
 * 加载图片 含跨域 对应canvas
 * @param url 图片 url
 * @returns 成功返回 imageElement 失败返回 undefined
 */
export function imageLoad(url: string): Promise<HTMLImageElement | undefined> {
  return new Promise((resolve) => {
    const img = new Image()

    img.crossOrigin = 'anonymous'
    img.src = url
    img.complete && resolve(img)

    img.onload = () => {
      resolve(img)
    }

    img.onerror = (err) => {
      console.warn(`[imageLoad url: ${url} error: ${err}]`)
      resolve(undefined) //保证ok
    }
  })
}
