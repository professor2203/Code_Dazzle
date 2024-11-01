// src/pages/Home.jsx
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Methodology from "../components/Methodology";
import LeadershipSection from "../components/LeadershipSection";
import FAQ from "../components/FAQ";
import IndustryExperts from "../components/IndustryExperts";
import BusinessGrowthCard from "../components/BusinessGrowthCard";
import ServicesWithOffer from "../components/ServicesWithOffer";
import StatsOverview from "../components/StatsOverview";
import AfterHero from "../components/AfterHero";
import Content from "../components/Content";
import LeadershipCarousel from "../components/LeadershipCarousel";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Hero />
        <AfterHero />
        <ServicesWithOffer />
        <StatsOverview />
        <BusinessGrowthCard />
        <Methodology />
        <BusinessGrowthCard />
        <LeadershipSection />
        <IndustryExperts />
        <Content />
        <LeadershipCarousel />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
