import dynamic from 'next/dynamic'
import { useCart } from '../context/CartContext.js'

// Динамически загружаем компонент Cart, отключая SSR
const CartContent = dynamic(() => import('../components/Cart.jsx'), { ssr: false })

export default function Cart() {
  return (
    <div>
      <h1>Корзина</h1>
      <CartContent />
    </div>
  )
}
