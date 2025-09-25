import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";
import ContactPage from "./pages/ContactPage";
import "./style.css";
import About from "./pages/About";

function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;
