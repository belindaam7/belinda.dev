import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


import "./Hero.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <Footer />
    </div>
  );
}
