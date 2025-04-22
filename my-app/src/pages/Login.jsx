function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Inloggen</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Wachtwoord</label>
              <input type="password" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500">
              Inloggen
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Login
  