import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/login', {
        username: form.username,
        password: form.password,
      })
      alert('Ingelogd! Token: ' + res.data.token)
    } catch (err) {
      alert('Fout bij inloggen: ' + err.response.data.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Inloggen</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Gebruikersnaam</label>
            <input name="username" value={form.username} onChange={handleChange} type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Wachtwoord</label>
            <input name="password" value={form.password} onChange={handleChange} type="password" className="w-full border border-gray-300 p-2 rounded" />
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
