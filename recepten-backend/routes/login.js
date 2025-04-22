// recepten-backend/routes/login.js
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByUsernameOrEmail } from '../database.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { username, email, password } = req.body

  try {
    // Zoek gebruiker op basis van gebruikersnaam of e-mail
    const user = await getUserByUsernameOrEmail(username, email)
    if (!user) {
      return res.status(401).json({ error: 'Ongeldige gebruikersnaam, e-mail of wachtwoord' })
    }

    // Vergelijk wachtwoorden
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Ongeldige gebruikersnaam, e-mail of wachtwoord' })
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

export { router as loginRoute }
