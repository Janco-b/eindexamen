import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welkom bij je receptenwebsite!</h1>
        {/* Hier komt je receptenlijst straks */}
      </main>
    </div>
  )
}

export default App
