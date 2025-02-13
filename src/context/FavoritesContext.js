import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(new Set())

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }

      return newFavorites
    })
  }

  return (
    <FavoritesContext value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
