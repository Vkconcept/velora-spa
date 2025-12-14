import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#7C4E30] text-[#f5f5dc] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Velora Spa</h3>
          <p className="text-[#f5f5dc] mb-4">
            Experience ultimate relaxation and holistic wellness at Velora Spa.
            Indulge in our luxurious treatments that rejuvenate body, mind, and
            spirit.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-300 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li
              className="hover:text-amber-300 transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-amber-300 transition cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="hover:text-amber-300 transition cursor-pointer"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="hover:text-amber-300 transition cursor-pointer"
              onClick={() => navigate("/team")}
            >
              Team
            </li>
            <li
              className="hover:text-amber-300 transition cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-amber-300 transition cursor-pointer">
              Massage Therapy
            </li>
            <li className="hover:text-amber-300 transition cursor-pointer">
              Facial Treatments
            </li>
            <li className="hover:text-amber-300 transition cursor-pointer">
              Body Treatments
            </li>
            <li className="hover:text-amber-300 transition cursor-pointer">
              Spa Packages
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
          <p>Phone: +234 817 686 0084</p>
          <p>Email: info@veloraspaspa.com</p>
          <p>Address: Lagos, Nigeria</p>
        </div>
      </div>

      <div className="mt-12 border-t border-amber-300 pt-6 text-center text-[#f5f5dc] text-sm">
        &copy; {new Date().getFullYear()} Velora Spa. All rights reserved.
      </div>
    </footer>
  );
}
