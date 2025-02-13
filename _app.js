import Head from 'next/head'
import '@/styles/globals.css'
import { CartProvider } from './src/context/CartContext.js'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
