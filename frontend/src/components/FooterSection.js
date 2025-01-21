import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function FooterSection() {
  return (
    <footer className="bg-pink-500 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Top Links Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#" className="hover:text-gray-200 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Shop
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Gallery
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Contact
          </a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition text-2xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition text-2xl"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-100">
          © 2025 All rights reserved. Website designed by Shubhendra Singh.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
