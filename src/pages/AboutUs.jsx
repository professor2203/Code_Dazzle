// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import DiscoverOurStory from "../components/DiscoverOurStory";
import DomainExpertise from "../components/DomainExpertise";
import AdvantagesAbout from "../components/AdvantagesAbout";
import AboutSection from "../components/AboutSection";
export default function AboutUs() {
  return <>
   <AboutHeader 
        title="About Us"
        backgroundImage="./image@2x.png" // Use your desired header image
      />
      <AboutSection
    heading="About Code Dazzle" para="Lorem ipsum is simply dummy text of the printing and typesetting industry."/>
<DiscoverOurStory/>
<DomainExpertise/>
<AdvantagesAbout/>
  </>;
}
