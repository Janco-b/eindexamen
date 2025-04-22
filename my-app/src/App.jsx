import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import CreateRecipeForm from './pages/CreateRecipeForm'
import { useState, useEffect } from 'react'

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welkom bij je receptenwebsite!</h1>
      <p className="text-lg">Hier kun je al je favoriete recepten bewaren en bekijken.</p>
    </div>
  )
}

function App() {
  const [recipes, setRecipes] = useState([]) // Recipes storen in de array

  // Gegevens ophalen van het JSON-bestand wanneer de component wordt geladen
  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json()) // Zet het om naar JSON
      .then((data) => setRecipes(data)) // Sla de recepten op in de data
      .catch((error) => console.error('Fout bij het laden van recepten:', error)) // Foutmelding
  }, []) // Haalt de data op bij de eerste render

  return (
    <Routes>
      {/* Routes met layout (Header + styling) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create-recipe" element={<CreateRecipeForm />} />
        {/* hier kun je later meer routes toevoegen, zoals recepten, contact, etc. */}
      </Route>

      {/* Login zonder layout */}
      <Route path="/login" element={<Login />} />

      {/* Recipes zonder layout */}
    </Routes>
  )
}

export default App
