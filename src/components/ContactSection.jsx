
// "use client";

// import { MapPin, Send } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <section className="bg-[#f3f4f6] 
//                         py-14 sm:py-16 md:py-20 lg:py-24 
//                         px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-12 md:mb-16">
//           <p className="text-blue-600 uppercase tracking-widest 
//                         text-xs sm:text-sm mb-3">
//             Get In Touch
//           </p>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
//                          font-bold text-gray-900 leading-tight">
//             Let’s Build the Future{" "}
//             <span className="text-blue-500">Together</span>
//           </h2>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid 
//                         grid-cols-1 
//                         md:grid-cols-2 
//                         gap-8 sm:gap-10 md:gap-12 
//                         items-start">

//           {/* Contact Form */}
//           <form className="space-y-5 sm:space-y-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
//                          focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
//                          focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
//                          focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <textarea
//               rows="5"
//               placeholder="Your Message"
//               className="w-full p-3 sm:p-4 placeholder:text-[#737482] rounded-xl border border-gray-300 
//                          focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full sm:w-auto 
//                          flex items-center justify-center gap-2 
//                          bg-gradient-to-r from-blue-600 to-cyan-500 
//                          text-white px-6 sm:px-8 py-3 sm:py-4 
//                          rounded-xl font-semibold 
//                          hover:opacity-90 transition"
//             >
//               Send Message <Send size={18} />
//             </button>
//           </form>

//           {/* Contact Info Card */}
//           <div className="bg-white 
//                           rounded-2xl 
//                           p-6 sm:p-8 md:p-10 
//                           shadow-md 
//                           border border-gray-200">

//             <div className="flex items-start sm:items-center gap-4 mb-6">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 
//                               flex items-center justify-center 
//                               rounded-xl 
//                               bg-gradient-to-r from-blue-600 to-cyan-500 
//                               text-white">
//                 <MapPin size={20} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-base sm:text-lg text-gray-900">
//                   Our Location
//                 </h3>
//                 <p className="text-gray-500 text-sm sm:text-base">
//                   Kerala, India
//                 </p>
//               </div>
//             </div>

//             <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-4">
//               AUXVERA TECHNOLOGIES PVT LTD
//             </h4>

//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//               We're here to help you navigate your digital transformation
//               journey. Reach out and let’s discuss how we can bring your
//               vision to life.
//             </p>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function ContactAuxveraSection() {
  return (
    <section className="bg-[#eef0f6] py-32 px-55">
      <div className="mx-auto  rounded-[32px] border border-[#e3e5ee] bg-[linear-gradient(180deg,#f4f5fb_0%,#eef0f8_100%)] px-6 py-16 shadow-[0_30px_80px_rgba(120,130,255,0.12)] md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-[20px] bg-[#dcd8f3] shadow-sm">
            <Mail className="h-9 w-9 text-[#3f57d8]" strokeWidth={2} />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-[#060b1f] ">
            Contact{" "}
            <span className="text-[#4459dd]">Auxvera Technologies</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#616777] md:text-[18px]">
            Interested in partnerships, integrations, or early access to
            Truvoh? Get in touch with us and be the first to experience the
            future of device lifecycle management.
          </p>

          {/* Form */}
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-4 md:flex-row md:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[50px] w-2/4 rounded-2xl border border-[#dfe3ee] bg-[#f3f4f8] px-5 text-[18px] text-[#111827] outline-none placeholder:text-[#6b7280] shadow-sm"
            />

            <button className="h-[50px] flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#4459dd_0%,#5d2ecb_100%)] px-8 text-[16px] font-semibold text-white shadow-[0_16px_30px_rgba(84,74,220,0.28)] transition hover:scale-[1.02]">
              <p>Request Access</p>
              <p><ArrowRight className="h-5 w-5" /></p>
            </button>
          </div>

          {/* Footer text */}
          <p className="mt-6 text-[16px] text-[#666c7a]">
            Or reach out directly at{" "}
            <a
              href="mailto:contact@auxvera.com"
              className="font-medium text-[#4459dd] hover:underline"
            >
              contact@auxvera.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}