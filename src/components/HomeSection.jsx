"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
  return (
    <section className="mt-15 relative w-full min-h-screen flex items-center justify-center bg-[#071a33] overflow-hidden">

      {/* Background gradient */}
      <div className=" absolute inset-0 bg-gradient-to-b from-[#071a33] via-[#071a33] to-[#020b1a]" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('/tech-pattern.png')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
            KERALA, INDIA • EST. 2025
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
        >
          Innovating the Future 
          with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Smart Technology
          </span>{" "}
          
          Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Empowering businesses through cutting-edge digital transformation
          and scalable tech solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:scale-105 transition">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-400 text-white hover:bg-white/10 transition">
            Contact Us
          </button>
        </motion.div>

        {/* Down Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-12 text-gray-400"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}