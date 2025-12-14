import React, { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`w-full z-50 flex items-center justify-between px-6 py-6 lg:px-12 transition-all duration-300
        ${
          isHome
            ? "absolute top-0 left-0 bg-transparent"
            : "relative bg-veloraBrown"
        }
      `}
    >
      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-stone-200 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <Leaf className="w-6 h-6 text-stone-200" />
        <span className="ml-2 text-2xl font-light tracking-wider text-stone-200">
          Velora Spa
        </span>
      </div>

      <div className="flex items-center ml-auto space-x-4">
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-6 py-2.5 border border-stone-300 rounded-full text-stone-200 hover:bg-amber-800 hover:text-stone-100 transition-colors duration-300">
            Reserve
          </button>
          <button className="px-6 py-2.5 bg-amber-700 rounded-full text-white hover:bg-amber-900 transition-colors duration-300">
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-stone-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-stone-900 flex flex-col items-center justify-center space-y-8 lg:hidden">
          <button
            className="absolute top-6 right-6 text-stone-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Mobile Links */}
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl text-stone-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <button className="px-8 py-3 border border-stone-300 rounded-full text-stone-200 hover:bg-amber-800 hover:text-stone-100 transition-colors duration-300">
            Reserve
          </button>
          <button className="px-8 py-3 bg-amber-700 rounded-full text-white hover:bg-amber-900 transition-colors duration-300">
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
}
