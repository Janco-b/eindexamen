import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  // Controleer of er een token in localStorage is en update de state
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)  // Als er een token is, is de gebruiker ingelogd
  }, [])  // Dit zorgt ervoor dat de controle alleen bij de eerste render wordt uitgevoerd

  const handleLogout = () => {
    localStorage.removeItem('token');  // Verwijder het token uit localStorage
    setIsLoggedIn(false);
    window.location.reload();  // Forceer een volledige herlading van de pagina
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">🍴 Receptenboek</Link>
 
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>

            <li><Link to="/recipes" className="hover:text-indigo-500">Recepten</Link></li>
            {!isLoggedIn && (
              <li><Link to="/login" className="hover:text-indigo-500">Inloggen</Link></li>
            )}
            {isLoggedIn && (
              <li><Link to="/account" className="hover:text-indigo-500">Account</Link></li>
            )}
            {isLoggedIn && (
              <li><button onClick={handleLogout} className="hover:text-indigo-500">Uitloggen</button></li>
            )}
            {!isLoggedIn && (
              <li><Link to="/register" className="hover:text-indigo-500">Registreren</Link></li>
            )}

          </ul>

          <div className="md:hidden text-2xl cursor-pointer">☰</div>
        </div>
      </nav>
    </header>
  )
}

export default Header
