import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CategoriesSection from '../../components/CategoriesSection.jsx'
import Filters from '../../components/Filters.jsx'
import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'
import Pagination from '../../components/Pagination.jsx'
import ProductList from '../../components/ProductList.jsx'
import styles from '../../styles/ProductItem.module.css'

export default function Products() {
  const router = useRouter()
  const { category } = router.query
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  // eslint-disable-next-line no-unused-vars
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
  }, [category])

  const handleFilter = useCallback((filters) => {
    setFilteredProducts(products.filter(
      (product) => product.price >= filters.minPrice && product.price <= filters.maxPrice
    ))
  }, [products])

  const handleSort = (option) => {
    setSortOption(option)
    setFilteredProducts((prev) => [...prev].sort((a, b) => a[option] - b[option]))
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <>
      <Header />
      <CategoriesSection />
      <section className={styles['catalog-container']}>
        <h1>{category} catalog</h1>
        <div className={styles.filters}>
          <Filters onFilterChange={handleFilter} />
        </div>
        <select className={styles['filter-select']} onChange={(e) => handleSort(e.target.value)}>
          <option value="rating">By rating</option>
          <option value="price">By price</option>
        </select>
        <ProductList
          products={currentProducts}
        />
        <Pagination
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          totalProducts={filteredProducts.length}
        />
      </section>
      <Footer />
    </>
  )
}
