import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ModelsSection from "../components/home/ModelsSection";
import PropertiesShowcase from "../components/home/PropertiesShowcase";
import FoundersSection from "../components/home/FoundersSection";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTABanner from "../components/home/CTABanner";
import VideoShowcaseSection from "../components/home/VideoShowcaseSection";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PropertiesShowcase />
      <VideoShowcaseSection />
      <ServicesSection />
      <ModelsSection />
      <FoundersSection />
      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}


