import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username])

  if (rows.length === 0) return res.status(401).json({ error: 'Gebruiker bestaat niet' })

  const user = rows[0]
  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) return res.status(401).json({ error: 'Wachtwoord klopt niet' })

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
})

app.listen(3000, () => {
  console.log('Server draait op http://localhost:3000')
})
