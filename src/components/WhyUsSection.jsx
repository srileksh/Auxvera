"use client";

import {
  Zap,
  Heart,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import CompanyInfo from "./CompanyInfo";

export default function WhyUsSection() {
  const features = [
    {
      icon: <Zap size={26} />,
      title: "Innovation-Driven Approach",
      desc: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Heart size={26} />,
      title: "Client-Centric Solutions",
      desc: "Every solution is tailored to your unique needs, ensuring maximum value and impact.",
    },
    {
      icon: <Shield size={26} />,
      title: "Scalable & Secure Systems",
      desc: "Built for growth with enterprise-grade security at every layer.",
    },
    {
      icon: <Award size={26} />,
      title: "Skilled Technology Experts",
      desc: "Our team of experienced professionals brings deep expertise across multiple domains.",
    },
    {
      icon: <CheckCircle size={26} />,
      title: "Commitment to Quality",
      desc: "Rigorous quality assurance processes ensure reliable, high-performance deliverables.",
    },
  ];

  return (
      <div className="max-w-7xl mx-auto">
      <section className="w-full bg-gray-100 py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-blue-600 text-sm sm:text-base tracking-wide uppercase mb-3">
              Why Choose Us
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                AUXVERA
              </span>{" "}
              Advantage
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
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
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CompanyInfo />
    </div>
  );
}