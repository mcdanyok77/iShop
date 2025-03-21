import { useState } from 'react'
import styles from '../styles/Filters.module.css'

export default function Filters({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(5000)

  return (
    <div className={styles['filters-container']}>
      <h3 className={styles['filter-title']}>Filters</h3>
      <div className={styles['filter-group']}>
        <label htmlFor="minPrice">min. price: </label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </div>
      <div className={styles['filter-group']}>
        <label htmlFor="maxPrice">max. price: </label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
      <button
        type="button"
        className={styles['filter-reset']}
        onClick={() => onFilterChange({ maxPrice, minPrice })}
      >
        Apply
      </button>
      <button
        type="button"
        className={styles['filter-reset']}
        onClick={() => {
          setMinPrice(0)
          setMaxPrice(5000)
          onFilterChange({ maxPrice: 5000, minPrice: 0 })
        }}
      >
        Reset
      </button>
    </div>
  )
}
