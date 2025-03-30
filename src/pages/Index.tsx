
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationsSection from "@/components/DestinationsSection";
import ItinerarySection from "@/components/ItinerarySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DestinationsSection />
      <ItinerarySection />
      <Footer />
    </div>
  );
};

export default Index;
