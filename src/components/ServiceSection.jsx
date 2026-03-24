// "use client";

// import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

// export default function ServiceSection() {
//   const services = [
//     {
//       icon: <FaUsers className="text-xl text-indigo-400" />,
//       title: "Customers",
//       description:
//         "People who want a simple way to organize electronic products, track warranties, access repairs and sell products when needed.",
//     },
//     {
//       icon: <FaStore className="text-xl text-indigo-400" />,
//       title: "Service Providers",
//       description:
//         "Technicians and repair businesses looking for consistent service opportunities and tools to manage repair workflows.",
//     },
//     {
//       icon: <FaIndustry className="text-xl text-indigo-400" />,
//       title: "Retailers & Manufacturers",
//       description:"Businesses that want to improve customer experience after product sales and gain better visibility into product lifecycle data."
//     },
//     {
//       icon: <FaRecycle className="text-xl text-indigo-400" />,
//       title: "Refurb Agents & Recycling Partners",
//       description:"Organizations that require structured sourcing of used electronic products for refurbishment or recycling"
//     },
//   ];

//   return (
//     <section className="relative w-full py-40 bg-[#020617] overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px] pointer-events-none"></div>

//       {/* Extra Glow for depth */}
//       <div className="absolute bottom-0 right-1/3 w-[700px] h-[350px] bg-purple-600/10 blur-[120px] pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-12 2xl:px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
//             Who We Serve
//           </h2>

//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             Building a connected ecosystem for everyone in the device lifecycle
//             journey.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">

//           {services.map((item, index) => (
//             <div
//               key={index}
//               className={`group relative text-center rounded-2xl border border-blue-900/40 bg-[linear-gradient(180deg,rgba(10,16,40,0.95),rgba(2,6,23,0.98))] p-8 shadow-[0_0_30px_rgba(37,99,235,0.18),0_18px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(59,130,246,0.28),0_22px_70px_rgba(0,0,0,0.65)]${
//                   index === 4 ? "md:col-span-2 xl:col-span-1" : ""
//                 }`} 
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#1e1b4b] rounded-xl mb-6 ">
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
      icon: <FaUsers className="text-lg sm:text-xl text-indigo-400" />,
      title: "Customers",
      description:
        "Organize products, track warranties, access repairs, and sell when needed.",
    },
    {
      icon: <FaStore className="text-lg sm:text-xl text-indigo-400" />,
      title: "Service Providers",
      description:
        "Get consistent repair opportunities and tools to manage workflows.",
    },
    {
      icon: <FaIndustry className="text-lg sm:text-xl text-indigo-400" />,
      title: "Retailers & Manufacturers",
      description:
        "Improve customer experience and gain lifecycle insights.",
    },
    {
      icon: <FaRecycle className="text-lg sm:text-xl text-indigo-400" />,
      title: "Refurb & Recycling Partners",
      description:
        "Source used electronics efficiently for refurbishment or recycling.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-32 bg-[#020617] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      {/* Extra Glow */}
      <div className="absolute bottom-0 right-1/3 w-[400px] sm:w-[600px] md:w-[700px] h-[200px] sm:h-[280px] md:h-[350px] bg-purple-600/10 blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Who We Serve
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-xl md:max-w-2xl mx-auto">
            Building a connected ecosystem for everyone in the device lifecycle journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 xl:gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="group relative text-center rounded-2xl border border-blue-900/40 
              bg-[linear-gradient(180deg,rgba(10,16,40,0.95),rgba(2,6,23,0.98))]
              p-5 sm:p-6 md:p-8
              shadow-[0_0_20px_rgba(37,99,235,0.15),0_12px_40px_rgba(0,0,0,0.5)]
              transition-all duration-300
              hover:-translate-y-1 sm:hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(59,130,246,0.25),0_18px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto flex items-center justify-center bg-[#1e1b4b] rounded-xl mb-4 sm:mb-5 md:mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white mb-2 sm:mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}