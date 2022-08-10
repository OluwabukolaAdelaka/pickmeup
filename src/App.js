import React from "react";
//import Navigation from "./components/Navigation";
//import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import { Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Routes>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Homepage/> } />
      </Routes>
    </div>
  );
}

export default App;
