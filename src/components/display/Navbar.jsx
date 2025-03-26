import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu
import DarkMode from "../utility/DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Used for hamburger menu

  return (
    <nav className="sticky top-0 bg-blue-200 dark:bg-gray-800 shadow-lg border-b-2 border-blue-500 dark:border-yellow-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Site Name */}
        <Link to="/" className="text-2xl font-bold">Krishna</Link>

        {/* Center Action Buttons (Visible on md and larger) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/svs" className="sv-btn-nav">Suprabhatham</Link>
          <Link to="/bg" className="sv-btn-nav">Bhagavad Gita</Link>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="px-4 py-1 text-2xl rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer">
          <DarkMode />
        </div>

      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden bg-blue-100 dark:bg-gray-700 p-4 space-y-4 text-center">
          <li className="sv-btn-nav"><Link to="/svs">Suprabhatham</Link></li>
          <li className="sv-btn-nav"><Link to="/bg">Bhagavad Gita</Link></li>
        </ul>
      )}
    </nav>    
  );
};

export default Navbar;