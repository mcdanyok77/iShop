import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Filters from '../../components/Filters.jsx'
import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'
import Pagination from '../../components/Pagination.jsx'
import ProductList from '../../components/ProductList.jsx'
import { CartProvider } from '../../context/CartContext.js'
import { FavoritesProvider } from '../../context/FavoritesContext.js'
import styles from '../../styles/ProductItem.module.css'

export default function Products() {
  const router = useRouter()
  const { category } = router.query
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [favorites, setFavorites] = useState(new Set())
  const [sortOption, setSortOption] = useState('rating')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  useEffect(() => {
    if (!category) {
      return
    }

    fetch(`/api/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch((error) => console.error('Ошибка загрузки товаров:', error))
  }, [category])

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

  const handleFilter = (filters) => {
    let updatedProducts = [...products]
    if (filters.price) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= filters.price.min && product.price <= filters.price.max
      )
    }
    setFilteredProducts(updatedProducts)
  }

  const handleSort = (option) => {
    setSortOption(option)
    setFilteredProducts((prev) => [...prev].sort((a, b) => a[option] - b[option]))
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <CartProvider>
      <FavoritesProvider>
        <Header />
        <section className={styles['catalog-container']}>
          <h1>Каталог {category}</h1>
          <div className={styles.filters}>
            <Filters onFilterChange={handleFilter} />
          </div>
          <select className={styles['filter-select']} onChange={(e) => handleSort(e.target.value)}>
            <option value="rating">By rating</option>
            <option value="price">By price</option>
          </select>
          <ProductList
            favorites={favorites}
            products={currentProducts}
            toggleFavorite={toggleFavorite}
          />
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            totalProducts={filteredProducts.length}
          />
        </section>
        <Footer />
      </FavoritesProvider>
    </CartProvider>
  )
}
