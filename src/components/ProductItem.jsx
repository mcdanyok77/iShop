import { useCart } from '../context/CartContext.js'
import styles from '../styles/ProductItem.module.css'

const ProductItem = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className={styles['catalog-container']}>
      <div className={styles['product-card']}>
        <img
          src={product.photo}
          alt={product.model}
          className={styles['product-image']}
        />
      </div>
      <div className={styles['product-details']}>
        <h3 className={styles['product-title']}>{product.model}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles['product-price']}>{product.price} р.</div>
        <button type="button" className={styles.productButton} onClick={handleAddToCart}>
          Купить
        </button>
      </div>
    </div>
  )
}

export default ProductItem
