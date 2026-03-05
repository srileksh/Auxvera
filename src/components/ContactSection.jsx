// import React from 'react'

// function ContactSection() {
//   return (
//     <div>ContactSection</div>
//   )
// }

// export default ContactSection
"use client";

import { MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f3f4f6] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Build the Future{" "}
            <span className="text-blue-500">Together</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <MapPin size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Our Location
                </h3>
                <p className="text-gray-500">Kerala, India</p>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 mb-4">
              AUXVERA TECHNOLOGIES PVT LTD
            </h4>

            <p className="text-gray-600 leading-relaxed">
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