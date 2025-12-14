import React from "react";
import Spa1 from "../assets/Spa1.jpg";
import Navbar from "./Navbar";
import BeautyServices from "./BeautyServices";
import VeloraFeatures from "./VeloraFeatures";
import FaqSection from "./FaqSection";
export default function Hero() {
  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Spa1})`,
          }}
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            Relax. Restore. Glow.
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl font-light">
            Transform your day with expert care and holistic wellness
            experiences.
          </p>
        </div>
      </div>
      <BeautyServices />
      <VeloraFeatures />
      <FaqSection />
    </div>
  );
}
