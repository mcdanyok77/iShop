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
      alert('Заказ оформлен успешно!')
    }, 100)
  }

  return (
    <div className={styles['cart-container']}>
      {cart.length === 0 ? (
        <p>Корзина пуста. <Link href="/">Перейти в магазин</Link></p>
      ) : (
        <div>
          <h1 className={styles['cart-header']}>Ваша корзина</h1>
          {cart.map((item) => (
            <div key={item.model} className={styles['cart-item']}>
              <img src={item.photo} alt={item.model} className={styles['cart-item-img']} />
              <div className={styles['cart-item-details']}>
                <h2 className={styles['cart-item-title']}>{item.model}</h2>
                <p className={styles['cart-item-price']}>Цена: {item.price} p.</p>
                <p>Количество:</p>
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
                Удалить
              </button>
            </div>
          ))}
          <h3 className={styles['cart-total']}>Общая сумма: {total} p.</h3>
          <button type="button" className={styles['cart-checkout']} onClick={handleCheckout}>Оформить заказ</button>
        </div>
      )}
      {orderConfirmed && (
        <div className={styles['order-confirmation']}>
          <p>Заказ оформлен успешно!</p>
        </div>
      )}
    </div>
  )
}
