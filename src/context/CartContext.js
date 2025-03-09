import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const addToCart = (item) => {
    setOrderConfirmed(false)

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((i) => i.model === item.model)
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += 1

        return updatedCart
      }

      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (model) => {
    setCart((prevCart) => prevCart.filter((item) => item.model !== model))
  }

  const updateQuantity = (model, quantity) => {
    setCart((prevCart) => prevCart.map((item) => (
      item.model === model ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
    setOrderConfirmed(true)
  }

  const resetOrderConfirmation = () => {
    setOrderConfirmed(false)
  }

  return (
    // eslint-disable-next-line @stylistic/max-len
    // eslint-disable-next-line @eslint-react/no-context-provider, @eslint-react/no-unstable-context-value
    <CartContext.Provider value={{
      addToCart,
      cart,
      clearCart,
      orderConfirmed,
      removeFromCart,
      resetOrderConfirmation,
      updateQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
