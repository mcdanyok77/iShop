import CategoriesSection from '../components/CategoriesSection.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import IphoneBanner from '../components/IphoneBanner.jsx'
import { CartProvider } from '../context/CartContext.js'

export default function Home({ products }) {
  return (
    <CartProvider>
      <Header />
      <IphoneBanner />
      <CategoriesSection />
      <FeaturedProducts products={products} />
      <Footer />
    </CartProvider>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/products/iphones')
    const products = await res.json()

    return { props: { products } }
  } catch (error) {
    return { props: { products: [] } }
  }
}
