import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu
import DarkMode from "../utility/DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Used for hamburger menu
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 bg-blue-200 dark:bg-gray-800 shadow-lg border-b-2 border-blue-500 dark:border-yellow-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Site Name */}
        <Link to="/" className="text-2xl font-bold">Krishna</Link>

        {/* Center Action Buttons (Visible on md and larger) */}
        <div className="hidden md:flex space-x-6">
        <Link to="/" className="sv-btn-nav">Home</Link>
          <Link to="/svs" className="sv-btn-nav">Suprabhatham</Link>
          <Link to="/bg" className="sv-btn-nav">Bhagavad Gita</Link>
          <Link to="/vsn" className="sv-btn-nav">Sahasranamam</Link>
          <Link to="/las" className="sv-btn-nav">Ashtottaram</Link>
          <Link to="/gps" className="sv-btn-nav">Pancharatnam</Link>
          <Link to="/da" className="sv-btn-nav">Damodara</Link>
          <Link to="/hc" className="sv-btn-nav">Hanuman</Link>
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
        <ul ref={menuRef} className="absolute w-full md:hidden bg-blue-100 dark:bg-gray-700 p-4 space-y-4 text-center z-50">
          <li className="sv-btn-nav"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="sv-btn-nav"><Link to="/svs" onClick={() => setIsOpen(false)}>Suprabhatham</Link></li>
          <li className="sv-btn-nav"><Link to="/bg" onClick={() => setIsOpen(false)}>Bhagavad Gita</Link></li>
          <li className="sv-btn-nav"><Link to="/vsn" onClick={() => setIsOpen(false)}>Sahasranamam</Link></li>
          <li className="sv-btn-nav"><Link to="/las" onClick={() => setIsOpen(false)}>Ashtottaram</Link></li>
          <li className="sv-btn-nav"><Link to="/gps" onClick={() => setIsOpen(false)}>Pancharatnam</Link></li>
          <li className="sv-btn-nav"><Link to="/da" onClick={() => setIsOpen(false)}>Damodara</Link></li>
          <li className="sv-btn-nav"><Link to="/hc" onClick={() => setIsOpen(false)}>Hanuman</Link></li>
        </ul>
      )}
    </nav>    
  );
};

export default Navbar;