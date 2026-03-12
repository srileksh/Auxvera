// import React from 'react'

// function TruvohFeatures() {
//   return (
//     <div>TruvohFeatures</div>
//   )
// }

// export default TruvohFeatures

// "use client";

// import { ScanLine, Smartphone, Wrench } from "lucide-react";

// export default function TruvohFeatures() {
//   const features = [
//     {
//       icon: <ScanLine size={26} />,
//       title: "Device Registration",
//       desc: "Register devices through invoice scanning (OCR), manual entry, email import, or retailer integrations. Purchase and warranty details are automatically recorded.",
//     },
//     {
//       icon: <Smartphone size={26} />,
//       title: "My Devices Dashboard",
//       desc: "A centralized dashboard to view device details, warranty status, service history, stored invoices, marketplace listings, and disposal options.",
//     },
//     {
//       icon: <Wrench size={26} />,
//       title: "Smart Service Requests",
//       desc: "Connect with verified service providers — manufacturer centers, warranty providers, and local technicians. Compare price, ratings, repair time, and availability.",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#020617] text-white py-20 px-6">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Key Features of <span className="text-blue-500">Truvoh</span>
//         </h2>

//         <p className="text-gray-400 max-w-2xl mx-auto mb-16">
//           Everything you need to manage your devices from purchase to end-of-life,
//           all in one intelligent platform.
//         </p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">

//           {features.map((feature, i) => (
//             <div
//               key={i}
//               className="relative group bg-gradient-to-br from-[#020617] to-[#0f172a] border border-[#1e293b]
//               rounded-2xl p-8 text-left transition duration-300 hover:-translate-y-2"
//             >
              
//               {/* Glow effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-500/20"></div>

//               {/* Icon */}
//               <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mb-6">
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-3">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-400 leading-relaxed text-sm">
//                 {feature.desc}
//               </p>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { color } from "framer-motion";
import {
  ScanLine,
  Smartphone,
  Wrench,
  FileText,
  ShoppingBag,
  BarChart3,
  Recycle,
} from "lucide-react";

export default function FeaturesSection() {
  const bottomFeatures = [
    {
      icon: <ScanLine size={24} />,
      title: "Device Registration",
      desc: "Register devices through invoice scanning (OCR), manual entry, email import, or retailer integrations. Purchase and warranty details are automatically recorded.",
      iconBg: "bg-blue-500/20 text-blue-400",
      glow: "shadow-[0_15px_40px_rgba(59,130,246,0.25)]",
    },
    {
      icon: <Smartphone size={24} />,
      title: "My Devices Dashboard",
      desc: "A centralized dashboard to view device details, warranty status, service history, stored invoices, marketplace listings, and disposal options.",
      iconBg: "bg-indigo-500/20 text-indigo-400",
      glow: "shadow-[0_15px_40px_rgba(99,102,241,0.25)]",
    },
    {
      icon: <Wrench size={24} />,
      title: "Smart Service Requests",
      desc: "Connect with verified service providers — manufacturer centers, warranty providers, and local technicians. Compare price, ratings, repair time, and availability.",
      iconBg: "bg-purple-500/20 text-purple-400",
      color: "shadow-[0_15px_40px_rgba(168,85,247,0.25)]",
    },

    {
      icon: <FileText size={24} />,
      title: "Digital Wallet",
      desc: "Secure storage for invoices, warranty certificates, insurance documents, and device records with automated expiry reminders.",
      color: "from-pink-500/20 to-purple-500/10",
      iconBg: "bg-pink-500/20 text-pink-400",
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Integrated Marketplace",
      desc: "Sell devices directly from your inventory with ownership verification, device condition details, service history, and AI-assisted price suggestions.",
      color: "from-indigo-500/20 to-blue-500/10",
      iconBg: "bg-indigo-500/20 text-indigo-400",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "AI-Powered Pricing Insights",
      desc: "AI-based analytics to compare prices across retailers, track historical price trends, identify the best time to buy, and discover alternative devices within your budget.",
      color: "from-cyan-500/20 to-blue-500/10",
      iconBg: "bg-cyan-500/20 text-cyan-400",
    },
    {
      icon: <Recycle size={24} />,
      title: "Refurbishment & Disposal Network",
      desc: "When devices reach the end of their lifecycle, connect with refurbishment and recycling partners to request refurbishment, sell devices, or schedule recycling pickup.",
      color: "from-emerald-500/20 to-teal-500/10",
      iconBg: "bg-emerald-500/20 text-emerald-400",
    },
  ]

  return (
    <section className="w-full bg-[#020617] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key Features of <span className="text-blue-500">Truvoh</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your devices from purchase to end-of-life,
            all in one intelligent platform.
          </p>
        </div>

        {/* Top 3 Cards */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topFeatures.map((feature, i) => (
            <div
              key={i}
              className="relative group bg-gradient-to-br from-[#020617] to-[#0f172a]
              border border-[#1e293b] rounded-2xl p-8 text-left
              transition duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-500/20"></div>

              <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div> */}

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border border-slate-800
              bg-gradient-to-br ${feature.color}
              p-8 transition duration-300 hover:-translate-y-2
              hover:border-blue-500/40`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center
                rounded-lg mb-6 ${feature.iconBg}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}