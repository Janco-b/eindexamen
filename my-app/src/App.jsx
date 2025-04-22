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
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App

