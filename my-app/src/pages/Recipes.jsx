import { Link } from 'react-router-dom';
import '../App.css'

function Recipes({ recipes }) { {/* "Geef mij die Recipe prompt" */}
    return (
        <div className="space-y-8">

      {/* Create Recipe Button */}
      <div className="text-center">
        <Link to="/create-recipe">
          <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Create Recipe
          </button>
        </Link>
      </div>
 
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Alle Recepten</h1>
          <p className="text-gray-600 mt-2">Voor de beste recepten in Uzbekistan</p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Recipe List */}
      <div className="flex flex-col gap-6">
        {recipes.length === 0 ? (
          <p>Recepten laden...</p> // Dit wordt weergegeven als de recepten nog niet geladen zijn
        ) : (
          recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-48 h-32 bg-gray-200 rounded-lg overflow-hidden">
                {/* Toon de afbeelding als base64 string */}
                <img src={recipe.afbeelding} alt={recipe.naamRecept} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{recipe.naamRecept}</h2>
                <p className="text-gray-600 mt-1">{recipe.categorie}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    )
  }
  
  export default Recipes