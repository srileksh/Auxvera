"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] to-[#0b1120] text-white w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl px-[50px] py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          AUXVERA <span className="text-blue-500">TECHNOLOGIES</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-white transition">About</Link></li>
          <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                    <li><Link href="/product" className="hover:text-white transition text-blue-500 font-bold">TRUVOH</Link></li>

          <li><Link href="/why-us" className="hover:text-white transition">Why Us</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
                </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] px-6 pb-6 space-y-4 text-gray-300">
          <Link href="/" className="block hover:text-white">Home</Link>
          <Link href="/about" className="block hover:text-white">About</Link>
          <Link href="/services" className="block hover:text-white">Services</Link>
         <Link href="/product" className="hover:text-white transition text-blue-500 font-bold">TRUVOH</Link>

          <Link href="/why-us" className="block hover:text-white">Why Us</Link>
          <Link href="/contact" className="block hover:text-white">Contact</Link>

          <Link
            href="/contact"
            className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-xl font-semibold mt-4"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}