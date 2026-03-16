

// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { usePathname } from "next/navigation";
// // import { Menu, X } from "lucide-react";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const pathname = usePathname();

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "TRUVOH", path: "/truvoh" },
// //     { name: "About", path: "/about" },
// //     { name: "Who We Serve", path: "/whoweserve" },
// //     { name: "Why Auxvera", path: "/whyauxvera" },
// //     { name: "Our Team", path: "/ourteam" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   return (

// //     <nav className="w-full fixed top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
// //   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-blue-700/20 bg-[length:200%_200%] animate-gradientMove"></div>

// //   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// //     {/* Logo */}
// //     <div className="flex items-center gap-3">
// //       <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-lg">
// //         A
// //       </div>
// //       <span className="text-white font-semibold text-lg">
// //         Auxvera
// //       </span>
// //     </div>

// //     {/* Desktop Menu */}
// //     <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm">
// //       {navLinks.map((link) => (
// //         <Link
// //           key={link.name}
// //           href={link.path}
// //           className={`transition ${
// //             pathname === link.path
// //               ? "text-blue-400 border-b-2 border-blue-500 pb-1"
// //               : "text-gray-300 hover:text-white"
// //           }`}
// //         >
// //           {link.name}
// //         </Link>
// //       ))}
// //     </div>

// //     {/* Mobile Button */}
// //     <button
// //       onClick={() => setIsOpen(!isOpen)}
// //       className="md:hidden text-white"
// //     >
// //       {isOpen ? <X size={26} /> : <Menu size={26} />}
// //     </button>

// //   </div>
// // </nav>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/truvoh" },
//     { name: "About", path: "/about" },
//     { name: "Who We Serve", path: "/whoweserve" },
//     { name: "Why Auxvera", path: "/whyauxvera" },
//     { name: "Our Team", path: "/ourteam" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full fixed top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
      
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-blue-700/20 bg-[length:200%_200%] animate-gradientMove"></div>

//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-lg">
//             A
//           </div>
//           <span className="text-white font-semibold text-lg">
//             Auxvera
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               className={`transition ${
//                 pathname === link.path
//                   ? "text-blue-400 border-b-2 border-blue-500 pb-1"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-950 border-t border-slate-800">
//           <div className="flex flex-col px-6 py-4 space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-sm ${
//                   pathname === link.path
//                     ? "text-blue-400"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path:"/truvoh",
      dropdown: [
        { name: "Truvoh", path: "/truvoh" },
        // { name: "Analytics Suite", path: "/analytics" },
        // { name: "Automation Tools", path: "/automation" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Who We Serve", path: "/whoweserve" },
    { name: "Why Auxvera", path: "/whyauxvera" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-blue-700/20 bg-[length:200%_200%] animate-gradientMove"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-lg">
            A
          </div>
          <span className="text-white font-semibold text-lg">
            Auxvera
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm">

          {navLinks.map((link) => {

            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group cursor-pointer">

                  {/* <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                    {link.name}
                    <ChevronDown size={16} />
                  </button> */}
<div className="flex items-center gap-1 text-gray-300 hover:text-white transition">
  {link.name}
  <ChevronDown size={16} />
</div>
                  {/* Dropdown */}
                  {/* <div className="absolute left-0 mt-3 w-44 bg-slate-900 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200"> */}
<div className="absolute left-0 top-full w-44 bg-slate-900 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-gray-300 hover:bg-slate-800 hover:text-white text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </div>

                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="flex flex-col px-6 py-4 space-y-4">

            {navLinks.map((link) => {

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative" >

                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className="flex justify-between w-full text-gray-300"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </button>

                    {productOpen && (
                      // <div className="pl-4 mt-2 flex flex-col space-y-2">
          <div className="absolute left-0 top-full mt-2 w-44 bg-slate-900 border border-slate-700 rounded-lg shadow-lg">

                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setProductOpen(false)}
                            className="text-gray-400 hover:text-white text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}

                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  // key={link.name}
                  // href={link.path}
                  // onClick={() => setIsOpen(false)}
                  // className="text-gray-300 hover:text-white text-sm"
                        key={link.name}
      href={link.path}
      className={`transition ${
        pathname === link.path
          ? "text-blue-400 border-b-2 border-blue-500 pb-1"
          : "text-gray-300 hover:text-white"
      }`}

                >
                  {link.name}
                </Link>
              );
            })}

          </div>
        </div>
      )}
    </nav>
  );
}