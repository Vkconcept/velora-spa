import React, { useState } from "react";
import { Plus } from "lucide-react";
import spa3 from "../assets/spa3.png";
import spar4 from "../assets/spar4.png";
import spa5 from "../assets/spa5.png";
import spa6 from "../assets/spa6.png";
import spa7 from "../assets/spa7.png";
import spa8 from "../assets/spa8.png";

export default function SpaTeamAndServices() {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      name: "Olivia Reynolds",
      role: "Spa Director",
      image: spa3,
      description:
        "Leads the spa with over 10 years of experience in holistic wellness.",
    },
    {
      name: "Hannah Lee",
      role: "Massage Therapist",
      image: spar4,
      description:
        "Specializes in relaxing massage therapies tailored to your needs.",
    },
    {
      name: "Emma Foster",
      role: "Manicure & Pedicure Specialist",
      image: spa5,
      description:
        "Ensures your hands and feet are pampered with precision and care.",
    },
    {
      name: "Sophia Martinez",
      role: "Aromatherapy Specialist",
      image: spa7,
      description:
        "Creates calming and invigorating experiences using essential oils and aromatherapy techniques.",
    },
    {
      name: "Isabella Clark",
      role: "Skin Care Expert",
      image: spa8,
      description:
        "Provides personalized skin treatments to rejuvenate and refresh every client.",
    },
    {
      name: "Mia Thompson",
      role: "Wellness Coach",
      image: spa6,
      description:
        "Guides clients through holistic wellness programs to promote overall well-being and balance.",
    },
  ];

  return (
    <>
      {/* Team Section */}
      <section className="py-16 px-6 lg:px-12 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Wonderful Team
          </h2>
          <p className="text-[#7C4E30] text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto">
            Meet the dedicated professionals who ensure your spa experience is
            luxurious and relaxing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center p-6">
                  <p className="text-sm md:text-base text-[#7C4E30] mb-1 font-medium">
                    {member.role}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#7C4E30] mb-3">
                    {member.name}
                  </h3>
                  <button
                    onClick={() =>
                      setExpandedMember(expandedMember === i ? null : i)
                    }
                    className="w-10 h-10 rounded-full border-2 border-[#7C4E30] flex items-center justify-center mx-auto hover:bg-[#7C4E30] hover:text-white transition-all duration-300"
                  >
                    <Plus
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedMember === i ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {expandedMember === i && (
                    <p className="mt-4 text-[#7C4E30] text-base md:text-lg font-medium px-2">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600"
                alt="Spa bath"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600"
                alt="Spa products"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text & Buttons */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#7C4E30] mb-6 leading-tight">
              Relax, Rejuvenate, and Renew
            </h2>
            <p className="text-stone-700 mb-6 max-w-lg text-lg md:text-xl">
              Indulge in our luxurious spa treatments designed to soothe your
              body, mind, and spirit. From calming massages to revitalizing
              facials, every experience is crafted to leave you refreshed,
              restored, and glowing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all duration-300 shadow-md hover:shadow-lg">
                Reserve
              </button>
              <button className="px-8 py-3 border-2 border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 transition-all duration-300 shadow-md hover:shadow-lg">
                All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
