import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Icons from "./Icons";

import "./Hero.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </header>

      <footer>
        <Footer />
      </footer>
      <Icons />
    </div>
  );
}
