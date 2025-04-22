import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-24 px-6 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-4">Welkom bij het Receptenboek</h1>
          <p className="text-lg sm:text-xl mb-6">Vind de lekkerste recepten voor elke gelegenheid!</p>
          <Link
            to="/recepten"
            className="inline-block bg-indigo-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-indigo-400 transition duration-300"
          >
            Bekijk onze recepten
          </Link>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Populaire Recepten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Recept 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recept 1</h3>
              <p className="text-gray-600">Een lekker en eenvoudig recept voor elke gelegenheid.</p>
              <Link to="/recepten/1" className="text-indigo-500 hover:text-indigo-600 mt-4 block">
                Bekijk dit recept
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Recept 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recept 2</h3>
              <p className="text-gray-600">Een smakelijk gerecht voor het hele gezin.</p>
              <Link to="/recepten/2" className="text-indigo-500 hover:text-indigo-600 mt-4 block">
                Bekijk dit recept
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Recept 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recept 3</h3>
              <p className="text-gray-600">Heerlijke gerechten die je makkelijk kunt maken.</p>
              <Link to="/recepten/3" className="text-indigo-500 hover:text-indigo-600 mt-4 block">
                Bekijk dit recept
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-indigo-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Receptenboek. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home