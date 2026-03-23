
// "use client";

// import { AlertTriangle, LayoutGrid } from "lucide-react";
// import { TiSpanner } from "react-icons/ti";
// import TruvohFeatures from "./TruvohFeatures";

// export default function TruvohSection() {
//   return (
//     <section className="relative bg-[#0c1634] text-white py-24 px-10 sm:px-12 2xl-px-6 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px]" />

//       <div className="relative max-w-7xl mx-auto">
//         {/* Badge */}
//         <div className="flex justify-center mb-6">
//           <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-full text-sm text-gray-300">
//             <LayoutGrid size={16} />
//             Introducing
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6">
//           <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
//             Truvoh
//           </span>{" "}
//           — Smart Product Lifecycle Management Platform
//         </h2>

//         {/* Description */}
//         <p className="max-w-3xl mx-auto text-center text-gray-400 text-base md:text-lg leading-relaxed mb-16">
// Our first product Truvoh will deliver the capability to integrate segmented processes and
// systems in a single connected ecosystem to manage the product lifecycle.Truvoh simplifies
// product ownership and creates a more connected digital ecosystem.
// From the moment a product is purchased until it reaches the end of its lifecycle, the platform
// helps users organize and manage products efficiently.</p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Problem Card */}
//           <div className="bg-[#0b1124] border border-white/10 rounded-2xl p-8 shadow-xl">
            
//             <div className="flex items-center gap-3">
//             <div>
//             <h3 className=" text-[16px] md:text-xl font-semibold mb-4">
//               The Problem TRUVOH Solves
//             </h3>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 mb-6">
//               <AlertTriangle size={24} />
//             </div>
//             </div>

//             <p className="text-gray-400 mb-6">
//               Today people own many electronic devices such as smartphones,
//               laptops, and home appliances. Managing these devices is
//               often difficult.
//             </p>

//             <ul className="space-y-3 text-gray-300 text-sm">
//               <li>• Losing invoices or warranty documents</li>
//               <li>• Tracking warranty expiry dates</li>
//               <li>• Finding reliable repair services</li>
//               <li>• Lack of clear repair cost estimates</li>
//               <li>• Limited options for resale or disposal</li>
//             </ul>
//           </div>

//           {/* Solution Card */}
//           <div className="bg-gradient-to-br from-[#121b3a] to-[#1a2350] border border-white/10 rounded-2xl p-8 shadow-xl">
//             <div className="flex items-center gap-3">
//               <div>
//                 <h3 className="text-[18px] md:text-xl font-semibold mb-4">
//                   The Truvoh Solution
//                 </h3>
//               </div>
//               <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-6">
//                 <LayoutGrid size={18} />
//               </div>
//             </div>
//             <p className="text-gray-400 mb-6">
//               One connected platform that brings device lifecycle management
//               together.
//             </p>

//             <div className="space-y-3 text-sm text-gray-300">
//               <div>• Store invoices and documents</div>
//               <div>• Track warranty information</div>
//               <div>• Request repairs and service</div>
//               <div>• Sell products through a marketplace</div>
//               <div>• Compare products and pricing insights</div>
//               <div>• Request for refurbishment or recycling</div>
//             </div>
//             <div className="bg-gradient-to-br from-[#121b3a] to-[#1a2350] border border-white/10 rounded-2xl p-5  mt-5 shadow-xl text-gray-300 flex  justify-center items-center gap-3">
//               <div className="text-[20px]">
//                 <TiSpanner />
//               </div>
//               <div>Connect with verified service providers instantly</div>
//             </div>
//           </div>
//         </div>
//             <TruvohFeatures/>

//       </div>
//     </section>
//   );
// }

"use client";

import { AlertTriangle, LayoutGrid } from "lucide-react";
import { TiSpanner } from "react-icons/ti";
import TruvohFeatures from "./TruvohFeatures";

export default function TruvohSection() {
  return (
    <section className="relative bg-[#0c1634] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[500px] sm:w-[700px] md:w-[900px] 
      h-[250px] sm:h-[300px] md:h-[400px] 
      bg-gradient-to-r from-blue-600/20 to-purple-600/20 
      blur-[100px] sm:blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm text-gray-300">
            <LayoutGrid size={14} />
            Introducing
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6 px-2">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
            Truvoh
          </span>{" "}
          — Smart Product Lifecycle Management Platform
        </h2>

        {/* Description */}
        <p className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-center text-gray-400 
        text-sm sm:text-base md:text-lg leading-relaxed mb-10 sm:mb-14 md:mb-16 px-2">
          Truvoh integrates fragmented systems into one ecosystem to manage the complete product lifecycle.
          From purchase to end-of-life, users can organize, track, and manage products efficiently.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

          {/* Problem Card */}
          <div className="bg-[#0b1124] border border-white/10 rounded-2xl 
          p-5 sm:p-6 md:p-8 shadow-xl">

            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                The Problem TRUVOH Solves
              </h3>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
              flex items-center justify-center rounded-lg 
              bg-red-500/10 text-red-400">
                <AlertTriangle size={20} />
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Managing multiple electronic devices is often difficult and inefficient.
            </p>

            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
              <li>• Losing invoices or warranty documents</li>
              <li>• Tracking warranty expiry dates</li>
              <li>• Finding reliable repair services</li>
              <li>• Lack of repair cost transparency</li>
              <li>• Limited resale or disposal options</li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-[#121b3a] to-[#1a2350] 
          border border-white/10 rounded-2xl 
          p-5 sm:p-6 md:p-8 shadow-xl">

            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                The Truvoh Solution
              </h3>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
              flex items-center justify-center rounded-lg 
              bg-blue-500/20 text-blue-400">
                <LayoutGrid size={18} />
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              One unified platform for complete device lifecycle management.
            </p>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <div>• Store invoices and documents</div>
              <div>• Track warranty information</div>
              <div>• Request repairs and service</div>
              <div>• Sell products via marketplace</div>
              <div>• Compare pricing insights</div>
              <div>• Request refurbishment or recycling</div>
            </div>

            {/* Highlight Box */}
            <div className="mt-5 sm:mt-6 bg-[#0b1124] border border-white/10 
            rounded-xl p-3 sm:p-4 text-gray-300 
            flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <TiSpanner className="text-lg sm:text-xl" />
              <span>Connect with verified service providers instantly</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 sm:mt-16">
          <TruvohFeatures />
        </div>

      </div>
    </section>
  );
}