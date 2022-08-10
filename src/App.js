import React from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Routes>
            <Route path="/" element={<Homepage/> } />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
