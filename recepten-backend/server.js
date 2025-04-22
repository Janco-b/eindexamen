import dotenv from 'dotenv'
dotenv.config() // Zorgt dat .env geladen is

import express from 'express'
import cors from 'cors'
import { loginRoute } from './routes/login.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// Controleer of de env geladen is
console.log('DB_USER:', process.env.DB_USER)
console.log('JWT_SECRET:', process.env.JWT_SECRET)

app.use('/login', loginRoute)

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`)
})
