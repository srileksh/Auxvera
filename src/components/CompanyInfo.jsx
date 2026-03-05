"use client";

import { Calendar, Hash, MapPin, Activity } from "lucide-react";

export default function CompanyInfo() {
  const details = [
    {
      icon: <Calendar size={32} />,
      label: "INCORPORATION DATE",
      value: "December 15, 2025",
    },
    {
      icon: <Hash size={32} />,
      label: "CIN",
      value: "U62010KL2025PTC099229",
    },
    {
      icon: <MapPin size={32} />,
      label: "LOCATION",
      value: "Kerala, India",
    },
    {
      icon: <Activity size={32} />,
      label: "STATUS",
      value: "Active",
    },
  ];

  return (
    <section className="w-full mt-15 py-24  bg-gradient-to-r from-[#0f1b2d] to-[#1b2a44]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-4">
          Company Information
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Corporate <span className="text-blue-400">Details</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {details.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e2a40] border border-blue-500/20 rounded-xl p-8 text-center hover:border-blue-400 transition duration-300"
            >
              <div className="flex justify-center text-blue-400 mb-5">
                {item.icon}
              </div>

              <p className="text-gray-400 text-sm tracking-wide mb-2">
                {item.label}
              </p>

              <p className="text-white font-semibold text-lg">
                {item.value}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}