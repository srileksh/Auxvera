

"use client";

import { Mail } from "lucide-react";
import { BiSolidContact } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function ContactAuxveraSection() {
  return (
    <section
      className="
        min-h-screen w-full
        bg-[#0c1634]
        flex items-center justify-center
        px-4 sm:px-6 lg:px-12 xl:px-20
        py-10 sm:py-12
      "
    >
      <div className="w-full max-w-3xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 sm:mb-8 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#dcd8f3] shadow-sm">
          <Mail className="h-7 w-7 sm:h-9 sm:w-9 text-[#3f57d8]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Contact{" "}
          <span className="text-[#4459dd]">Auxvera Technologies</span>
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#9aa3b2] max-w-2xl mx-auto">
          Interested in partnerships, integrations or early access to Truvoh?
          Get in touch and be among the first to experience the future of
          product lifecycle management.
        </p>

        {/* Contact Card */}
        <div className="mt-5">
          
          
        
           <div className="mt-8 flex justify-center md:mt-10">
            <a
              href="mailto:info@auxvera.com"
              className="group inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-[#4f6cff]/40 hover:bg-white/10 hover:text-white sm:px-6 sm:text-base"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-[#4f6cff]/20">
                <Mail className="h-4 w-4 text-[#90a4ff]" />
              </span>
              <span className="break-all sm:break-normal">
                <span className="mr-1 text-slate-400">Email:</span>
                info@auxvera.com
              </span>
            </a>
          </div>

         
        </div>

      </div>
    </section>
  );
}

