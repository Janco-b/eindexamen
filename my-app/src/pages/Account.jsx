import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const Account = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      setUser({
        username: decoded.username,
        email: decoded.email
      })
    }
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Mijn Account</h1>
      {user ? (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-700">Gebruikersnaam</h2>
            <p className="text-gray-900">{user.username}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-700">E-mailadres</h2>
            <p className="text-gray-900">{user.email}</p>
          </div>

          {user.username === 'Admin' && (
            <div>
              <h2 className="text-lg font-medium text-gray-700">Admin Acties</h2>
              <button
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => alert('Admin actie uitgevoerd!')}
              >
                Admin Knop
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500">Gebruikersgegevens worden geladen...</p>
      )}
    </div>
  )
}

export default Account