// import React from 'react'

// function TruvohFeatures() {
//   return (
//     <div>TruvohFeatures</div>
//   )
// }

// export default TruvohFeatures

"use client";

import { ScanLine, Smartphone, Wrench } from "lucide-react";

export default function TruvohFeatures() {
  const features = [
    {
      icon: <ScanLine size={26} />,
      title: "Device Registration",
      desc: "Register devices through invoice scanning (OCR), manual entry, email import, or retailer integrations. Purchase and warranty details are automatically recorded.",
    },
    {
      icon: <Smartphone size={26} />,
      title: "My Devices Dashboard",
      desc: "A centralized dashboard to view device details, warranty status, service history, stored invoices, marketplace listings, and disposal options.",
    },
    {
      icon: <Wrench size={26} />,
      title: "Smart Service Requests",
      desc: "Connect with verified service providers — manufacturer centers, warranty providers, and local technicians. Compare price, ratings, repair time, and availability.",
    },
  ];

  return (
    <section className="w-full bg-[#020617] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Key Features of <span className="text-blue-500">Truvoh</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Everything you need to manage your devices from purchase to end-of-life,
          all in one intelligent platform.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, i) => (
            <div
              key={i}
              className="relative group bg-gradient-to-br from-[#020617] to-[#0f172a] border border-[#1e293b]
              rounded-2xl p-8 text-left transition duration-300 hover:-translate-y-2"
            >
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-500/20"></div>

              {/* Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}