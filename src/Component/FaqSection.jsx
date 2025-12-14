import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Velora Spa offer?",
      answer:
        "We offer a range of spa treatments including massages, facials, body scrubs, aromatherapy, hot stone therapy, and wellness coaching tailored to your needs.",
    },
    {
      question: "Do I need to book in advance?",
      answer:
        "Yes, we recommend booking in advance to secure your preferred time and treatment. Walk-ins are welcome but may be subject to availability.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Bring a positive mindset! We provide towels, robes, and all necessary equipment. For wellness coaching sessions, any personal health info or goals are helpful.",
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Absolutely. We use high-quality, trusted products suitable for all skin types, including sensitive skin. Let us know about any allergies beforehand.",
    },
    {
      question: "Can I gift a spa session to someone?",
      answer:
        "Yes! We offer gift vouchers that can be purchased online or in-person, perfect for friends, family, or loved ones.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm uppercase tracking-widest mb-4 font-light">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold font-serif text-[#7C4E30]">
            Everything You Need to Know
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-300 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-800 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-base leading-relaxed transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
