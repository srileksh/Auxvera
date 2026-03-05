"use client";

import { Target, Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-25 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Heading */}
        <p className="text-blue-600  tracking-wide uppercase mb-4">
          About Us
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl mt-5 font-bold text-gray-900">
          Building Tomorrow’s Technology,{" "}
          <span className="text-blue-500">Today</span>
        </h2>

        {/* Description */}
        <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
          AUXVERA TECHNOLOGIES PRIVATE LIMITED is a forward-thinking technology
          company based in Kerala, India. Established in 2025, we focus on
          delivering innovative, scalable, and reliable technology solutions
          designed to drive business growth and digital transformation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-sm  p-8 text-left hover:shadow-lg transition">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-6">
              <Target size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To empower businesses of all sizes with smart, scalable technology
              solutions that accelerate growth and drive meaningful digital
              transformation.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-sm  p-8 text-left hover:shadow-lg transition">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-6">
              <Lightbulb size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become a leading technology partner recognized for innovation,
              quality, and a relentless commitment to empowering businesses
              through transformative digital solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}