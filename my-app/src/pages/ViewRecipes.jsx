import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function ViewRecipes({ recipes, onDeleteRecipe }) {
  const { id } = useParams(); // Recept ID ophalen
  const recipe = recipes[id]; // Gewenst recept ophalen op basis van ID
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); // State om te controleren of de gebruiker admin is

  useEffect(() => {
    const token = localStorage.getItem('token'); // Haal het token op uit localStorage
    if (token) {
      const decoded = jwtDecode(token); // Decodeer het token
      if (decoded.username === 'Admin') { // Controleer of de gebruikersnaam 'Admin' is
        setIsAdmin(true);
      }
    }
  }, []);

  const handleDelete = () => {
    if (onDeleteRecipe) {
      onDeleteRecipe(id); // Aanroep van de onDeleteRecipe functie om het recept te verwijderen
      navigate('/recipes'); // Navigeren naar de receptenlijst
    }
  };

  if (!recipe) {
    return <div className="p-8 text-center text-red-600">Recept niet gevonden</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.naamRecept}</h1>
        <img src={recipe.afbeelding} alt={recipe.naamRecept} className="w-full h-64 object-cover rounded mb-4" />
        <p className="text-gray-700"><strong>Categorie:</strong> {recipe.categorie}</p>
        <p className="mt-4"><strong>Ingrediënten:</strong><br />{recipe.ingrediënten}</p>
        <p className="mt-4"><strong>Stappenplan:</strong><br />{recipe.stappenplan}</p>
        <p className="mt-4 text-sm text-gray-500">Gemaakt door: {recipe.auteur}</p>

        {/* Admin knop die alleen zichtbaar is voor de admin */}
        {isAdmin && (
          <div className="mt-6">
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Verwijder Recept
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewRecipes;
