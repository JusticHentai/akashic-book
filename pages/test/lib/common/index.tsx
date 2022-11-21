import { useEffect } from 'react'

const Common = (props: { loading: boolean }) => {
  useEffect(() => {
    console.log(props.loading)
    console.error('niemama')
  }, [])

  return <div>common</div>
}

export default Common
