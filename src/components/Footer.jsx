// "use client";

// import Link from "next/link";
// import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-[#0f172a] to-[#0b1120] 
//                         text-gray-300 
//                         pt-12 sm:pt-14 md:pt-16 
//                         pb-8 
//                         px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Top Section */}
//         <div className="grid 
//                         grid-cols-1 
//                         sm:grid-cols-2 
//                         lg:grid-cols-4 
//                         gap-8 sm:gap-10 md:gap-12">

//           {/* Company Info */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
//               AUXVERA <span className="text-blue-500">TECH</span>
//             </h2>
//             <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
//               Innovating the future with smart technology solutions from Kerala, India.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
//               <li>
//                 <Link href="/" className="hover:text-white transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-white transition">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="hover:text-white transition">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-white transition">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">
//               Services
//             </h3>
//             <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
//               <li className="hover:text-white transition cursor-pointer">
//                 Software Development
//               </li>
//               <li className="hover:text-white transition cursor-pointer">
//                 Cloud Solutions
//               </li>
//               <li className="hover:text-white transition cursor-pointer">
//                 AI & Automation
//               </li>
//               <li className="hover:text-white transition cursor-pointer">
//                 IT Consulting
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">
//               Follow Us
//             </h3>
//             <div className="flex flex-wrap gap-3 sm:gap-4">
//               {[Linkedin, Twitter, Facebook, Instagram].map(
//                 (Icon, index) => (
//                   <div
//                     key={index}
//                     className="w-9 h-9 sm:w-10 sm:h-10 
//                                flex items-center justify-center 
//                                rounded-lg 
//                                border border-gray-700 
//                                hover:bg-blue-600 
//                                hover:border-blue-600 
//                                transition 
//                                cursor-pointer"
//                   >
//                     <Icon size={18} />
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 
//                         mt-10 sm:mt-12 
//                         pt-5 sm:pt-6 
//                         text-center 
//                         text-gray-500 
//                         text-xs sm:text-sm">
//           Copyright © 2026 AUXVERA TECHNOLOGIES PRIVATE LIMITED. 
//           <br className="sm:hidden" />
//           All Rights Reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }



"use client";

import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";



export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#0b1120] 
    text-gray-300 
    pt-10 sm:pt-12 md:pt-14 lg:pt-16 
    pb-6 sm:pb-8 
    px-4 sm:px-6 lg:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4
        gap-6 sm:gap-8 md:gap-10 lg:gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              AUXVERA <span className="text-blue-500">TECH</span>
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base 
            leading-relaxed max-w-sm">
              Innovating the future with smart technology solutions from Kerala, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
              Services
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
              <li className="hover:text-white transition cursor-pointer">
                Software Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Cloud Solutions
              </li>
              <li className="hover:text-white transition cursor-pointer">
                AI & Automation
              </li>
              <li className="hover:text-white transition cursor-pointer">
                IT Consulting
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                  flex items-center justify-center 
                  rounded-lg 
                  border border-gray-700 
                  hover:bg-blue-600 hover:border-blue-600 
                  transition cursor-pointer"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              ))}
            </div>
            
          </div>
           {/* contact section
           <div className=" ">
            <h1 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Contact Us</h1>
           <p className="flex gap-2  items-center">
            <h5><MdEmail /></h5> 
            <h5>Email: info@Auxvera.com</h5>
            </p>
            <p className="flex gap-2 items-center">
            <h5><BiSolidContact /></h5> 
            <h5>contact :1234567890</h5>
            </p>

           </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 
        mt-8 sm:mt-10 md:mt-12 
        pt-4 sm:pt-5 md:pt-6 
        text-center text-gray-500 
        text-[11px] sm:text-xs md:text-sm leading-relaxed">

          © 2026 AUXVERA TECHNOLOGIES PRIVATE LIMITED. 
          <br className="sm:hidden" />
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}