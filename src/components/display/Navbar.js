import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        {/* <div className='header'>
            <h1 className='headline'>ॐ नमो भगवते वासुदेवाय</h1>
        </div> */}
    
        <nav className="navbar">
        <Link to="/" className="custom-button">Home</Link>
        <Link to="/SVS_1" className="custom-button">SV-सुप्रभातम्</Link>
        <Link to="/SVS_2" className="custom-button">SV-स्तोत्रम्</Link>
        <Link to="/SVS_3" className="custom-button">SV-प्रपत्ति</Link>
        <Link to="/SVS_4" className="custom-button">SV-मङ्गलाशासनम्</Link>
        <Link to="/BG" className="custom-button">BG</Link>
        {/* <Link to="/contact" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Contact</Link> */}
        </nav>
    </>
  );
};

export default Navbar;