import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import SVS_1 from './components/pages/SVS_1';
import SVS_2 from './components/pages/SVS_2';
import SVS_3 from './components/pages/SVS_3';
import SVS_4 from './components/pages/SVS_4';
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
          <Route path="/" element={<Home />} />
          <Route path="/SVS_1" element={<SVS_1 />} />
          <Route path="/SVS_2" element={<SVS_2 />} />
          <Route path="/SVS_3" element={<SVS_3 />} />
          <Route path="/SVS_4" element={<SVS_4 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
