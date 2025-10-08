import React from "react";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png"; // তোমার logo path

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Hero.io Logo" className="w-10 h-10" />
            <h2 className="text-xl font-semibold text-white">HERO.IO</h2>
          </div>
          <p className="text-sm text-gray-400">
            We create smart, modern apps that make your life easier and more productive.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/sakhawat236hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Apps</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: hmdsakhawat@236gmail.come</p>
          <p className="text-sm text-gray-400">Phone: +880 1851121472</p>
          <p className="text-sm text-gray-400">Address: Dhaka, Bangladesh, Dinajpur</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
      Copyright © 2025 - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
