// my-app/src/pages/Register.jsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')  // Nieuw state voor email
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')  // Wachtwoordbevestiging
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Wachtwoorden komen niet overeen!')
      setLoading(false)
      return
    }

    try {
      // Verstuur de registratiedata naar de server
      const response = await axios.post('http://localhost:3000/register', {
        username,
        email,  // Verstuur email ook
        password,
      })

      alert('Je account is succesvol aangemaakt!')
      navigate('/login')  // Navigeer naar de inlogpagina
    } catch (err) {
      setError('Er is iets misgegaan, probeer het opnieuw.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Registreren</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Gebruikersnaam</label>
            <input
              type="text"
              id="username"
              placeholder="Vul je gebruikersnaam in"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Vul je e-mailadres in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Wachtwoord</label>
            <input
              type="password"
              id="password"
              placeholder="Vul je wachtwoord in"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Bevestig wachtwoord</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Bevestig je wachtwoord"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            {loading ? 'Bezig...' : 'Registreren'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
