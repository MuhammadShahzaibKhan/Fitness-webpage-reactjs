import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Schedule from "../pages/Schedule";
import OurGallery from "../pages/OurGallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="gallery" element={<OurGallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
