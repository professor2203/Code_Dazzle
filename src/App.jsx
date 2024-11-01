// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
      {/* <Header /> */}
     
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
    
      
    </Router>
  );
}

export default App;
