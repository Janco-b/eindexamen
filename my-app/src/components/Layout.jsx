import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="p-6">
        <Outlet /> {/* Dit is waar de content van de routes komt */}
      </main>
    </div>
  )
}

export default Layout
