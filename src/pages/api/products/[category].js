import db from '../../../lib/db.js'

export default async function handler(req, res) {
  const { category } = req.query

  if (!category) {
    return res.status(400).json({ error: 'Category is required' })
  }

  // Маппинг категории на таблицу БД
  const tableMapping = {
    headphones: 'Headphones',
    ipads: 'iPads',
    iphones: 'iPhones',
    macbooks: 'MacBooks',
    visions: 'VisionPro',
    watches: 'Watches'
  }

  const tableName = tableMapping[category.toLowerCase()]

  if (!tableName) {
    return res.status(404).json({ error: 'Category not found' })
  }

  try {
    const result = await db.query(`
      SELECT model, price, description, photo 
      FROM ${tableName} 
      ORDER BY price DESC 
      LIMIT 8
    `)
    res.status(200).json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Database error' })
  }
}
