"use client";

import {
  Code,
  Smartphone,
  Cloud,
  Bot,
  Users,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to meet your unique business requirements with modern architectures.",
    icon: Code,
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Engaging, high-performance web and mobile applications that deliver exceptional user experiences.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to optimize costs and boost performance.",
    icon: Cloud,
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Intelligent automation and AI-powered tools that streamline workflows and unlock insights.",
    icon: Bot,
  },
  {
    title: "IT Consulting",
    description:
      "Expert technology consulting to align your IT strategy with business goals and drive growth.",
    icon: Users,
  },
  {
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize operations and stay competitive.",
    icon: Layers,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#0b1120] py-25 px-6">
    <section className="bg-gradient-to-b from-[#0f172a] to-[#0b1120] 
                        py-14 sm:py-16 md:py-20 
                        px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-cyan-400 uppercase tracking-widest 
                      text-xs sm:text-sm mb-3">
          What We Do
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       font-bold text-white leading-tight">
          Our <span className="text-blue-500">Services</span>
        </h2>

        <p className="text-gray-400 mt-4 
                      text-sm sm:text-base 
                      max-w-xl md:max-w-2xl 
                      mx-auto">
          Comprehensive technology services designed to accelerate your business growth.
        </p>

        {/* Cards */}
        <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-6 sm:gap-8 
                        mt-10 sm:mt-14 md:mt-16">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#111827] 
                           p-6 sm:p-8 
                           rounded-2xl 
                           border border-gray-800 
                           hover:border-blue-500 
                           hover:shadow-lg 
                           hover:-translate-y-1 
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 
                                flex items-center justify-center 
                                rounded-xl 
                                bg-gradient-to-r from-blue-500 to-cyan-400 
                                mb-5 sm:mb-6 
                                mx-auto">
                  <Icon className="text-white" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl 
                               font-semibold text-white 
                               mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 
                              text-sm sm:text-base 
                              leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}