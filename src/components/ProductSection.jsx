
"use client";

import { AlertTriangle, LayoutGrid } from "lucide-react";
import { TiSpanner } from "react-icons/ti";
import TruvohFeatures from "./TruvohFeatures";

export default function TruvohSection() {
  return (
    <section className="relative bg-[#060b1a] text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-full text-sm text-gray-300">
            <LayoutGrid size={16} />
            Introducing
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
            Truvoh
          </span>{" "}
          — AI-Powered Device Lifecycle Management
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-base md:text-lg leading-relaxed mb-16">
          Truvoh is an AI-powered platform designed to manage the complete
          lifecycle of consumer electronic devices. From the moment a device is
          purchased until it reaches the end of its life, Truvoh helps users
          manage their devices easily and intelligently. By combining
          automation, <span className="font-semibold text-white">AI insights</span>, and connected services, Truvoh replaces
          scattered processes with one intelligent system.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Problem Card */}
          <div className="bg-[#0b1124] border border-white/10 rounded-2xl p-8 shadow-xl">
            
            <div className="flex items-center gap-3">
            <div>
            <h3 className="text-xl font-semibold mb-4">
              The Problem TRUVOH Solves
            </h3>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 mb-6">
              <AlertTriangle size={24} />
            </div>
            </div>

            <p className="text-gray-400 mb-6">
              Today people own many electronic devices such as smartphones,
              laptops, and home appliances. However, managing these devices is
              often difficult.
            </p>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Losing invoices or warranty documents</li>
              <li>• Forgetting warranty expiry dates </li>
              <li>• Finding reliable repair services</li>
              <li>• Lack of clear repair pricing</li>
              <li>• Managing multiple devices in different places</li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-[#121b3a] to-[#1a2350] border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  The Truvoh Solution
                </h3>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-6">
                <LayoutGrid size={18} />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              One connected platform that brings device lifecycle management
              together.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>• Register devices</div>
              <div>• Track warranties</div>
              <div>• Request repairs</div>
              <div>• Store documents</div>
              <div>• Sell devices</div>
              <div>• Compare prices</div>
              <div>• Refurbish devices</div>
              <div>• Recycle responsibly</div>
            </div>
            <div className="bg-gradient-to-br from-[#121b3a] to-[#1a2350] border border-white/10 rounded-2xl p-5  mt-5 shadow-xl text-gray-300 flex  justify-center items-center gap-3">
              <div className="text-[20px]">
                <TiSpanner />
              </div>
              <div>Connect with verified service providers instantly</div>
            </div>
          </div>
        </div>
            <TruvohFeatures/>

      </div>
    </section>
  );
}
