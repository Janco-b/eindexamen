import '../App.css'

function CreateRecipeForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Create Recipe</h2>
    <form className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="naamRecept" className="text-sm font-medium text-gray-700">Naam recept</label>
        <input 
          id="naamRecept" 
          type="text" 
          name="naamRecept" 
          placeholder="Enter the recipe name"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="categorie" className="text-sm font-medium text-gray-700">Categorie</label>
        <select 
          id="categorie" 
          name="categorie" 
          className="mt-1 p-2 border border-gray-300 rounded-md"
        >
          <option value="Vlees">Vlees</option>
          <option value="Hamburgers">Hamburgers</option>
          <option value="Salades">Salades</option>
          <option value="Pizza">Pizza</option>
          <option value="Soep">Soep</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="ingrediënten" className="text-sm font-medium text-gray-700">Ingrediënten</label>
        <textarea
          id="ingrediënten"
          name="ingrediënten"
          rows="4"
          placeholder="List the ingredients"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="stappenplan" className="text-sm font-medium text-gray-700">Stappenplan voorbereiding</label>
        <textarea
          id="stappenplan"
          name="stappenplan"
          rows="4"
          placeholder="Describe the preparation steps"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="afbeelding" className="text-sm font-medium text-gray-700">Afbeelding</label>
        <input
          id="afbeelding"
          type="file"
          name="afbeelding"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="auteur" className="text-sm font-medium text-gray-700">Naam van Auteur</label>
        <input
          id="auteur"
          type="text"
          name="auteur"
          placeholder="Enter your name"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500"
      >
        Create Recipe
      </button>
    </form>
  </div>
</div>
  )
}

export default CreateRecipeForm