import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";
import Prices from "./Pages/Prices";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Prices />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
