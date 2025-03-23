import { Link } from "react-router-dom";
import DarkMode from "../utility/DarkMode";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-blue-200 dark:bg-gray-800 shadow-lg border-b-2 border-blue-500 dark:border-yellow-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Site Name */}
        <Link to="/" className="text-2xl font-bold">Krishna</Link>

        {/* Center Action Buttons */}
        <div className="hidden md:flex space-x-6">
          <Link to="/SVS_1" className="sv-btn-nav">SV-सुप्रभातम्</Link>
          <Link to="/SVS_2" className="sv-btn-nav">SV-स्तोत्रम्</Link>
          <Link to="/SVS_3" className="sv-btn-nav">SV-प्रपत्ति</Link>
          <Link to="/SVS_4" className="sv-btn-nav">SV-मङ्गलाशासनम्</Link>
          <Link to="/BG" className="sv-btn-nav">Bhagavad Gita</Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="px-4 py-1 text-2xl rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer" >
          <DarkMode />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;