"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] to-[#0b1120] text-white fixed w-full top-0 z-50">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          AUXVERA <span className="text-blue-500">TECHNOLOGIES</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <li>
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          </li>

                    <li>
            <Link
              href="/truvoh"
              className="text-blue-500 font-semibold hover:text-white transition"
            >
              TRUVOH
            </Link>
          </li>


          <li>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/whoweserve" className="hover:text-white transition">
              Who We Serve
            </Link>
          </li>


          <li>
            <Link href="/whyauxvera" className="hover:text-white transition">
              Why Auxvera
            </Link>
          </li>
                    <li>
            <Link href="/ourteam" className="hover:text-white transition">
              Our Team
            </Link>
          </li>


          <li>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-700">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-300 font-medium">

            <Link href="/" onClick={closeMenu} className="hover:text-white">
              Home
            </Link>

                        <Link
              href="/truvoh"
              onClick={closeMenu}
              className="text-blue-500 font-semibold"
            >
              TRUVOH
            </Link>


            <Link href="/about" onClick={closeMenu} className="hover:text-white">
              About
            </Link>

            <Link href="/whoweserve" onClick={closeMenu} className="hover:text-white">
              Who We Serve
            </Link>


            <Link href="/whyauxvera" onClick={closeMenu} className="hover:text-white">
              Why Auxvera
            </Link>

                        <Link
              href="/ourteam"
              onClick={closeMenu}
              className="text-blue-500 font-semibold"
            >
              TRUVOH
            </Link>


            <Link href="/contact" onClick={closeMenu} className="hover:text-white">
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
      
  );
}
