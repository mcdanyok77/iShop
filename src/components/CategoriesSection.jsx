import Link from 'next/link'
import styles from '../styles/Categories.module.css'

const CategoriesSection = () => {
  const categories = [
    { name: 'iPhone', path: '/products/iphones' },
    { name: 'iPad', path: '/products/ipads' },
    { name: 'Watch', path: '/products/watches' },
    { name: 'Mac', path: '/products/macbooks' },
    { name: 'AirPods', path: '/products/headphones' },
    { name: 'Vision', path: '/products/visions' }
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Browse By Category</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link key={category.name} href={category.path} className={styles['category-card']}>
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoriesSection
