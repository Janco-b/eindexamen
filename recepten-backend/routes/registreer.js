// recepten-backend/routes/register.js
import express from 'express'
import bcrypt from 'bcryptjs'
import { getUserByUsername, getUserByEmail, createUser } from '../database.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { username, email, password } = req.body

  try {
    // Controleer of de gebruiker al bestaat
    const existingUser = await getUserByUsername(username)
    if (existingUser) {
      return res.status(400).json({ error: 'Gebruikersnaam is al in gebruik' })
    }

    const existingEmail = await getUserByEmail(email)
    if (existingEmail) {
      return res.status(400).json({ error: 'E-mail is al geregistreerd' })
    }

    // Wachtwoord hashen
    const hashedPassword = await bcrypt.hash(password, 10)

    // Nieuwe gebruiker aanmaken
    const newUser = await createUser({ username, email, password: hashedPassword })

    res.status(201).json({ message: 'Account aangemaakt!' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Er is iets misgegaan bij het registreren' })
  }
})

export { router as registerRoute }
