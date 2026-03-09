"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
  return (
    <section className="mt-10relative w-full min-h-screen flex items-center justify-center bg-[#071a33] overflow-hidden">

      {/* Background gradient */}
      <div className=" absolute inset-0 bg-gradient-to-b from-[#071a33] via-[#071a33] to-[#020b1a]" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15 sm:opacity-20 
                      bg-[url('/tech-pattern.png')] 
                      bg-cover bg-center" />

      {/* Content */}
      <div className="relative z-10 
                      max-w-5xl lg:max-w-6xl 
                      text-center">

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-5 sm:mb-6"
        >
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 
                           rounded-full 
                           text-xs sm:text-sm 
                           font-medium 
                           bg-gradient-to-r from-blue-500 to-cyan-400 
                           text-white">
            KERALA, INDIA • EST. 2025
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-bold leading-snug sm:leading-tight 
                     text-white"
        >
          Innovating the Future{" "}
          with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 
                           text-transparent bg-clip-text">
            Smart Technology
          </span>{" "}
          Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-5 sm:mt-6 
                     text-gray-300 
                     text-sm sm:text-base md:text-lg 
                     max-w-xl md:max-w-2xl 
                     mx-auto leading-relaxed"
        >
          Empowering businesses through cutting-edge digital transformation
          and scalable tech solutions.
        </motion.p>

        {/* Buttons
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row 
                     items-center justify-center 
                     gap-3 sm:gap-4 
                     mt-8 sm:mt-10"
        >
          <button className="w-full sm:w-auto 
                             flex items-center justify-center gap-2 
                             px-5 sm:px-6 py-3 
                             rounded-lg 
                             bg-gradient-to-r from-blue-500 to-cyan-400 
                             text-white font-medium 
                             hover:scale-105 transition">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="w-full sm:w-auto 
                             px-5 sm:px-6 py-3 
                             rounded-lg 
                             border border-gray-400 
                             text-white 
                             hover:bg-white/10 transition">
            Contact Us
          </button>
        </motion.div>

        {/* Down Arrow */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-10 sm:mt-12 text-gray-400 text-lg"
        >
          ↓
        </motion.div> */} 
      </div>
    </section>
  );
}