// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function HomeSection() {
//   return (
//     <section className="mt-10relative w-full min-h-screen flex items-center justify-center bg-[#071a33] overflow-hidden">

//       {/* Background gradient */}
//       <div className=" absolute inset-0 bg-gradient-to-b from-[#071a33] via-[#071a33] to-[#020b1a]" />

//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-15 sm:opacity-20 
//                       bg-[url('/tech-pattern.png')] 
//                       bg-cover bg-center" />

//       {/* Content */}
//       <div className="relative z-10 
//                       max-w-5xl lg:max-w-6xl 
//                       text-center">

//         {/* Location Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-block mb-5 sm:mb-6"
//         >
//           <span className="px-3 sm:px-4 py-1.5 sm:py-2 
//                            rounded-full 
//                            text-xs sm:text-sm 
//                            font-medium 
//                            bg-gradient-to-r from-blue-500 to-cyan-400 
//                            text-white">
//             KERALA, INDIA • EST. 2025
//           </span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
//                      font-bold leading-snug sm:leading-tight 
//                      text-white"
//         >
//           Innovating the Future{" "}
//           with{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-cyan-400 
//                            text-transparent bg-clip-text">
//             Smart Technology
//           </span>{" "}
//           Solutions
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-5 sm:mt-6 
//                      text-gray-300 
//                      text-sm sm:text-base md:text-lg 
//                      max-w-xl md:max-w-2xl 
//                      mx-auto leading-relaxed"
//         >
//           Empowering businesses through cutting-edge digital transformation
//           and scalable tech solutions.
//         </motion.p>

//         {/* Buttons
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="flex flex-col sm:flex-row 
//                      items-center justify-center 
//                      gap-3 sm:gap-4 
//                      mt-8 sm:mt-10"
//         >
//           <button className="w-full sm:w-auto 
//                              flex items-center justify-center gap-2 
//                              px-5 sm:px-6 py-3 
//                              rounded-lg 
//                              bg-gradient-to-r from-blue-500 to-cyan-400 
//                              text-white font-medium 
//                              hover:scale-105 transition">
//             Get Started
//             <ArrowRight size={18} />
//           </button>

//           <button className="w-full sm:w-auto 
//                              px-5 sm:px-6 py-3 
//                              rounded-lg 
//                              border border-gray-400 
//                              text-white 
//                              hover:bg-white/10 transition">
//             Contact Us
//           </button>
//         </motion.div>

//         {/* Down Arrow */}
//         {/* <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="mt-10 sm:mt-12 text-gray-400 text-lg"
//         >
//           ↓
//         </motion.div> */} 
//       </div>
//     </section>
//   );
// }


"use client";

export default function HomeSection() {
  return (
    <section className="relative w-full mt-15 min-h-screen flex items-center justify-center bg-[#070b1a] overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-[120px]" />

      <div className="relative z-10 max-w-6xl px-6 text-center">

        {/* Tag */}
        <div className="inline-flex items-center px-4 py-1 mb-6 text-sm text-gray-300 border border-gray-700 rounded-full bg-white/5 backdrop-blur">
          ✦ Introducing Truvoh Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
          Building the Future <br />
          of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Device Lifecycle
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Management
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Auxvera Technologies is a technology company focused on building
          intelligent digital platforms that make everyday technology easier to
          manage. We develop AI-powered and scalable systems that help people
          and organizations manage devices, services, and information more
          efficiently.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">100%</h3>
            <p className="text-gray-400 mt-1 text-sm">Lifecycle Coverage</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">24/7</h3>
            <p className="text-gray-400 mt-1 text-sm">Platform Access</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Secure</h3>
            <p className="text-gray-400 mt-1 text-sm">Digital Wallet</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Smart</h3>
            <p className="text-gray-400 mt-1 text-sm">AI Insights</p>
          </div>

        </div>
      </div>
    </section>
  );
}