import { useParams } from 'react-router-dom';

function ViewRecipes({ recipes }) {
  const { id } = useParams(); //Recept property ophalen
  const recipe = recipes[id]; //Gewenste recept ophalen op basis van het id

  if (!recipe) {
    return <div className="p-8 text-center text-red-600">Recept niet gevonden</div>; //foutmelding
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.naamRecept}</h1> {/* Toon de naamRecept */}
        <img src={recipe.afbeelding} alt={recipe.naamRecept} className="w-full h-64 object-cover rounded mb-4" /> {/* Toon de afbeelding */}
        <p className="text-gray-700"><strong>Categorie:</strong> {recipe.categorie}</p> {/* Toon de categorie */}
        <p className="mt-4"><strong>Ingrediënten:</strong><br />{recipe.ingrediënten}</p> {/* Toon de ingrediënten */}
        <p className="mt-4"><strong>Stappenplan:</strong><br />{recipe.stappenplan}</p> {/* Toon de naamRecept */}
        <p className="mt-4 text-sm text-gray-500">Gemaakt door: {recipe.auteur}</p> {/* Toon de auteur */}
      </div>
    </div>
  );
}

export default ViewRecipes;