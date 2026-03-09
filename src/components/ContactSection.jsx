
"use client";

import { MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f3f4f6] pb-20 px-6 py-24">
    <section className="bg-[#f3f4f6] 
                        py-14 sm:py-16 md:py-20 lg:py-24 
                        px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-blue-600 uppercase tracking-widest 
                        text-xs sm:text-sm mb-3">
            Get In Touch
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                         font-bold text-gray-900 leading-tight">
            Let’s Build the Future{" "}
            <span className="text-blue-500">Together</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-8 sm:gap-10 md:gap-12 
                        items-start">

          {/* Contact Form */}
          <form className="space-y-5 sm:space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto 
                         flex items-center justify-center gap-2 
                         bg-gradient-to-r from-blue-600 to-cyan-500 
                         text-white px-6 sm:px-8 py-3 sm:py-4 
                         rounded-xl font-semibold 
                         hover:opacity-90 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>

          {/* Contact Info Card */}
          <div className="bg-white 
                          rounded-2xl 
                          p-6 sm:p-8 md:p-10 
                          shadow-md 
                          border border-gray-200">

            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 
                              flex items-center justify-center 
                              rounded-xl 
                              bg-gradient-to-r from-blue-600 to-cyan-500 
                              text-white">
                <MapPin size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                  Our Location
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Kerala, India
                </p>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-4">
              AUXVERA TECHNOLOGIES PVT LTD
            </h4>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We're here to help you navigate your digital transformation
              journey. Reach out and let’s discuss how we can bring your
              vision to life.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}