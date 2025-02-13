import styles from '../styles/MacbookBanner.module.css'

const MacbookBanner = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h2>Macbook Air</h2>
      <p>The new 15-inch MacBook Air makes room for more...</p>
      <button type="button" className={styles.shopButton}>Shop Now</button>
    </div>
  </section>

)

export default MacbookBanner
