import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function CreateRecipeForm({ onAddRecipe }) {
  const navigate = useNavigate() //Voor het terug navigeren na submit

  // Alle form data wordt hierin opgeslagen
  const [formData, setFormData] = useState({
    naamRecept: '', //eigenschap waar naamRecept in komt etc.
    categorie: '',
    ingrediënten: '',
    stappenplan: '',
    afbeelding: '', //base64 gebruiken om afbeelding naar een string op te slaan
    auteur: ''
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target; //Verkrijg de naam en de waarde van het formulier
    setFormData((prevFormData) => ({ //Werk de state bij
      ...prevFormData, //Behoud bestaande data
      [name]: value, //Update het juiste veld in formData
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; //Ontvang het bestand dat is geselecteerd
    const reader = new FileReader(); //Zet om naar base64 string, Class die gebruikt wordt om het te lezen
  
    //Daarna wordt deze functie aangeroepen
    reader.onloadend = () => { //callback
      const base64String = reader.result; //Dit is nu de base64 string
  
      //Update de state met de base64 string
      setFormData({
        ...formData,
        afbeelding: base64String, //Sla de base64 string op in de formData state
      });
    };
  
    //Laat de reader het bestand lezen en converteer het naar een base64 string
    //methode van FileReader
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Voorkom dat de pagina opnieuw laadt bij submit
  
    //Stuur data naar console
    console.log('Form submitted:', formData);

    //Geef het recept door richting Recipes.jsx
    onAddRecipe(formData);

    navigate('/recipes'); //Stuur terug naar Recipes.jsx
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Create Recipe</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="naamRecept" className="text-sm font-medium text-gray-700">Naam recept</label>
        <input 
          id="naamRecept"
          type="text"
          name="naamRecept"
          value={formData.naamRecept} //Bind de waarde van dit veld aan formData
          onChange={handleChange} //Bij elke wijziging wordt handleChange aangeroepen
          placeholder="Enter the recipe name"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="categorie" className="text-sm font-medium text-gray-700">Categorie</label>
        <select 
          id="categorie" 
          name="categorie" 
          value={formData.categorie} //Bind de waarde van dit veld aan formData
          onChange={handleChange} //Bij elke wijziging wordt handleChange aangeroepen
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
          value={formData.ingrediënten} //Bind de waarde van dit veld aan formData
          onChange={handleChange} //Bij elke wijziging wordt handleChange aangeroepen
          placeholder="Ingredienten"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="stappenplan" className="text-sm font-medium text-gray-700">Stappenplan voorbereiding</label>
        <textarea
          id="stappenplan"
          name="stappenplan"
          rows="4"
          value={formData.stappenplan} //Bind de waarde van dit veld aan formData
          onChange={handleChange} //Bij elke wijziging wordt handleChange aangeroepen
          placeholder="Stappen Plan"
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="afbeelding" className="text-sm font-medium text-gray-700">Afbeelding</label>
        <input
          id="afbeelding"
          type="file"
          name="afbeelding"
          onChange={handleFileChange} //functie om het bestand te verwerken naar bas64
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="auteur" className="text-sm font-medium text-gray-700">Naam van Auteur</label>
        <input
          id="auteur"
          type="text"
          name="auteur"
          value={formData.auteur} //Bind de waarde van dit veld aan formData
          onChange={handleChange} //Bij elke wijziging wordt handleChange aangeroepen
          placeholder="Auteur naam"
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