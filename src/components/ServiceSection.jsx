// // // "use client";

// // // import {
// // //   Code,
// // //   Smartphone,
// // //   Cloud,
// // //   Bot,
// // //   Users,
// // //   Layers,
// // // } from "lucide-react";
// // // import { motion } from "framer-motion";

// // // const services = [
// // //   {
// // //     title: "Custom Software Development",
// // //     description:
// // //       "Tailored software solutions built to meet your unique business requirements with modern architectures.",
// // //     icon: Code,
// // //   },
// // //   {
// // //     title: "Web & Mobile App Development",
// // //     description:
// // //       "Engaging, high-performance web and mobile applications that deliver exceptional user experiences.",
// // //     icon: Smartphone,
// // //   },
// // //   {
// // //     title: "Cloud Solutions",
// // //     description:
// // //       "Scalable cloud infrastructure and migration services to optimize costs and boost performance.",
// // //     icon: Cloud,
// // //   },
// // //   {
// // //     title: "AI & Automation Solutions",
// // //     description:
// // //       "Intelligent automation and AI-powered tools that streamline workflows and unlock insights.",
// // //     icon: Bot,
// // //   },
// // //   {
// // //     title: "IT Consulting",
// // //     description:
// // //       "Expert technology consulting to align your IT strategy with business goals and drive growth.",
// // //     icon: Users,
// // //   },
// // //   {
// // //     title: "Digital Transformation",
// // //     description:
// // //       "End-to-end digital transformation services to modernize operations and stay competitive.",
// // //     icon: Layers,
// // //   },
// // // ];

// // // export default function ServicesSection() {
// // //   return (
// // //     <section className="bg-gradient-to-b from-[#0f172a] to-[#0b1120] 
// // //                         py-14 sm:py-16 md:py-20 
// // //                         px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-7xl mx-auto text-center">
        
// // //         {/* Heading */}
// // //         <p className="text-cyan-400 uppercase tracking-widest 
// // //                       text-xs sm:text-sm mb-3">
// // //           What We Do
// // //         </p>

// // //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
// // //                        font-bold text-white leading-tight">
// // //           Our <span className="text-blue-500">Services</span>
// // //         </h2>

// // //         <p className="text-gray-400 mt-4 
// // //                       text-sm sm:text-base 
// // //                       max-w-xl md:max-w-2xl 
// // //                       mx-auto">
// // //           Comprehensive technology services designed to accelerate your business growth.
// // //         </p>

// // //         {/* Cards */}
// // //         <div className="grid 
// // //                         grid-cols-1 
// // //                         sm:grid-cols-2 
// // //                         lg:grid-cols-3 
// // //                         gap-6 sm:gap-8 
// // //                         mt-10 sm:mt-14 md:mt-16">
          
// // //           {services.map((service, index) => {
// // //             const Icon = service.icon;
// // //             return (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ y: 60, opacity: 0 }}
// // //                 whileInView={{ y: 0, opacity: 1 }}
// // //                 transition={{
// // //                   type: "spring",
// // //                   stiffness: 80,
// // //                   damping: 15,
// // //                   delay: index * 0.1,
// // //                 }}
// // //                 viewport={{ once: true, amount: 0.2 }}
// // //                 className="bg-[#111827] 
// // //                            p-6 sm:p-8 
// // //                            rounded-2xl 
// // //                            border border-gray-800 
// // //                            hover:border-blue-500 
// // //                            hover:shadow-lg 
// // //                            hover:-translate-y-1 
// // //                            transition-all duration-300"
// // //               >
// // //                 {/* Icon */}
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 
// // //                                 flex items-center justify-center 
// // //                                 rounded-xl 
// // //                                 bg-gradient-to-r from-blue-500 to-cyan-400 
// // //                                 mb-5 sm:mb-6 
// // //                                 mx-auto">
// // //                   <Icon className="text-white" size={24} />
// // //                 </div>

// // //                 {/* Title */}
// // //                 <h3 className="text-base sm:text-lg md:text-xl 
// // //                                font-semibold text-white 
// // //                                mb-3 sm:mb-4">
// // //                   {service.title}
// // //                 </h3>

// // //                 {/* Description */}
// // //                 <p className="text-gray-400 
// // //                               text-sm sm:text-base 
// // //                               leading-relaxed">
// // //                   {service.description}
// // //                 </p>
// // //               </motion.div>
// // //             );
// // //           })}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

