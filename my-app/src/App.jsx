import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import CreateRecipeForm from './pages/CreateRecipeForm'
import { useState, useEffect } from 'react'
import ViewRecipes from './pages/ViewRecipes';

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welkom bij je receptenwebsite!</h1>
      <p className="text-lg">Hier kun je al je favoriete recepten bewaren en bekijken.</p>
    </div>
  )
}

function App() {
  const [recipes, setRecipes] = useState([]) //Recipes storen in een state
 
  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);//Voeg het nieuwe recept toe aan de lijst
  };

  return (
    <Routes>
      {/* Routes met layout (Header + styling) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} /> {/* Hey Recipes, hier is een property die recipes heet, gebruiken */}
        <Route path="/create-recipe" element={<CreateRecipeForm onAddRecipe={handleAddRecipe} />} />
        <Route path="/recipes/:id" element={<ViewRecipes recipes={recipes} />} /> {/* Route van het recept id */}
      </Route>

      {/* Login zonder layout */}
      <Route path="/login" element={<Login />} />

      {/* Recipes zonder layout */}
    </Routes>
  )
}

export default App
