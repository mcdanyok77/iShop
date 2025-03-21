import Link from 'next/link'
import { useCart } from '@/context/CartContext.js'
import styles from '@/styles/Cart.module.css'

export default function CartContent() {
  const {
    cart, clearCart, orderConfirmed, removeFromCart, updateQuantity
  } = useCart()

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)

  const handleCheckout = () => {
    clearCart()
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert('Order Placed Successfully!')
    }, 100)
  }

  return (
    <div className={styles['cart-container']}>
      {cart.length === 0 ? (
        <p>Сart is empty. <Link href="/">Go to store</Link></p>
      ) : (
        <div>
          <h1 className={styles['cart-header']}>Your Cart</h1>
          {cart.map((item) => (
            <div key={item.model} className={styles['cart-item']}>
              <img src={item.photo} alt={item.model} className={styles['cart-item-img']} />
              <div className={styles['cart-item-details']}>
                <h2 className={styles['cart-item-title']}>{item.model}</h2>
                <p className={styles['cart-item-price']}>Price: {item.price} p.</p>
                <p>Count:</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.model, Number(e.target.value))}
                />
              </div>
              <button
                type="button"
                className={styles['cart-item-remove']}
                onClick={() => removeFromCart(item.model)}
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className={styles['cart-total']}>Total amount: {total} p.</h3>
          <button type="button" className={styles['cart-checkout']} onClick={handleCheckout}>Place Order</button>
        </div>
      )}
      {orderConfirmed && (
        <div className={styles['order-confirmation']}>
          <p>Order Placed Successfully!</p>
        </div>
      )}
    </div>
  )
}
