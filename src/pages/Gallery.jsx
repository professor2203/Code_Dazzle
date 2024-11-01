// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import Album from "../components/Album";
export default function Gallery() {
  return <>
   <AboutHeader 
        title="Gallery"
        backgroundImage="../assets/afterHero.png" // Use your desired header image
      />
  
  <Album />
  </>;
}
