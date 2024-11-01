// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import DiscoverOurStory from "../components/DiscoverOurStory";
import DomainExpertise from "../components/DomainExpertise";
import AdvantagesAbout from "../components/AdvantagesAbout";
export default function AboutUs() {
  return <>
   <AboutHeader 
        title="About Us"
        backgroundImage="../assets/afterHero.png" // Use your desired header image
      />
<DiscoverOurStory/>
<DomainExpertise/>
<AdvantagesAbout/>
  </>;
}
