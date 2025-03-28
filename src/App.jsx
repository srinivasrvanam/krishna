import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utility/ScrollToTop"; 
import Home from "./components/pages/Home";
import SVSHome from "./components/pages/SVSHome";
import SVSChapter from "./components/pages/SVSChapter";
import SVSVerse from "./components/pages/SVSVerse";
import BGHome from "./components/pages/BGHome";
import BGChapter from "./components/pages/BGChapter";
import BGVerse from "./components/pages/BGVerse";
import Navbar from "./components/display/Navbar";
import Footer from "./components/display/Footer";
import BackToTop from "./components/utility/BackToTop";
import Breadcrumbs from "./components/utility/Breadcrumbs";

const Layout = ({ children }) => {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-gray-900">
      <Navbar /> {/* Navbar stays fixed across all pages */}
      <div>{children}</div> {/* This part changes */}
      <Footer />
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/svs" element={<SVSHome />} />
          <Route path="/svs/:chapter_num" element={<SVSChapter />} />
          <Route path="/svs/:chapter_num/:verse_num" element={<SVSVerse />} />
          <Route path="/bg" element={<BGHome />} />
          <Route path="/bg/:chapter_num" element={<BGChapter />} />
          <Route path="/bg/:chapter_num/:verse_num" element={<BGVerse />} />
          <Route path="/:topic_name/:chapter_num/:verse_num" element={<Breadcrumbs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
