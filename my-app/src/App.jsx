import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Register from './pages/Registreer'
import Login from './pages/Login'
import Account from './pages/Account'
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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} /> {/* Hey Recipes, hier is een property die recipes heet, gebruiken */}
        <Route path="/create-recipe" element={<CreateRecipeForm onAddRecipe={handleAddRecipe} />} />
        <Route path="/recipes/:id" element={<ViewRecipes recipes={recipes} />} /> {/* Route van het recept id */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<Account />} />
      </Route>

    </Routes>


  )
}

export default App
