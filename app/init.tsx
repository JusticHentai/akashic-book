'use client'

import init from '@/utils/init'
import { useEffect } from 'react'

const Init = () => {
  useEffect(() => {
    init()
  }, [])

  return <></>
}

export default Init
