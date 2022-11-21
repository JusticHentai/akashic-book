import { useEffect } from 'react'

const Common = (props: { loading: boolean }) => {
  useEffect(() => {
    console.log(props.loading)
  }, [props.loading])

  return <div>common</div>
}

export default Common
