import styles from '../styles/FeaturedProducts.module.css'

const FeaturedProducts = ({ products }) => (
  <section className={styles.section}>
    <h2>Featured Products</h2>
    <div className={styles['products-grid']}>
      {products.map((product) => (
        <div key={product.iphoneid} className={styles['product-card']}>
          <img src={product.photo} alt={product.model} className={styles['product-image']} />
          <h3>{product.model}</h3>
          <p className={styles.price}>{product.price} p.</p>
          <button type="button" className={styles['buy-button']}>Buy Now</button>
        </div>
      ))}
    </div>
  </section>
)

export default FeaturedProducts
