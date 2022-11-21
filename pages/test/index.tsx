import Common from './lib/common'
import styles from './styles/index.module.scss'

const Test = () => {
  return (
    <div className={styles.nihao}>
      <div>test</div>
      <Common loading />
    </div>
  )
}

export default Test
