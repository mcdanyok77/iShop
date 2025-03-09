import CategoriesSection from '../components/CategoriesSection.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import IphoneBanner from '../components/IphoneBanner.jsx'

export default function Home({ products }) {
  return (
    <>
      <Header />
      <IphoneBanner />
      <CategoriesSection />
      <FeaturedProducts products={products} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/products/iphones')
    const products = await res.json()

    return { props: { products } }
  } catch (error) {
    return { error, props: { products: [] } }
  }
}
