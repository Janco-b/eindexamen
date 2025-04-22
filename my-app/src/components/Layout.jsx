import Header from "./Header"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

