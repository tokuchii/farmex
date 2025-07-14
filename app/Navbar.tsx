import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 transition-colors duration-300 bg-white/30 shadow-lg backdrop-blur group hover:bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600">FarmEx</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-900 hover:text-green-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
            <a href="/services" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
            <a href="/portfolio" className="text-gray-700 hover:text-green-600 font-medium">Portfolio</a>
            <a href="/blog" className="text-gray-700 hover:text-green-600 font-medium">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 