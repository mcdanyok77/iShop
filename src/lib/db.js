import { Pool } from 'pg'

const db = new Pool({
  database: 'iShopDB',
  host: 'localhost',
  password: 'djDANYOK228',
  port: 5432,
  user: 'mcdanyok'
})

export default {
  query: (text, params) => db.query(text, params)
}
