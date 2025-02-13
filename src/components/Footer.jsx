import styles from '../styles/Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.columns}>
      <div className={styles.column}>
        <h3>Services</h3>
        <ul>
          <li>Boxus program</li>
          <li>Gift cards</li>
          <li>Credit and payment</li>
          <li>Service contracts</li>
          <li>Non-cash account</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Assistance</h3>
        <ul>
          <li>Track an order</li>
          <li>Delivery info</li>
          <li>Returns</li>
          <li>Guarantee</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>About</h3>
        <p>
          We are a residential interior design firm located in Portland.
          Our boutique-studio office more than...
        </p>
      </div>
    </div>
    <div className={styles.copy}>
      © 2024 iShop. All rights reserved.
    </div>
  </footer>
)

export default Footer
