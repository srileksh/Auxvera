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
      path: "/truvoh",
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
          <span className="text-white font-semibold text-lg">Auxvera</span>
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm">
  {navLinks.map((link) => {
    if (link.dropdown) {
      return (
        <div key={link.name} className="relative group cursor-pointer">
          <div className="flex items-center gap-1 text-gray-300 hover:text-white transition">
            {link.name}
            <ChevronDown
              size={16}
              className="transition-transform duration-200 group-hover:rotate-180"
            />
          </div>

          <div
            className="
              absolute left-0 top-full mt-3 w-40
              rounded-[10px] border border-blue-400/20
              bg-gradient-to-b from-[#1f3c88] via-[#1d2f6f] to-[#162454]
              shadow-[0_12px_35px_rgba(15,23,42,0.45)]
              backdrop-blur-md
              opacity-0 invisible translate-y-2
              transition-all duration-200 ease-out
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              overflow-hidden z-50
            "
          >
            {/* <div className="border-b border-blue-400/15 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-blue-200/80"> */}
              {/* {link.name} */}
            {/* </div> */}

            <div className="flex flex-col">
              {link.dropdown.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    block px-4 py-2 text-sm text-center text-blue-50/90
                    transition-all duration-200
                    hover:bg-blue-400/15 hover:text-white
                    ${index !== link.dropdown.length - 1 ? "border-b border-blue-400/15" : ""}
                  `}
                >
                  {item.name}
                </Link>
                
              ))}
            </div>
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
            <div key={link.name} className="flex flex-col">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white transition"
              >
                <span>{link.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productOpen && (
                <div
                  className="
                    mt-3 w-full
                    rounded-xl border border-blue-400/20
                    bg-gradient-to-b from-[#1f3c88] via-[#1d2f6f] to-[#162454]
                    shadow-[0_12px_35px_rgba(15,23,42,0.45)]
                    backdrop-blur-md
                    overflow-hidden
                  "
                >
                  {/* <div className="border-b border-blue-400/15 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-blue-200/80">
                    {link.name}
                  </div> */}

                  <div className="flex flex-col">
                    {link.dropdown.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => {
                          setProductOpen(false);
                          setIsOpen(false);
                        }}
                        className={`block px-4 py-3 text-sm text-center text-blue-50/90 transition-all duration-200 hover:bg-blue-400/15 hover:text-white ${
                          index !== link.dropdown.length - 1
                            ? "border-b border-blue-400/15"
                            : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setIsOpen(false)}
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
