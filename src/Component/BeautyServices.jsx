import React from "react";

export default function BeautyServices() {
  const services = [
    {
      title: "Pure Elegance",
      description:
        "Experience refined beauty care tailored to enhance your glow.",
      color: "amber",
    },
    {
      title: "Timeless Beauty",
      description:
        "Our expert touch ensures you radiate elegance every single day.",
      color: "rose",
    },
    {
      title: "Radiant Glow",
      description:
        "Embrace flawless beauty with our luxurious treatments and services.",
      color: "brown",
    },
  ];

  const colorClasses = {
    amber: {
      text: "text-amber-600",
      border: "border-amber-400",
      hover: "hover:border-amber-600",
    },
    rose: {
      text: "text-rose-500",
      border: "border-rose-300",
      hover: "hover:border-rose-500",
    },
    brown: {
      text: "text-[#7C4E30]",
      border: "border-[#D9B08C]",
      hover: "hover:border-[#7C4E30]",
    },
  };

  return (
    <div className="relative -mt-24 z-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
              colorClasses[service.color].border
            } ${colorClasses[service.color].hover}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                className={`text-5xl font-light ${
                  colorClasses[service.color].text
                }`}
              >
                {service.number}
              </span>
              <div
                className={`h-px flex-1 ${colorClasses[service.color].border}`}
              ></div>
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#7C4E30] mb-4">
              {service.title}
            </h3>

            <p className="text-stone-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
