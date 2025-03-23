import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SVS_1 from "./components/pages/SVS_1";
import SVS_2 from "./components/pages/SVS_2";
import SVS_3 from "./components/pages/SVS_3";
import SVS_4 from "./components/pages/SVS_4";
import BGHome from "./components/pages/BGHome";
import BG from "./components/pages/BG";
import Navbar from "./components/display/Navbar";
import Footer from "./components/display/Footer";
import BackToTop from "./components/utility/BackToTop";
import DarkMode from "./components/utility/DarkMode";

const Layout = ({ children }) => {
  return (
    <>
      <DarkMode />
      <h1 className="text-3xl font-bold underline text-red-500 dark:text-white dark:bg-gray-800">
      Hello world!
    </h1>
      <Navbar /> {/* Navbar stays fixed across all pages */}
      <div>{children}</div> {/* This part changes */}
      <Footer />
      <BackToTop />
    </>
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
          <Route path="/BG" element={<BGHome />} />
          <Route path="/BG/:chapter_num/:verse_num" element={<BG />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
