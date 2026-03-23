// "use client";
// import { motion } from "framer-motion";

// export default function HomeSection() {
//   return (
//     <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[url('/bgimg.jpeg')] bg-cover bg-center bg-no-repeat px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
//       {/* Black transparent overlay */}
//       <div className="absolute inset-0 z-0 bg-white/80 xl:bg-white/65" />

//       {/* Soft glow background */}
//       <div className="absolute left-1/2 top-1/2 z-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-[100px] sm:h-[380px] sm:w-[520px] md:h-[450px] md:w-[700px] lg:h-[500px] lg:w-[900px]" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
//         {/* Tag */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-4 inline-flex max-w-full items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-gray-700 backdrop-blur sm:px-4 sm:text-sm"
//         >
//           ✦ Introducing Truvoh Platform
//         </motion.div> */}

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-5xl  font-bold leading-tight text-black text-2xl md:text-3xl lg:text-6xl"
//         >
//           Building the Future for{" "}
//           <span className="bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent">
//             Product Lifecycle
//           </span>{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent">
//             Management
//           </span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mx-auto mt-5 max-w-4xl  px-1 text-sm leading-8 text-gray-800 sm:text-base md:text-[17.5px]"
//         >
//           <p>
//             Auxvera Technologies is a product-driven technology company focused
//             on building platforms that simplify complex real-world problems
//             through intelligent software systems. Our mission is to create
//             scalable digital ecosystems that connect consumers, businesses, and
//             service providers through technology. We combine product innovation,
//             cloud-native engineering, and AI-driven insights to design platforms
//             capable of transforming fragmented industries into unified digital
//             ecosystems.
//             </p>
          
//           <p>
//             Our flagship platform TRUVOH represents this vision — a unified
//             lifecycle platform for consumer devices.
//           </p>
//           <p>
//             TRUVOH, is an intelligent platform that helps consumers manage their
//             devices from purchase to disposal — including invoice & , warranty
//             tracking, service requests, resale, AI powered pricing insights and
//             streamlining the disposal & refurbishment process — all in one
//             ecosystem.
//           </p>
//         </motion.p>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 px-2 text-center sm:mt-8 sm:gap-6 sm:px-6 md:grid-cols-4 md:px-10 lg:px-16"
//         >
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 md:text-xl">100%</h3>
//             <p className="text-xs  text-gray-900 sm:text-sm">
//               Lifecycle Coverage
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold text-gray-900 md:text-xl">24/7</h3>
//             <p className="text-xs text-gray-900 sm:text-sm">Platform Access</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold text-gray-900 md:text-xl">
//               Secure
//             </h3>
//             <p className="text-xs text-gray-900 sm:text-sm">Digital Wallet</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold text-gray-900 md:text-xl">
//               Smart
//             </h3>
//             <p className="text-xs text-gray-900 sm:text-sm">AI Insights</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden 
    bg-[url('/bgimg.jpeg')] bg-cover bg-center bg-no-repeat 
    px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-white/80 xl:bg-white/65" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 z-0 
      h-[250px] w-[250px] sm:h-[350px] sm:w-[450px] 
      md:h-[420px] md:w-[650px] lg:h-[500px] lg:w-[900px]
      -translate-x-1/2 -translate-y-1/2 rounded-full 
      bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl font-bold leading-tight text-black 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Building the Future for{" "}
          <span className="bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent">
            Product Lifecycle
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent">
            Management
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl 
          text-gray-800 text-sm sm:text-base md:text-[17px] 
          leading-relaxed space-y-3 px-2"
        >
          <p>
            Auxvera Technologies is a product-driven company building platforms
            that simplify real-world problems through intelligent software systems.
          </p>

          <p>
            Our mission is to create scalable digital ecosystems connecting
            consumers, businesses, and service providers.
          </p>

          <p>
            Our flagship platform <strong>TRUVOH</strong> is a unified lifecycle
            platform for managing consumer devices from purchase to disposal.
          </p>

          <p>
            It includes invoice & warranty tracking, service requests, resale,
            AI-powered pricing insights, and streamlined refurbishment — all in one system.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 sm:mt-8 grid w-full max-w-3xl 
          grid-cols-2 md:grid-cols-4 
          gap-4 sm:gap-6 px-2 sm:px-4"
        >
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              100%
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              Lifecycle Coverage
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              24/7
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              Platform Access
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              Secure
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              Digital Wallet
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              Smart
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              AI Insights
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}