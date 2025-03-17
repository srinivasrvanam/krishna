import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import SVS_1 from './components/pages/SVS_1';
import Navbar from './components/display/Navbar';
import Footer from './components/display/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar stays fixed across all pages */}
      <div>{children}</div> {/* This part changes */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/krishna/" element={<Home />} />
          <Route path="/krishna/SVS_1" element={<SVS_1 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
