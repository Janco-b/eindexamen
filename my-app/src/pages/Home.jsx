import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Controleer of de gebruiker een geldig token heeft
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login') // Als geen token, stuur naar login
    } else {
      setLoggedIn(true)
    }
  }, [navigate])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {loggedIn ? (
          <>
            <h1 className="text-3xl font-bold text-center text-green-600">Welkom op de Homepagina!</h1>
            <p className="text-lg text-center text-gray-600 mt-4">Je bent succesvol ingelogd.</p>
          </>
        ) : (
          <p className="text-center text-gray-500">Inloggen vereist...</p>
        )}
      </div>
    </div>
  )
}

export default Home
