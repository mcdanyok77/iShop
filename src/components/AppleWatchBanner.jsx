import styles from '../styles/AppleWatchBanner.module.css'

const AppleWatchBanner = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h2>Apple Watch</h2>
      <h3>Series 10</h3>
      <p>The ultimate device for a healthy life.</p>
      <button type="button" className={styles.shopButton}>Shop Now</button>
    </div>
  </section>
)

export default AppleWatchBanner
