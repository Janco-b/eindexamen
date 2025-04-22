import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

async function createUser() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  })

  const username = 'testgebruiker'
  const password = 'wachtwoord123'
  const email = 'test@example.com'

  const hashedPassword = await bcrypt.hash(password, 10)

  await connection.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword]
  )

  console.log('Gebruiker aangemaakt!')
  await connection.end()
}

createUser().catch(console.error)
