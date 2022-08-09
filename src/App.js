import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Options from "./components/Options";
import Review from "./components/Review";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Options/>
      <Review/>
      <About/>
    </div>
  );
}

export default App;
