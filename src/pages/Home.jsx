// src/pages/Home.jsx
import React from "react";
import Methodology from "../components/Methodology";
import LeadershipSection from "../components/LeadershipSection";
import FAQ from "../components/FAQ";
import IndustryExperts from "../components/IndustryExperts";
import BusinessGrowthCard from "../components/BusinessGrowthCard";
import ServicesWithOffer from "../components/ServicesWithOffer";
import StatsOverview from "../components/StatsOverview";
import AfterHero from "../components/AfterHero";
import LeadershipCarousel from "../components/LeadershipCarousel";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import TestimonialComponents from "../components/TestimonialComponent";
import MyChatbot from "../components/MyChatbot";
// import Testimonialscomponent from "../components/TestimonialComponent";
export default function Home() {

  return (
    <>

      <div className="bg-white">
       
       <Hero />
       <MyChatbot/>
        <AfterHero />
 <ServicesWithOffer />
        <StatsOverview />
        <LogoSlider/>
        <BusinessGrowthCard />
        {/* <TestimonialsComponent /> */}
        <TestimonialComponents/>
        <Methodology />
        <IndustryExperts />
        <LeadershipCarousel />
        <FAQ />
      </div>
    </>
  );
}
