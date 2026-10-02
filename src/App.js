import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";
import ContactPage from "./pages/ContactPage";
import Faq from "./pages/Faq";
import About from "./pages/About";
import ITCourses from "./pages/It_courses";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
    <ScrolltoTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/competitive-courses" element={<CoursesPage />} /> 
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/courses/technical-courses" element={<ITCourses />}/>
         <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
