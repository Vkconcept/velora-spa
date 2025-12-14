import React from "react";
import Spa1 from "../assets/Spa1.jpg";
import spa2 from "../assets/spa2.jpg";
import TeamSection from "../Component/TeamSection";

export default function About() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Spa1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-4xl font-bold text-white mb-6">
            About Us
          </h2>
          <p className="text-xl md:text-1xl text-white max-w-4xl mx-auto">
            At Velora Spa, we provide more than relaxation we create a holistic
            wellness experience tailored for your mind, body, and spirit. Our
            expert team ensures you leave feeling rejuvenated, refreshed, and
            restored.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div>
              <img
                src={spa2}
                alt="Spa Experience"
                className="w-full h-100 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Who We Are
              </h2>
              <p className="text-stone-700 text-lg mb-6 leading-relaxed">
                At <span className="font-bold text-amber-700">Velora Spa</span>,
                we offer more than relaxation we provide a complete wellness
                experience for your mind, body, and spirit. Our expert team
                ensures that every visit leaves you feeling rejuvenated and
                restored.
              </p>
              <p className="text-stone-700 text-lg leading-relaxed">
                We focus on creating a calming and luxurious environment,
                tailoring each treatment to your needs. Whether you are seeking
                stress relief, skin rejuvenation, or holistic care, Velora Spa
                is your sanctuary for total wellness.
              </p>
            </div>
          </div>
          <TeamSection />
        </div>
      </section>
    </>
  );
}
