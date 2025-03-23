import { Link } from "react-router-dom";
import DarkMode from "../utility/DarkMode";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Site Name */}
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">Krishna</Link>

        {/* Center Action Buttons */}
        <div className="hidden md:flex space-x-6">
          <Link to="/SVS_1" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400">SV-सुप्रभातम्</Link>
          <Link to="/SVS_2" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400">SV-स्तोत्रम्</Link>
          <Link to="/SVS_3" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400">SV-प्रपत्ति</Link>
          <Link to="/SVS_4" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400">SV-मङ्गलाशासनम्</Link>
          <Link to="/BG" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400">Bhagavad Gita</Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="px-4 py-2 text-2xl rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer">
          <DarkMode />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;