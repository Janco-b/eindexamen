// routes/login.js
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../database.js'

const router = express.Router()

router.post('/', async (req, res) => {
  console.log('Login poging ontvangen') // ⬅️ debug
  console.log('Request body:', req.body) // ⬅️ debug
  const { username, password } = req.body

  try {
    // Check of JWT_SECRET is gezet
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is niet gezet in .env!')
      return res.status(500).json({ error: 'Server configuratiefout' })
    }

    // Haal gebruiker op uit de database
    const user = await getUserByUsername(username)
    if (!user) {
      return res.status(401).json({ error: 'Ongeldige gebruikersnaam of wachtwoord' })
    }

    // Vergelijk wachtwoorden
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Ongeldige gebruikersnaam of wachtwoord' })
    }

    // Genereer JWT-token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(200).json({ message: 'Ingelogd!', token })
  } catch (err) {
    console.error('Fout bij inloggen:', err)
    res.status(500).json({ error: 'Er is iets misgegaan bij het inloggen' })
  }
})

// 👉 Zorg dat dit klopt voor jouw server.js import:
export { router as loginRoute }
