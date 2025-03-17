import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className='header'>
            <h1 className='headline'>ॐ नमो भगवते वासुदेवाय</h1>
        </div>
    
        <nav style={{ padding: "10px", backgroundColor: "#007bff", color: "white", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
        <Link to="/SVS_1" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontWeight: "bold" }}>Suprabhatham</Link>
        {/* <Link to="/contact" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Contact</Link> */}
        </nav>
    </>
  );
};

export default Navbar;