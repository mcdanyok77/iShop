import Head from 'next/head'
import { CartProvider } from '@/context/CartContext.js'
import '@/styles/globals.css'

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
