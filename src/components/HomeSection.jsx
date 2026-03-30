



"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden 
    bg-[url('/bgimg.jpeg')] bg-cover bg-center bg-no-repeat 
    px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-white/80 xl:bg-white/65" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 z-0 
      h-[250px] w-[250px] sm:h-[350px] sm:w-[450px] 
      md:h-[420px] md:w-[650px] lg:h-[500px] lg:w-[900px]
      -translate-x-1/2 -translate-y-1/2 rounded-full 
      bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl font-bold leading-tight text-black 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Building the Future for{" "}
          <span className="bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent">
            Product Lifecycle
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent">
            Management
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl 
          text-gray-800 text-sm sm:text-base md:text-[17px] 
          leading-relaxed space-y-3 px-2"
        >
          <p>
            Auxvera Technologies is a product-driven company building platforms
            that simplify real-world problems through intelligent software systems.
          

          
            Our mission is to create scalable digital ecosystems connecting
            consumers, businesses, and service providers.
          </p>

          <p>
            Our flagship platform <strong>TRUVOH</strong> is a unified lifecycle
            platform for managing consumer devices from purchase to disposal.
          

          
            It includes invoice & warranty tracking, service requests, resale,
            AI-powered pricing insights, and streamlined refurbishment — all in one system.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 sm:mt-8 grid w-full max-w-3xl 
          grid-cols-2 md:grid-cols-4 
          gap-4 sm:gap-6 px-2 sm:px-4"
        >
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              100%
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              Lifecycle Coverage
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              24/7
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              Platform Access
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              Secure
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              Digital Wallet
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              Smart
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              AI Insights
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}