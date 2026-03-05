"use client";

import {
  Code,
  Smartphone,
  Cloud,
  Bot,
  Users,
  Layers,
} from "lucide-react";

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
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-blue-500">Services</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Comprehensive technology services designed to accelerate your business growth.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-2xs hover:shadow-blue-500 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 mx-auto">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}