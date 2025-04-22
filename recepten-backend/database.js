// recepten-backend/database.js
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config() // belangrijk voor de .env

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

export async function getUserByUsernameOrEmail(username, email) {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE username = ? OR email = ?',
    [username, email]
  )
  return rows[0]
}

export async function getUserByUsername(username) {
  const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username])
  return rows[0]
}

export async function getUserByEmail(email) {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email])
  return rows[0]
}

export async function createUser({ username, email, password }) {
  const [result] = await pool.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  )
  return { id: result.insertId, username, email }
}
