




// "use client";

// import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

// export default function ServiceSection() {
//   const services = [
//     {
//       icon: <FaUsers className="text-lg sm:text-xl text-indigo-400" />,
//       title: "Customers",
//       description:
//         "Organize products, track warranties, access repairs, and sell when needed.",
//     },
//     {
//       icon: <FaStore className="text-lg sm:text-xl text-indigo-400" />,
//       title: "Service Providers",
//       description:
//         "Get consistent repair opportunities and tools to manage workflows.",
//     },
//     {
//       icon: <FaIndustry className="text-lg sm:text-xl text-indigo-400" />,
//       title: "Retailers & Manufacturers",
//       description:
//         "Improve customer experience and gain lifecycle insights.",
//     },
//     {
//       icon: <FaRecycle className="text-lg sm:text-xl text-indigo-400" />,
//       title: "Refurb & Recycling Partners",
//       description:
//         "Source used electronics efficiently for refurbishment or recycling.",
//     },
//   ];

//   return (
//     <section className="relative w-full py-16 sm:py-20 md:py-32 bg-[#020617] overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] sm:blur-[120px] pointer-events-none"></div>

//       {/* Extra Glow */}
//       <div className="absolute bottom-0 right-1/3 w-[400px] sm:w-[600px] md:w-[700px] h-[200px] sm:h-[280px] md:h-[350px] bg-purple-600/10 blur-[100px] sm:blur-[120px] pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-14 md:mb-16 px-2">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
//             Who We Serve
//           </h2>

//           <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-xl md:max-w-2xl mx-auto">
//             Building a connected ecosystem for everyone in the device lifecycle journey.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 xl:gap-10">

//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="group relative text-center rounded-2xl border border-blue-900/40 
//               bg-[linear-gradient(180deg,rgba(10,16,40,0.95),rgba(2,6,23,0.98))]
//               p-5 sm:p-6 md:p-8
//               shadow-[0_0_20px_rgba(37,99,235,0.15),0_12px_40px_rgba(0,0,0,0.5)]
//               transition-all duration-300
//               hover:-translate-y-1 sm:hover:-translate-y-2
//               hover:shadow-[0_0_40px_rgba(59,130,246,0.25),0_18px_60px_rgba(0,0,0,0.6)]"
//             >
//               {/* Icon */}
//               <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto flex items-center justify-center bg-[#1e1b4b] rounded-xl mb-4 sm:mb-5 md:mb-6">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white mb-2 sm:mb-3">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

// export default function ServiceSection() {
//   const services = [
//     {
//       icon: <FaUsers className="text-lg text-[var(--av-primary)] sm:text-xl" />,
//       title: "Customers",
//       description:
//         "Organize products, track warranties, access repairs, and sell when needed.",
//     },
//     {
//       icon: <FaStore className="text-lg text-[var(--av-primary)] sm:text-xl" />,
//       title: "Service Providers",
//       description:
//         "Get consistent repair opportunities and tools to manage workflows.",
//     },
//     {
//       icon: <FaIndustry className="text-lg text-[var(--av-primary)] sm:text-xl" />,
//       title: "Retailers & Manufacturers",
//       description:
//         "Improve customer experience and gain lifecycle insights.",
//     },
//     {
//       icon: <FaRecycle className="text-lg text-[var(--av-primary)] sm:text-xl" />,
//       title: "Refurb & Recycling Partners",
//       description:
//         "Source used electronics efficiently for refurbishment or recycling.",
//     },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[var(--av-surface-soft)] py-16 sm:py-20 md:py-32">
//       <div className="absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-[var(--av-primary)]/10 blur-[100px] pointer-events-none sm:h-[300px] sm:w-[700px] sm:blur-[120px] md:h-[400px] md:w-[900px]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-6">
//         <div className="mb-10 px-2 text-center sm:mb-14 md:mb-16">
//           {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--av-accent)]">
//             Ecosystem
//           </p> */}

//           <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl xl:text-5xl">
//             Who We Serve
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400 sm:mt-4 sm:text-base md:max-w-2xl">
//             Building a connected ecosystem for everyone in the device lifecycle
//             journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4 xl:gap-10">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:bg-white/[0.06] hover:shadow-[0_22px_70px_rgba(239,59,45,0.12)] sm:p-6 md:p-8"
//             >
//               <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--av-primary-soft)] sm:mb-5 sm:h-12 sm:w-12 md:mb-6 md:h-14 md:w-14">
//                 {item.icon}
//               </div>

//               <h3 className="mb-2 text-base font-semibold text-white sm:mb-3 sm:text-lg">
//                 {item.title}
//               </h3>

//               <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
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
      icon: <FaUsers className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Customers",
      description:
        "Organize products, track warranties, access repairs, and sell when needed.",
    },
    {
      icon: <FaStore className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Service Providers",
      description:
        "Get consistent repair opportunities and tools to manage workflows.",
    },
    {
      icon: <FaIndustry className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Retailers & Manufacturers",
      description:
        "Improve customer experience and gain lifecycle insights.",
    },
    {
      icon: <FaRecycle className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Refurb & Recycling Partners",
      description:
        "Source used electronics efficiently for refurbishment or recycling.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[var(--av-surface-soft)] py-16 sm:py-20 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-[var(--av-primary)]/10 blur-[100px] sm:h-[300px] sm:w-[700px] sm:blur-[120px] md:h-[400px] md:w-[900px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-12">
        <div className="mb-10 px-2 text-center sm:mb-14 md:mb-16">
          <h2 className="text-2xl font-bold leading-tight text-[var(--av-text)] sm:text-3xl md:text-4xl xl:text-5xl">
            Who We Serve
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--av-muted)] sm:mt-4 sm:text-base md:max-w-2xl">
            Building a connected ecosystem for everyone in the device lifecycle
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4 xl:gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[var(--av-border)] bg-white p-5 text-center shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:shadow-[0_22px_70px_rgba(239,59,45,0.12)] sm:p-6 md:p-8"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--av-primary-soft)] sm:mb-5 sm:h-12 sm:w-12 md:mb-6 md:h-14 md:w-14">
                {item.icon}
              </div>

              <h3 className="mb-2 text-base font-semibold text-[var(--av-text)] sm:mb-3 sm:text-lg">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-[var(--av-muted)] sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}