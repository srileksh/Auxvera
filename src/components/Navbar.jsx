"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why Us", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClasses = (path) =>
    `transition relative pb-1 ${
      pathname === path
        ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className="bg-gradient-to-r from-[#0f172a] to-[#0b1120]
                 text-white w-full fixed top-0 left-0 z-50
                 shadow-lg"
    >
      <div
        className="max-w-7xl mx-auto
                   px-4 sm:px-6 md:px-5 lg:px-12
                   py-3 sm:py-4
                   flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bold tracking-wide
                     text-base sm:text-lg md:text-xl lg:text-2xl
                     whitespace-nowrap"
        >
          AUXVERA{" "}
          <span className="text-blue-500">TECHNOLOGIES</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-white transition">About</Link></li>
          <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                    <li><Link href="/product" className="hover:text-white transition text-blue-500 font-bold">TRUVOH</Link></li>

          <li><Link href="/why-us" className="hover:text-white transition">Why Us</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
        <ul
          className="hidden md:flex items-center
                     space-x-6 lg:space-x-10
                     font-medium text-sm lg:text-base"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={linkClasses(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-cyan-400
                       px-4 lg:px-6 py-2
                       text-sm lg:text-base
                       rounded-xl font-semibold
                       hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
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
      <div
        className={`md:hidden bg-[#0f172a]
                    transition-all duration-300 ease-in-out
                    overflow-hidden
                    ${isOpen ? "max-h-[500px] py-6 px-6" : "max-h-0 px-6"}`}
      >
        <div className="flex flex-col space-y-5 font-medium text-sm sm:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              className={`${
                pathname === link.path
                  ? "text-white border-l-4 border-blue-500 pl-2"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-center
                       bg-gradient-to-r from-blue-500 to-cyan-400
                       px-4 py-3 rounded-xl
                       font-semibold
                       mt-3"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}