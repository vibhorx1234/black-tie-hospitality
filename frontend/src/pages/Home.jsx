import HeroSection from "../components/home/HeroSection";
// import StatsBar from "../components/home/StatsBar";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ModelsSection from "../components/home/ModelsSection";
import PropertiesShowcase from "../components/home/PropertiesShowcase";
import GallerySection from "../components/home/GallerySection";
import FoundersSection from "../components/home/FoundersSection";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTABanner from "../components/home/CTABanner";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <StatsBar /> */}
      <AboutSection />
      <ServicesSection />
      <ModelsSection />
      <PropertiesShowcase />
      <GallerySection />
      <FoundersSection />
      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}


