// // "use client";
// // import { motion } from "framer-motion";

// // export default function HomeSection() {
// //   return (
// //     <section className="relative w-full mt-15 pt-20 min-h-screen flex items-center justify-center bg-[#070b1a] overflow-hidden">
// //       {/* Grid Background */}
// //       <div className=" absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:60px_60px]" />

// //       {/* Gradient Glow */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-[120px]" />

// //       <div className="relative z-10 max-w-6xl px-6 text-center">
// //         {/* Tag */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="inline-flex items-center px-4 py-1 mb-6 text-sm text-gray-300 border border-gray-700 rounded-full bg-white/5 backdrop-blur"
// //         >
// //           ✦ Introducing Truvoh Platform
// //         </motion.div>

// //         {/* Heading */}
// //         <motion.h1
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
// //         >
// //           Building the Future <br />
// //           of{" "}
// //           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
// //             Device Lifecycle
// //           </span>{" "}
// //           <br />
// //           <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
// //             Management
// //           </span>
// //         </motion.h1>

// //         {/* Description */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //           className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
// //         >
// //           Auxvera Technologies is a technology company focused on building
// //           intelligent digital platforms that make everyday technology easier to
// //           manage. We develop <span className="font-semibold text-white">AI-powered</span> and scalable systems that help people
// //           and organizations manage devices, services, and information more
// //           efficiently.
// //         </motion.p>

// //         {/* Stats */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-25 mb-20 text-center"
// //         >
// //           <div>
// //             <h3 className="text-3xl md:text-4xl font-bold text-white">100%</h3>
// //             <p className="text-gray-400 mt-1 text-sm">Lifecycle Coverage</p>
// //           </div>

// //           <div>
// //             <h3 className="text-3xl md:text-4xl font-bold text-white">24/7</h3>
// //             <p className="text-gray-400 mt-1 text-sm">Platform Access</p>
// //           </div>

// //           <div>
// //             <h3 className="text-3xl md:text-4xl font-bold text-white">
// //               Secure
// //             </h3>
// //             <p className="text-gray-400 mt-1 text-sm">Digital Wallet</p>
// //           </div>

// //           <div>
// //             <h3 className="text-3xl md:text-4xl font-bold text-white">Smart</h3>
// //             <p className="text-gray-400 mt-1 text-sm">AI Insights</p>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import { motion } from "framer-motion";

// export default function HomeSection() {
//   return (
//     <section className="relative w-full pb-20   pt-10 min-h-screen flex items-center justify-center overflow-hidden bg-[url('/bgimg.jpeg')] bg-cover bg-center bg-no-repeat">
//       <div className="absolute inset-0 bg-black/50 ">
//       {/* Soft Glow Background */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-blue-300/40 to-purple-300/40 blur-[120px] rounded-full " />

//       <div className="relative z-10 max-w-6xl px-6 text-center ">

//         {/* Tag */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center px-4 py-1 mb-6 text-sm text-gray-600 border border-gray-300 rounded-full bg-white/70 backdrop-blur"
//         >
//           ✦ Introducing Truvoh Platform
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
//         >
//           Building the Future 
//           of{" "} 
//         <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//             Device Lifecycle
//           </span>{" "}
          
//           <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
//             Management
//           </span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
//         >
//           Auxvera Technologies is a technology company focused on building
//           intelligent digital platforms that make everyday technology easier to
//           manage. We develop{" "}
//           <span className="font-semibold text-gray-900">AI-powered</span> and
//           scalable systems that help people and organizations manage devices,
//           services, and information more efficiently.
//         </motion.p>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-2 md:grid-cols-4  gap-1 mt-10 px-50 text-center"
//         >
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900">
//               100%
//             </h3>
//             <p className="text-gray-500  text-sm">Lifecycle Coverage</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold text-gray-900">
//               24/7
//             </h3>
//             <p className="text-gray-500  text-sm">Platform Access</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold text-gray-900">
//               Secure
//             </h3>
//             <p className="text-gray-500  text-sm">Digital Wallet</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold text-gray-900">
//               Smart
//             </h3>
//             <p className="text-gray-500  text-sm">AI Insights</p>
//           </div>
//         </motion.div>

//       </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section className="relative pb-20 flex min-h-screen w-full items-center justify-center overflow-hidden bg-[url('/bgimg.jpeg')] bg-cover bg-center bg-no-repeat">
      {/* Black transparent overlay */}
      <div className="absolute inset-0 z-0 bg-black/10" />

      {/* Soft glow background */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-gray-700 backdrop-blur"
        >
          ✦ Introducing Truvoh Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl"
        >
          Building the Future of{" "}
          <span className="bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent">
            Device Lifecycle
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent">
            Management
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg"
        >
          Auxvera Technologies is a technology company focused on building
          intelligent digital platforms that make everyday technology easier to
          manage. We develop{" "}
          <span className="font-semibold text-black">AI-powered</span> and
          scalable systems that help people and organizations manage devices,
          services, and information more efficiently.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" grid w-full max-w-4xl grid-cols-2 gap-6 px-20 mt-5 text-center md:grid-cols-4"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-sm text-gray-700">Lifecycle Coverage</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-sm text-gray-700">Platform Access</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">Secure</h3>
            <p className="text-sm text-gray-700">Digital Wallet</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">Smart</h3>
            <p className="text-sm text-gray-700">AI Insights</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}