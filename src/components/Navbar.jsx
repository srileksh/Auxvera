// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="bg-gradient-to-r from-[#0f172a] to-[#0b1120] text-white fixed w-full top-0 z-50">
      
//       {/* Container */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
//           AUXVERA <span className="text-blue-500">TECHNOLOGIES</span>
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
//           <li>
//             <Link href="/" className="hover:text-white transition">
//               Home
//             </Link>
//           </li>

//                     <li>
//             <Link
//               href="/truvoh"
//               className="text-blue-500 font-semibold hover:text-white transition"
//             >
//               TRUVOH
//             </Link>
//           </li>


//           <li>
//             <Link href="/about" className="hover:text-white transition">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/whoweserve" className="hover:text-white transition">
//               Who We Serve
//             </Link>
//           </li>


//           <li>
//             <Link href="/whyauxvera" className="hover:text-white transition">
//               Why Auxvera
//             </Link>
//           </li>
//                     <li>
//             <Link href="/ourteam" className="hover:text-white transition">
//               Our Team
//             </Link>
//           </li>


//           <li>
//             <Link href="/contact" className="hover:text-white transition">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#0f172a] border-t border-gray-700">
//           <div className="flex flex-col px-6 py-4 space-y-4 text-gray-300 font-medium">

//             <Link href="/" onClick={closeMenu} className="hover:text-white">
//               Home
//             </Link>

//                         <Link
//               href="/truvoh"
//               onClick={closeMenu}
//               className="text-blue-500 font-semibold"
//             >
//               TRUVOH
//             </Link>


//             <Link href="/about" onClick={closeMenu} className="hover:text-white">
//               About
//             </Link>

//             <Link href="/whoweserve" onClick={closeMenu} className="hover:text-white">
//               Who We Serve
//             </Link>


//             <Link href="/whyauxvera" onClick={closeMenu} className="hover:text-white">
//               Why Auxvera
//             </Link>

//                         <Link
//               href="/ourteam"
//               onClick={closeMenu}
//               className="text-blue-500 font-semibold"
//             >
//               TRUVOH
//             </Link>


//             <Link href="/contact" onClick={closeMenu} className="hover:text-white">
//               Contact
//             </Link>

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
import { Menu, X, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "TRUVOH", path: "/truvoh" },
    { name: "About", path: "/about" },
    { name: "Who We Serve", path: "/who-we-serve" },
    { name: "Why Auxvera", path: "/why-auxvera" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#020617] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold">
            A
          </div>
          <span className="text-white font-semibold text-lg">
            Auxvera
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
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

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Theme Icon */}
          {/* <button className="text-gray-300 hover:text-white">
            <Sun size={20} />
          </button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-t border-gray-800 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
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