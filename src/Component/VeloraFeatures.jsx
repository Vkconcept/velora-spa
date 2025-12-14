import React from "react";
import {
  FaSpa,
  FaLeaf,
  FaHotTub,
  FaHands,
  FaFire,
  FaRegSmile,
} from "react-icons/fa";

export default function VeloraFeatures() {
  const features = [
    {
      icon: <FaHands className="text-amber-600" />,
      title: "Skilled Therapists",
      description:
        "Our trained therapists provide treatments that rejuvenate your mind, body, and soul.",
    },
    {
      icon: <FaSpa className="text-rose-500" />,
      title: "Relaxing Environment",
      description:
        "Experience ultimate comfort in our serene and calming spa atmosphere.",
    },
    {
      icon: <FaLeaf className="text-green-400" />,
      title: "Natural Ingredients",
      description:
        "We use high-quality, natural products for safe and effective wellness treatments.",
    },
    {
      icon: <FaHotTub className="text-blue-400" />,
      title: "Hydrotherapy & Baths",
      description:
        "Indulge in soothing water treatments designed to relax and refresh your body.",
    },
    {
      icon: <FaFire className="text-amber-400" />,
      title: "Aromatherapy",
      description:
        "Relax and recharge with essential oils and aromatic therapies.",
    },
    {
      icon: <FaRegSmile className="text-pink-400" />,
      title: "Comprehensive Care",
      description:
        "From massages to facials, we offer a complete range of spa services tailored to you.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm uppercase tracking-widest mb-4 font-light">
            Why Choose Velora Spa?
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-[#7C4E30]">
            Personalized Spa & Wellness Care
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif text-[#7C4E30] mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
