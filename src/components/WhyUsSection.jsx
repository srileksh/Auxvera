"use client";

import {
  Zap,
  Heart,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import CompanyInfo from "./CompanyInfo";

export default function WhyUsSection() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Innovation-Driven Approach",
      desc: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Heart size={28} />,
      title: "Client-Centric Solutions",
      desc: "Every solution is tailored to your unique needs, ensuring maximum value and impact.",
    },
    {
      icon: <Shield size={28} />,
      title: "Scalable & Secure Systems",
      desc: "Built for growth with enterprise-grade security at every layer.",
    },
    {
      icon: <Award size={28} />,
      title: "Skilled Technology Experts",
      desc: "Our team of experienced professionals brings deep expertise across multiple domains.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Commitment to Quality",
      desc: "Rigorous quality assurance processes ensure reliable, high-performance deliverables.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-24  ">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600  tracking-wide uppercase mb-4">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            The <span className=" bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent ">AUXVERA</span> Advantage
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-5">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
      <CompanyInfo/>
    </section>
  );
}