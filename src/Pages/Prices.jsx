import React from "react";
import Spa1 from "../assets/Spa1.jpg";
import spa9 from "../assets/spa9.jpg";
import spa10 from "../assets/spa10.jpg";
import spa11 from "../assets/spa11.jpg";
import spa12 from "../assets/spa12.jpg";
import spa13 from "../assets/spa13.jpg";
import Spa6 from "../assets/spa6.png";

export default function Prices() {
  const services = [
    {
      name: "Relaxing Full-Body Massage",
      price: "₦100,000",
      description:
        "60 minutes of soothing massage to relieve stress and tension.",
      image: spa9,
    },
    {
      name: "Aromatherapy Session",
      price: "₦150,000",
      description: "Enhance relaxation with essential oils and calming scents.",
      image: spa10,
    },
    {
      name: "Facial Treatment",
      price: "₦30,000",
      description:
        "Rejuvenate your skin with our personalized facial therapies.",
      image: spa11,
    },
    {
      name: "Manicure & Pedicure",
      price: "₦40,000",
      description: "Pamper your hands and feet with precision and care.",
      image: spa12,
    },
    {
      name: "Wellness Coaching",
      price: "₦80,000",
      description: "Personalized guidance for holistic health and wellness.",
      image: Spa6,
    },
    {
      name: "Aromatherapy & Hot Stone Combo",
      price: "₦120,000",
      description:
        "Relaxation and deep tissue therapy combined in one session.",
      image: spa13,
    },
  ];

  return (
    <section className="w-full bg-[#fdfaf5]">
      {/* Header Section */}
      <div className="w-full h-[60vh] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Spa1})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
            Discover Our Exclusive Treatments
          </h2>
          <p className="text-xl md:text-lg text-white max-w-4xl">
            Explore our range of luxurious spa services, designed to relax your
            body, rejuvenate your mind, and restore your inner balance. Choose
            the perfect treatment and indulge in a truly transformative
            experience.
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto py-16 px-6 lg:px-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="rounded-2xl overflow-hidden mb-4">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#7C4E30] mb-2">
              {service.name}
            </h3>
            <p className="text-lg font-bold text-amber-700 mb-3">
              {service.price}
            </p>
            <p className="text-stone-700 text-base">{service.description}</p>
            <button className="mt-4 px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
