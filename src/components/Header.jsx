import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles['top-bar']}>
      <Link href="/" className={styles.logo}>iShop</Link>
      <div className={styles.controls}>
        <nav className={styles['main-nav']}>
          <Link href="/">Home</Link>
          <Link href="/products/iphones">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/cart" className={styles['cart-link']}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" />
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" />
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.08191 15.264 8.515 15.5143C8.94808 15.7646 9.478 15.8275 9.96 15.68L19.92 12.84C20.4 12.699 20.86 12.41 21.15 11.98C21.44 11.55 21.53 11.05 21.41 10.57L18.88 2.54C18.7733 2.11735 18.507 1.74734 18.1336 1.5051C17.7602 1.26286 17.3077 1.1665 16.86 1.24H5.82" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
