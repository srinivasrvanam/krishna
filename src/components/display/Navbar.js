import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        {/* <div className='header'>
            <h1 className='headline'>ॐ नमो भगवते वासुदेवाय</h1>
        </div> */}
    
        <nav className="navbar navbar-expand">
          <div className="navbar-brand">Krishna</div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/SVS_1" className="nav-link">SV-सुप्रभातम्</Link>
            </li>
            <li className="nav-item">
              <Link to="/SVS_2" className="nav-link">SV-स्तोत्रम्</Link>
            </li>
            <li className="nav-item">
              <Link to="/SVS_3" className="nav-link">SV-प्रपत्ति</Link>
            </li>
            <li className="nav-item">
              <Link to="/SVS_4" className="nav-link">SV-मङ्गलाशासनम्</Link>
            </li>
            <li className="nav-item">
              <Link to="/BG" className="nav-link">BG</Link>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Navbar;