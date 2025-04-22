import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config() // heel belangrijk

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

export async function getUserByUsername(username) {
  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username])
    return rows[0]
  } catch (err) {
    console.error(err)
    throw new Error('Database fout')
  }
}
