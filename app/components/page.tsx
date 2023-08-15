'use client'

import { useState } from 'react'

const Components = () => {
  const [num, setNumber] = useState(0)

  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1)
        console.log(num)
      })
    }
  }

  return <div onClick={handleClick}>Components</div>
}

export default Components
