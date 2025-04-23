import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Registreer';
import Login from './pages/Login';
import Account from './pages/Account';
import Recipes from './pages/Recipes';
import CreateRecipeForm from './pages/CreateRecipeForm';
import { useState } from 'react';
import ViewRecipes from './pages/ViewRecipes';

function App() {
  const [recipes, setRecipes] = useState([]); // Recipes storen in een state

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]); // Voeg het nieuwe recept toe aan de lijst
  };

  const handleDeleteRecipe = (id) => {
    // Verwijder het recept met de gegeven id
    setRecipes((prevRecipes) => prevRecipes.filter((recipe, index) => index !== parseInt(id)));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home recipes={recipes} />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        <Route path="/create-recipe" element={<CreateRecipeForm onAddRecipe={handleAddRecipe} />} />
        <Route path="/recipes/:id" element={<ViewRecipes recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
