import React, { useState } from "react";
import Spa1 from "../assets/Spa1.jpg";

export default function Contact() {
  const [formType, setFormType] = useState("individual");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message has been sent as a ${formType}!`);
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Spa1})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-4xl font-bold text-white mb-6">
            Connect with Velora Spa
          </h2>
          <p className="text-xl md:text-1xl text-white max-w-4xl mx-auto">
            Have a question, want to book an appointment, or just want to say
            hello? Reach out to us and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-8">
                At <span className="font-bold text-amber-700">Velora Spa</span>,
                we provide luxurious wellness experiences tailored to your
                needs. Reach out by phone, email, or using the form, and our
                friendly team will assist you promptly.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone:</h3>
                  <p className="text-gray-700">08176860084</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email:</h3>
                  <p className="text-gray-700">contact@veloraspa.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Website:</h3>
                  <p className="text-gray-700">www.veloraspa.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address:</h3>
                  <p className="text-gray-700">
                    123 Wellness Street, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {/* Form Type Toggle */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setFormType("individual")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  formType === "individual"
                    ? "bg-amber-700 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setFormType("company")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  formType === "company"
                    ? "bg-amber-700 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Company
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white font-bold py-4 rounded-lg hover:bg-amber-800 transition shadow-lg hover:shadow-xl"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
