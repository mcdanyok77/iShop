import styles from '../styles/IphoneBanner.module.css'

const IphoneBanner = () => (
  <section className={styles['iphone-banner']}>
    <div className={styles['banner-content']}>
      <h1 className={styles['banner-title']}>Phone 16 Pro</h1>
      <p className={styles['banner-subtitle']}>Created to change everything for the better. For everyone</p>
      <button type="button" className={styles['shop-button']}>Shop Now</button>
    </div>
  </section>
)

export default IphoneBanner
