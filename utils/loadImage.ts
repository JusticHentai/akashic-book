/**
 * 加载图片 含跨域 对应canvas
 * @param url 图片url
 * @returns {Promise<unknown>} 成功img 失败null
 */
export function imageLoad(url: string): Promise<HTMLImageElement | void> {
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
      resolve() //保证ok
    }
  })
}
