import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../database.js'  // Zorg ervoor dat deze functie goed werkt

const router = express.Router()

router.post('/', async (req, res) => {
  const { username, password } = req.body

  try {
    // Verkrijg de gebruiker uit de database
    const user = await getUserByUsername(username)
    if (!user) {
      return res.status(401).json({ error: 'Ongeldige gebruikersnaam of wachtwoord' })
    }

    // Vergelijk het wachtwoord met de hash
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Ongeldige gebruikersnaam of wachtwoord' })
    }

    // Genereer een JWT-token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

    // Stuur het token als response
    res.status(200).json({ message: 'Ingelogd!', token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Er is iets misgegaan' })
  }
})

export { router as loginRoute }