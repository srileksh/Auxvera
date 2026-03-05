"use client";

import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#0b1120] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              AUXVERA <span className="text-blue-500">TECH</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Innovating the future with smart technology solutions from Kerala, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="hover:text-white transition cursor-pointer">Software Development</li>
              <li className="hover:text-white transition cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-white transition cursor-pointer">AI & Automation</li>
              <li className="hover:text-white transition cursor-pointer">IT Consulting</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                <Instagram size={18} />
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          Copyright © 2026 AUXVERA TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}