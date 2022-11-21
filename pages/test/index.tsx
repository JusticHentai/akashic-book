import styles from './styles/index.module.scss'

// import TestImage from './lib/nextImage'
import Common from './lib/common'

const Test = () => {
  return (
    <div className={styles.nihao}>
      <div>test</div>
      <Common loading />
    </div>
  )
}

export default Test
