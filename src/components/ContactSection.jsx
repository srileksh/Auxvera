
// "use client";

// import { Mail, ArrowRight } from "lucide-react";

// export default function ContactAuxveraSection() {
//   return (
//     <section className="bg-[#0c1634]  py-16 px-12 sm:py-20 md:px-10 lg:px-16 xl:px-24 max-h-full  min-h-screen grid place-items-center">
//       {/* <div className="mx-auto max-w-7xl rounded-[24px] border border-blue-900/40 bg-[linear-gradient(180deg,rgba(10,16,40,0.95),rgba(2,6,23,0.98)) px-4 py-12 shadow-2xl sm:rounded-[28px] sm:px-6 sm:py-14 md:px-10 md:py-16 lg:rounded-[32px] lg:px-16 lg:py-20 xl:px-20 xl:py-24"> */}
//       <div className="w-full text-center">
//         <div className=" mx-auto  max-w-4xl text-center">
//           {/* Icon */}
//           <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#dcd8f3] shadow-sm sm:mb-8 sm:h-16 sm:w-16 sm:rounded-[20px] md:h-[72px] md:w-[72px]">
//             <Mail className="h-7 w-7 text-[#3f57d8] sm:h-8 sm:w-8 md:h-9 md:w-9" strokeWidth={2} />
//           </div>

//           {/* Heading */}
//           <h2 className="text-2xl font-bold tracking-tight text-[#ffffff] sm:text-3xl md:text-4xl xl:text-5xl">
//             Contact <span className="text-[#4459dd]">Auxvera Technologies</span>
//           </h2>

//           {/* Description */}
//           <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#616777] sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-snug">
//             Interested in partnerships, integrations or early access to Truvoh?
//             Get in touch with us and be the first to experience the future of
//             product lifecycle management.
//           </p>

//           {/* Email Form */}
//           <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:flex-row md:items-center md:justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="h-[50px] w-full rounded-2xl border border-[#dfe3ee] bg-[#dcd8f3] px-4 text-[15px] text-[#111827] outline-none placeholder:text-[#6b7280] shadow-sm sm:px-5 sm:text-[16px] md:h-[52px] md:flex-1"
//             />

//             <button className="flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#4459dd_0%,#5d2ecb_100%)] px-6 text-[15px] font-semibold text-white shadow-[0_16px_30px_rgba(84,74,220,0.28)] transition hover:scale-[1.02] sm:text-[16px] md:h-[52px] md:w-auto md:px-8">
//               <span>Request Access</span>
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Contact Info */}
//           <div className="mt-6 space-y-2 text-sm text-[#666c7a] sm:mt-8 sm:text-[16px]">
//             {/* <p className="break-words">
//               Email:{" "}
//               <a
//                 href="mailto:contact@auxvera.com"
//                 className="font-medium text-[#4459dd] hover:underline"
//               >
//                 info@auxvera.com
//               </a>
//             </p>

//             <p className="break-words">
//               Website:{" "}
//               <a
//                 href="https://www.auxvera.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-medium text-[#4459dd] hover:underline"
//               >
//                 www.auxvera.com
//               </a>
//             </p> */}
//           </div>
//         </div>
//       {/* </div> */}
//       </div>
//     </section>
//   );
// }




// "use client";

// import { Mail, ArrowRight } from "lucide-react";
// import { BiSolidContact } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";


// export default function ContactAuxveraSection() {
//   return (
//     <section className="bg-[#0c1634] 
//     py-12 sm:py-16 md:py-20 
//     px-4 sm:px-6 lg:px-12 xl:px-20 
//     min-h-[80vh] flex items-center mt-10">

//       <div className="w-full text-center max-w-5xl mx-auto">

//         {/* Icon */}
//         <div className="mx-auto mb-5 sm:mb-6 md:mb-8 
//         flex h-12 w-12 sm:h-14 sm:w-14 md:h-[72px] md:w-[72px] 
//         items-center justify-center rounded-xl sm:rounded-2xl 
//         bg-[#dcd8f3] shadow-sm">
//           <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 text-[#3f57d8]" />
//         </div>

//         {/* Heading */}
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
//         font-bold tracking-tight text-white leading-tight px-2">
//           Contact{" "}
//           <span className="text-[#4459dd]">Auxvera Technologies</span>
//         </h2>

//         {/* Description */}
//         <p className="mx-auto mt-3 sm:mt-4 md:mt-5 
//         max-w-xl sm:max-w-2xl md:max-w-3xl 
//         text-xs sm:text-sm md:text-base lg:text-lg 
//         leading-relaxed text-[#9aa3b2] px-2">
//           Interested in partnerships, integrations or early access to Truvoh?
//           Get in touch and be among the first to experience the future of
//           product lifecycle management.
//         </p>

//         {/* contact section */}
//            <div className="pt-10 ">
//             <h1 className="text-gray-300 font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Contact Us</h1>
//            <p className="flex gap-2  items-center justify-center text-gray-400">
//             <h5><MdEmail /></h5> 
//             <h5>Email: info@Auxvera.com</h5>
//             </p>
//             <p className="flex gap-2 items-center justify-center text-gray-400">
//             <h5><BiSolidContact /></h5> 
//             <h5>contact :1234567890</h5>
//             </p>

//            </div>

//         {/* Optional Contact Info */}
//         <div className="mt-5 sm:mt-6 md:mt-8 
//         space-y-1 sm:space-y-2 
//         text-xs sm:text-sm md:text-base 
//         text-[#8b93a3]">
//           {/* Example:
//           <p>
//             Email:{" "}
//             <a href="mailto:info@auxvera.com" className="text-[#4459dd] hover:underline">
//               info@auxvera.com
//             </a>
//           </p>
//           */}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { Mail } from "lucide-react";
import { BiSolidContact } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function ContactAuxveraSection() {
  return (
    <section
      className="
        min-h-screen w-full
        bg-[#0c1634]
        flex items-center justify-center
        px-4 sm:px-6 lg:px-12 xl:px-20
        py-10 sm:py-12
      "
    >
      <div className="w-full max-w-3xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 sm:mb-8 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#dcd8f3] shadow-sm">
          <Mail className="h-7 w-7 sm:h-9 sm:w-9 text-[#3f57d8]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Contact{" "}
          <span className="text-[#4459dd]">Auxvera Technologies</span>
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#9aa3b2] max-w-2xl mx-auto">
          Interested in partnerships, integrations or early access to Truvoh?
          Get in touch and be among the first to experience the future of
          product lifecycle management.
        </p>

        {/* Contact Card */}
        <div className="mt-5">
          
          
          {/* Email */}
          {/* <div className="flex items-center justify-center gap-2 text-gray-400 text-sm sm:text-base mb-3">
            <MdEmail className="text-lg" />
            <span>Email: info@auxvera.com</span>
          </div> */}
           <div className="mt-8 flex justify-center md:mt-10">
            <a
              href="mailto:info@auxvera.com"
              className="group inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-[#4f6cff]/40 hover:bg-white/10 hover:text-white sm:px-6 sm:text-base"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-[#4f6cff]/20">
                <Mail className="h-4 w-4 text-[#90a4ff]" />
              </span>
              <span className="break-all sm:break-normal">
                <span className="mr-1 text-slate-400">Email:</span>
                info@auxvera.com
              </span>
            </a>
          </div>

          {/* Phone */}
          {/* <div className="flex items-center justify-center gap-2 text-gray-400 text-sm sm:text-base">
            <BiSolidContact className="text-lg" />
            <span>Contact: 1234567890</span>
          </div> */}
        </div>

      </div>
    </section>
  );
}

