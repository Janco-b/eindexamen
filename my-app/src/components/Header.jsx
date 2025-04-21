// src/components/Header.jsx
function Header() {
    return (
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-indigo-600">🍴 Receptenboek</div>
  
            <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
              <li className="hover:text-indigo-500 cursor-pointer">Home</li>
              <li className="hover:text-indigo-500 cursor-pointer">Recepten</li>
              <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
            </ul>
  
            {/* Mobiele menu icon (optioneel later functioneel maken) */}
            <div className="md:hidden text-2xl cursor-pointer">
              ☰
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;
  