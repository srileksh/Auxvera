

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
//     { name: "TRUVOH", path: "/truvoh" },
//     { name: "About", path: "/about" },
//     { name: "Who We Serve", path: "/whoweserve" },
//     { name: "Why Auxvera", path: "/whyauxvera" },
//     { name: "Our Team", path: "/ourteam" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (

//     <nav className="w-full fixed top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
//   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-blue-700/20 bg-[length:200%_200%] animate-gradientMove"></div>

//   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//     {/* Logo */}
//     <div className="flex items-center gap-3">
//       <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-lg">
//         A
//       </div>
//       <span className="text-white font-semibold text-lg">
//         Auxvera
//       </span>
//     </div>

//     {/* Desktop Menu */}
//     <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm">
//       {navLinks.map((link) => (
//         <Link
//           key={link.name}
//           href={link.path}
//           className={`transition ${
//             pathname === link.path
//               ? "text-blue-400 border-b-2 border-blue-500 pb-1"
//               : "text-gray-300 hover:text-white"
//           }`}
//         >
//           {link.name}
//         </Link>
//       ))}
//     </div>

//     {/* Mobile Button */}
//     <button
//       onClick={() => setIsOpen(!isOpen)}
//       className="md:hidden text-white"
//     >
//       {isOpen ? <X size={26} /> : <Menu size={26} />}
//     </button>

//   </div>
// </nav>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "TRUVOH", path: "/truvoh" },
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
          {navLinks.map((link) => (
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
          ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm ${
                  pathname === link.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}