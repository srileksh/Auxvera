"use client";

import { Globe, Brain, ShieldCheck,Cpu, BarChart3, RefreshCw } from "lucide-react";

export default function ProductSection() {
  const features = [
    {
      icon: <Globe size={28} />,
      title: "Global Operations",
      description:
        "Multilingual capabilities with region-specific compliance for data privacy, storage, and invoicing.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI & ML Ready",
      description:
        "Built to adapt to intelligent product monitoring, early fault detection, and smart recommendations.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Compliance Built-In",
      description:
        "Region-specific data privacy and storage regulations handled out of the box.",
    },
    {
      icon: <Cpu size={26} />,
      title: "Smart Device Support",
      description:
        "Designed for next-gen AI-enabled products with automated incident reporting.",
    },
    {
      icon: <BarChart3 size={26} />,
      title: "Full Lifecycle Management",
      description:
        "Manage consumer products from point of sale through end-of-life seamlessly.",
    },
    {
      icon: <RefreshCw size={26} />,
      title: "Future-Ready Ecosystems",
      description:
        "Create smarter, more efficient product ecosystems that scale with your business.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-gray-200">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Label */}
        <p className="text-blue-500 font-semibold uppercase tracking-wider mb-4">
          Our Product
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Introducing{" "}
          <span className="text-blue-500">
            TRUVOH
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-16">
          An integrated Product Lifecycle Management (PLM) platform that manages
          consumer products from the point of sale to end-of-life — built for
          the next generation of AI-enabled products.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl p-8 text-left shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}



// "use client";

// import { Cpu, BarChart3, RefreshCw } from "lucide-react";

// export default function ProductFeatures() {
//   const features = [
//     {
//       icon: <Cpu size={26} />,
//       title: "Smart Device Support",
//       description:
//         "Designed for next-gen AI-enabled products with automated incident reporting.",
//     },
//     {
//       icon: <BarChart3 size={26} />,
//       title: "Full Lifecycle Management",
//       description:
//         "Manage consumer products from point of sale through end-of-life seamlessly.",
//     },
//     {
//       icon: <RefreshCw size={26} />,
//       title: "Future-Ready Ecosystems",
//       description:
//         "Create smarter, more efficient product ecosystems that scale with your business.",
//     },
//   ];

//   return (
//     <section className="w-full bg-gray-100 py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition duration-300"
//             >
//               {/* Icon */}
//               <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500 text-white mb-6">
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }