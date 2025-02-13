import styles from '../styles/ProductList.module.css'
import ProductItem from './ProductItem.jsx'

const ProductList = ({ products }) => (
  <div className={styles['product-list']}>
    {products.map((product) => (
      <ProductItem key={product.iphoneid || product.id || product.model} product={product} />
    ))}
  </div>
)

export default ProductList
