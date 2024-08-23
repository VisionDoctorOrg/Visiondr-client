import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Sponsors from "./components/Sponsors";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import SlideshowBackground from "./components/SlideshowBackground";

const LandingPage = () => {
  return (
    <div className="w-[100%]">
      <Hero />
      <Features />
      <About />
      <FAQ />
      <Reviews />
      <Sponsors />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
