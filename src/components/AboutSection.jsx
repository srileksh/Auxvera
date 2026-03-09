"use client";

import { Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
   
    <section className="w-full overflow-x-hidden bg-gray-100 
                        py-14 sm:py-16 md:py-20 
                        px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Heading */}
        <p className="text-blue-600 
                      text-xs sm:text-sm 
                      tracking-wide uppercase mb-3 sm:mb-4">
          About Us
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       font-bold text-gray-900 
                       leading-tight">
          Building Tomorrow’s Technology,{" "}
          <span className="text-blue-500">Today</span>
        </h2>

        {/* Description */}
        <p className="mt-6 sm:mt-8 
                      text-gray-600 
                      text-sm sm:text-base md:text-lg 
                      max-w-xl md:max-w-2xl 
                      mx-auto leading-relaxed">
          AUXVERA TECHNOLOGIES PRIVATE LIMITED is a forward-thinking technology
          company based in Kerala, India. Established in 2025, we focus on
          delivering innovative, scalable, and reliable technology solutions
          designed to drive business growth and digital transformation.
        </p>

        {/* Cards */}
        <div className="grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-6 sm:gap-8
                        mt-10 sm:mt-14 md:mt-16">

          {/* Mission Card - Move from LEFT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}
              transition={{
    type: "spring",
    stiffness: 80,
    damping: 15,
  }}

            viewport={{ once: true, amout: 0.3 }}
            className="bg-white 
                       rounded-2xl  
                       shadow-sm 
                       p-6 sm:p-8 
                       text-left 
                       hover:shadow-lg 
                       transition-all duration-300"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 
                            flex items-center justify-center 
                            rounded-xl 
                            bg-gradient-to-r from-blue-500 to-cyan-400 
                            text-white mb-5 sm:mb-6">
              <Target size={24} />
            </div>

            <h3 className="text-lg sm:text-xl 
                           font-semibold text-gray-900 mb-3 sm:mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 
                          text-sm sm:text-base 
                          leading-relaxed">
              To empower businesses of all sizes with smart, scalable technology
              solutions that accelerate growth and drive meaningful digital
              transformation.
            </p>
          </motion.div>

          {/* Vision Card - Move from RIGHT */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              transition={{
    type: "spring",
    stiffness: 80,
    damping: 15,
    delay: 0.2,
  }}

            viewport={{ once: true, amount: 0.3 }}
            className="bg-white 
                       rounded-2xl 
                       shadow-sm 
                       p-6 sm:p-8 
                       text-left 
                       hover:shadow-lg 
                       transition-all duration-300"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 
                            flex items-center justify-center 
                            rounded-xl 
                            bg-gradient-to-r from-blue-500 to-cyan-400 
                            text-white mb-5 sm:mb-6">
              <Lightbulb size={24} />
            </div>

            <h3 className="text-lg sm:text-xl 
                           font-semibold text-gray-900 mb-3 sm:mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 
                          text-sm sm:text-base 
                          leading-relaxed">
              To become a leading technology partner recognized for innovation,
              quality, and a relentless commitment to empowering businesses
              through transformative digital solutions.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
