import { useCart } from '../context/CartContext.js'

export default function CartContent() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  if (!cart) {
    console.log('useCart did not return the context properly')
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      {cart.length === 0 ? (
        <p>Корзина пуста. <Link href="/">Перейти в магазин</Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Цена: {item.price} ₽</p>
              <p>
                Количество:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
              </p>
              <button type="button" onClick={() => removeFromCart(item.id)}>Удалить</button>
            </div>
          ))}
          <h3>Общая сумма: {total} ₽</h3>
        </div>
      )}
    </div>
  )
}
