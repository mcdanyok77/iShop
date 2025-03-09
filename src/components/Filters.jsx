import { useState } from 'react'
import styles from '../styles/Filters.module.css'

export default function Filters({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(5000)

  return (
    <div className={styles['filters-container']}>
      <h3>Фильтры</h3>
      <label htmlFor="minPrice">Мин. цена: </label>
      <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
      <label htmlFor="maxPrice">Макс. цена: </label>
      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
      <button type="button" onClick={() => onFilterChange({ maxPrice, minPrice })}>Применить</button>
    </div>
  )
}
