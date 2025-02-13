import { useState } from 'react'
import styles from '../styles/Filters.module.css'

export default function Filters({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(5000)

  return (
    <div className={styles.filters}>
      <h3>Фильтры</h3>
      <label>
        Мин. цена:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Макс. цена:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </label>
      <button type="button" onClick={() => onFilterChange({ maxPrice, minPrice })}>Применить</button>
    </div>
  )
}
