import mysql from 'mysql2/promise'

// Maak verbinding met de MySQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Je MySQL-gebruiker
  password: 'password', // Je MySQL-wachtwoord
  database: 'recepten'  // Je database naam
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