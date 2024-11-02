// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import ServiceSection from "../components/ServiceSection";
export default function Services() {
  return <>
  <AboutHeader 
        title="services"
        backgroundImage="../assets/afterHero.png" // Use your desired header image
      />

      <div  className="p-12">
        <ServiceSection />
      </div>
  </>;
}
