import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Services from "./Services";
import Options from ".//Options";
import Review from "./Review";
import About from "./About";
import Contact from "./Contact";

function Homepage() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <Services/>
      <Options/>
      <Review/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage;