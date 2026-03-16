
// "use client";

// import { Rocket, Layers, Target, Shield, Zap } from "lucide-react";

// export default function AboutSection() {
//   const features = [
//     {
//       icon: <Rocket size={28} />,
//       title: "Innovation-Driven",
//       desc: "Continuous exploration of emerging technologies to build future-ready platforms.",
//     },
//     {
//       icon: <Layers size={28} />,
//       title: "Scalable Architecture",
//       desc: "Systems designed to grow seamlessly with your business needs.",
//     },
//     {
//       icon: <Target size={28} />,
//       title: "Customer-Focused",
//       desc: "Solutions designed around real user needs and experiences.",
//     },
//     {
//       icon: <Shield size={28} />,
//       title: "Security First",
//       desc: "High standards for security, reliability, and performance.",
//     },
//   ];

//   return (
//     <section className="relative bg-[#070b1a] text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             About{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
//               Auxvera
//             </span>
//           </h2>

//           <p className="text-gray-400 mb-6 leading-relaxed">
//             Auxvera Technologies is a product-driven technology company focused
//             on building intelligent digital platforms that solve real-world
//             problems. Our goal is to create <span className="font-semibold text-white">AI-enabled digital ecosystems</span>  that
//             connect consumers, businesses, and service providers.
//           </p>

//           <p className="text-gray-400 mb-10 leading-relaxed">
//             By combining product innovation, cloud technologies, and data
//             intelligence, we build platforms that transform fragmented
//             processes into connected systems. Our flagship platform Truvoh
//             reflects this vision by providing a unified lifecycle management
//             platform for electronic devices.
//           </p>

//           {/* Mission */}
//           <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-xl   transition backdrop-blur ">
//             <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
//               <Zap size={22} />
//             </div>

//             <div className="">
//               <h4 className="font-semibold text-lg mb-1">Our Mission</h4>
//               <p className="text-gray-400 text-sm">
//                 To simplify device ownership and build <span className="font-semibold text-white">AI-powered </span> digital
//                 infrastructure for the future of device lifecycle management.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT FEATURES */}
//         <div className="grid sm:grid-cols-2 gap-8">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="relative bg-[#0b1226] border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition"
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 rounded-2xl bg-blue-600/10 blur-2xl opacity-30"></div>

//               <div className="relative">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 mb-5">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

//                 <p className="text-gray-400 text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { FaRocket, FaLayerGroup, FaBullseye, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function AboutSection() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Innovation-Driven",
      desc: "Continuous exploration of emerging technologies to build future-ready platforms.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Scalable Architecture",
      desc: "Systems designed to grow seamlessly with your business needs.",
    },
    {
      icon: <FaBullseye />,
      title: "Customer-Focused",
      desc: "Solutions designed around real user needs and experiences.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      desc: "High standards for security, reliability, and performance.",
    },
  ];

  return (
    <section className="w-full  py-37 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
            About <span className="text-indigo-600">Auxvera</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Auxvera Technologies is a product-driven technology company focused
            on building intelligent digital platforms that solve real-world
            problems. Our goal is to create AI-enabled digital ecosystems that
            connect consumers, businesses, and service providers.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            By combining product innovation, cloud technologies, and data
            intelligence, we build platforms that transform fragmented processes
            into connected systems. Our flagship platform Truvoh reflects this
            vision by providing a unified lifecycle management platform for
            electronic devices.
          </p>

          {/* Mission */}
          <div className="flex items-start gap-4 mt-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl text-indigo-600 text-xl">
              <FaBolt />
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 ">Our Mission</h4>
              <p className="text-gray-600 text-sm mt-1">
                To simplify device ownership and build AI-powered digital
                infrastructure for the future of device lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl text-lg mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}