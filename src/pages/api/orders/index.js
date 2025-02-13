import db from '../../../lib/db.js'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { productId, productType, quantity, username } = req.body
    const orderDate = new Date()

    try {
      const result = await db.query(
        'INSERT INTO Orders (username, producttype, productid, quantity, orderdate, status) VALUES ($1, $2, $3, $4, $5, \'В корзине\') RETURNING *',
        [username, productType, productId, quantity, orderDate]
      )
      res.status(201).json(result.rows[0])
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Server Error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