// // export default function WhoWeServe() {
// //   const services = [
// //     {
// //       icon: <FaUsers className="text-2xl text-indigo-600" />,
// //       title: "Consumers",
// //       description:
// //         "People who want a simple and intelligent way to manage electronic devices, warranties, repairs, and resale.",
// //     },
// //     {
// //       icon: <FaStore className="text-2xl text-indigo-600" />,
// //       title: "Service Providers",
// //       description:
// //         "Technicians and repair businesses looking for consistent service opportunities and better service management tools.",
// //     },
// //     {
// //       icon: <FaIndustry className="text-2xl text-indigo-600" />,
// //       title: "Retailers & Manufacturers",
// //       description:
// //         "Businesses that want to improve customer experience and gain insights into device lifecycle data.",
// //     },
// //     {
// //       icon: <FaRecycle className="text-2xl text-indigo-600" />,
// //       title: "Refurbishment & Recycling Partners",
// //       description:
// //         "Organizations that require structured sourcing of used electronic devices for refurbishment or recycling.",
// //     },
// //   ];

// //   return (
// //     <section className="w-full bg-gradient-to-b from-white mt-15 to-slate-100 py-20">
// //       <div className="max-w-7xl mx-auto px-6">
        
// //         {/* Heading */}
// //         <div className="text-center mb-14">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
// //             Who We Serve
// //           </h2>
// //           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
// //             Building a connected ecosystem for everyone in the device lifecycle
// //             journey.
// //           </p>
// //         </div>

// //         {/* Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {services.map((item, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300"
// //             >
// //               <div className="w-14 h-14 mx-auto flex items-center justify-center bg-indigo-100 rounded-xl mb-5">
// //                 {item.icon}
// //               </div>

// //               <h3 className="text-lg font-semibold text-gray-900 mb-3">
// //                 {item.title}
// //               </h3>

// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 {item.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

// export default function ServiceSection() {
//   const services = [
//     {
//       icon: <FaUsers className="text-xl text-indigo-400" />,
//       title: "Consumers",
//       description:
//         "People who want a simple and intelligent way to manage electronic devices, warranties, repairs, and resale.",
//     },
//     {
//       icon: <FaStore className="text-xl text-indigo-400" />,
//       title: "Service Providers",
//       description:
//         "Technicians and repair businesses looking for consistent service opportunities and better service management tools.",
//     },
//     {
//       icon: <FaIndustry className="text-xl text-indigo-400" />,
//       title: "Retailers & Manufacturers",
//       description:
//         "Businesses that want to improve customer experience and gain insights into device lifecycle data.",
//     },
//     {
//       icon: <FaRecycle className="text-xl text-indigo-400" />,
//       title: "Refurbishment & Recycling Partners",
//       description:
//         "Organizations that require structured sourcing of used electronic devices for refurbishment or recycling.",
//     },
//   ];

//   return (
//     <section className="w-full  py-30 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Who We Serve
//           </h2>

//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             Building a connected ecosystem for everyone in the device lifecycle
//             journey.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="relative bg-[#020617] border border-[#1e293b] rounded-2xl p-8 text-center
//               shadow-[0_0_40px_rgba(59,130,246,0.15)]
//               hover:shadow-[0_0_60px_rgba(99,102,241,0.35)]
//               transition duration-300"
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#1e1b4b] rounded-xl mb-6">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white mb-3">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

export default function ServiceSection() {
  const services = [
    {
      icon: <FaUsers className="text-xl text-indigo-400" />,
      title: "Customers",
      description:
        "People who want a simple way to organize electronic products, track warranties, access repairs and sell products when needed.",
    },
    {
      icon: <FaStore className="text-xl text-indigo-400" />,
      title: "Service Providers",
      description:
        "Technicians and repair businesses looking for consistent service opportunities and tools to manage repair workflows.",
    },
    {
      icon: <FaIndustry className="text-xl text-indigo-400" />,
      title: "Retailers & Manufacturers",
      description:"Businesses that want to improve customer experience after product sales and gain bettervisibility into product lifecycle data."
    },
    {
      icon: <FaRecycle className="text-xl text-indigo-400" />,
      title: "Refurb Agents & Recycling Partners",
      description:"Organizations that require structured sourcing of used electronic products for refurbishment or recycling"
    },
  ];

  return (
    <section className="relative w-full py-40 bg-[#020617] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px] pointer-events-none"></div>

      {/* Extra Glow for depth */}
      <div className="absolute bottom-0 right-1/3 w-[700px] h-[350px] bg-purple-600/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
            Who We Serve
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Building a connected ecosystem for everyone in the device lifecycle
            journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className={`group relative text-center rounded-2xl border border-blue-900/40 bg-[linear-gradient(180deg,rgba(10,16,40,0.95),rgba(2,6,23,0.98))] p-8 shadow-[0_0_30px_rgba(37,99,235,0.18),0_18px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(59,130,246,0.28),0_22px_70px_rgba(0,0,0,0.65)]${
                  index === 4 ? "md:col-span-2 xl:col-span-1" : ""
                }`} 
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#1e1b4b] rounded-xl mb-6 ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}