// "use client";

// import { Calendar, Hash, MapPin, Activity } from "lucide-react";
// import { motion } from "framer-motion";

// export default function CompanyInfo() {
//   const details = [
//     {
//       icon: <Calendar size={26} />,
//       label: "INCORPORATION DATE",
//       value: "December 15, 2025",
//     },
//     {
//       icon: <Hash size={26} />,
//       label: "CIN",
//       value: "U62010KL2025PTC099229",
//     },
//     {
//       icon: <MapPin size={26} />,
//       label: "LOCATION",
//       value: "Kerala, India",
//     },
//     {
//       icon: <Activity size={26} />,
//       label: "STATUS",
//       value: "Active",
//     },
//   ];

//   return (
//     <section className="w-full mt-16 py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0f1b2d] to-[#1b2a44]">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Title */}
//         <p className="text-cyan-400 text-sm sm:text-base font-semibold tracking-wide uppercase mb-3">
//           Company Information
//         </p>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16 leading-tight">
//           Corporate <span className="text-blue-400">Details</span>
//         </h2>

//         {/* Cards */}
//         <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

//           {details.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ scale: 0.85, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15,
//                 delay: index * 0.1,
//               }}
//               viewport={{ once: true, amount: 0.2 }}
//               className="bg-[#1e2a40] border border-blue-500/20 rounded-2xl p-6 sm:p-8 text-center hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className="flex justify-center text-blue-400 mb-4">
//                 {item.icon}
//               </div>

//               {/* Label */}
//               <p className="text-gray-400 text-xs sm:text-sm tracking-wide mb-2">
//                 {item.label}
//               </p>

//               {/* Value */}
//               <p className="text-white font-semibold text-base sm:text-lg md:text-xl break-words">
//                 {item.value}
//               </p>
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { Calendar, Hash, MapPin, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyInfo() {
  const details = [
    {
      icon: <Calendar size={22} />,
      label: "INCORPORATION DATE",
      value: "December 15, 2025",
    },
    {
      icon: <Hash size={22} />,
      label: "CIN",
      value: "U62010KL2025PTC099229",
    },
    {
      icon: <MapPin size={22} />,
      label: "LOCATION",
      value: "Kerala, India",
    },
    {
      icon: <Activity size={22} />,
      label: "STATUS",
      value: "Active",
    },
  ];

  return (
    <section className="w-full mt-10 sm:mt-14 md:mt-16 
    py-12 sm:py-16 md:py-20 lg:py-24 
    px-4 sm:px-6 lg:px-12 
    bg-gradient-to-r from-[#0f1b2d] to-[#1b2a44]">

      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <p className="text-cyan-400 text-xs sm:text-sm md:text-base 
        font-semibold tracking-wider uppercase mb-2 sm:mb-3">
          Company Information
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
        font-bold text-white mb-8 sm:mb-10 md:mb-14 leading-tight px-2">
          Corporate <span className="text-blue-400">Details</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-4 sm:gap-6 md:gap-8">

          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#1e2a40] border border-blue-500/20 
              rounded-xl sm:rounded-2xl 
              p-4 sm:p-6 md:p-8 
              text-center 
              hover:border-blue-400 
              hover:shadow-lg 
              hover:-translate-y-1 sm:hover:-translate-y-2 
              transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center text-blue-400 mb-3 sm:mb-4">
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-gray-400 
              text-[10px] sm:text-xs md:text-sm 
              tracking-wide mb-1 sm:mb-2">
                {item.label}
              </p>

              {/* Value */}
              <p className="text-white font-semibold 
              text-sm sm:text-base md:text-lg lg:text-xl 
              break-words">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}