import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welkom bij je receptenwebsite!</h1>
      <p className="text-lg">Hier kun je al je favoriete recepten bewaren en bekijken.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Routes met layout (Header + styling) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* hier kun je later meer routes toevoegen, zoals recepten, contact, etc. */}
      </Route>

      {/* Login zonder layout */}
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
