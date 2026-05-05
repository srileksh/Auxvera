// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { usePathname } from "next/navigation";
// // import { Menu, X, ChevronDown } from "lucide-react";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [productOpen, setProductOpen] = useState(false);
// //   const pathname = usePathname();

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     {
// //       name: "Products",
// //       path: "/truvoh",
// //       dropdown: [
// //         { name: "Truvoh", path: "/truvoh" },
       
// //       ],
// //     },
// //     { name: "About", path: "/about" },
// //     { name: "Who We Serve", path: "/whoweserve" },
// //     { name: "Why Auxvera", path: "/whyauxvera" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   return (
// //     <nav className="w-full fixed top-0 z-50 bg-white backdrop-blur-xl border-b border-slate-800">
// //       {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-blue-700/20 bg-[length:200%_200%] animate-gradientMove"></div> */}

// //       <div className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
// //         {/* Logo */}
// //         <div className="flex items-center gap-3">
// //             <div className="w-50 h-9 flex items-center justify-center"> 
// //            <img src="/Auxvera Logo.png" className="" />
// //           </div>
// //           {/* <span className="text-white font-semibold text-lg">Auxvera</span>  */}
         
// //         </div>


// // <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm">
// //   {navLinks.map((link) => {
// //     if (link.dropdown) {
// //       return (
// //         <div key={link.name} className="relative">
          
// //           {/* CLICK BUTTON */}
// //           <button
// //             onClick={() => setProductOpen(!productOpen)}
// //             className="flex items-center gap-1 text-gray-300 hover:text-white transition"
// //           >
// //             {link.name}
// //             <ChevronDown
// //               size={16}
// //               className={`transition-transform duration-200 ${
// //                 productOpen ? "rotate-180" : ""
// //               }`}
// //             />
// //           </button>

// //           {/* DROPDOWN */}
// //           <div
// //             className={`
// //               absolute left-0 top-full mt-3 w-40
// //               rounded-[10px] border border-blue-400/20
// //               bg-gradient-to-b from-[#1f3c88] via-[#1d2f6f] to-[#162454]
// //               shadow-[0_12px_35px_rgba(15,23,42,0.45)]
// //               backdrop-blur-md
// //               transition-all duration-200 ease-out
// //               overflow-hidden z-50
// //               ${
// //                 productOpen
// //                   ? "opacity-100 visible translate-y-0"
// //                   : "opacity-0 invisible translate-y-2"
// //               }
// //             `}
// //           >
// //             <div className="flex flex-col">
// //               {link.dropdown.map((item, index) => (
// //                 <Link
// //                   key={item.name}
// //                   href={item.path}
// //                   onClick={() => setProductOpen(false)}
// //                   className={`
// //                     block px-4 py-2 text-sm text-center text-blue-50/90
// //                     transition-all duration-200
// //                     hover:bg-blue-400/15 hover:text-white
// //                     ${
// //                       index !== link.dropdown.length - 1
// //                         ? "border-b border-blue-400/15"
// //                         : ""
// //                     }
// //                   `}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <Link
// //         key={link.name}
// //         href={link.path}
// //         className={`transition ${
// //           pathname === link.path
// //             ? "text-blue-400 border-b-2 border-blue-500 pb-1"
// //             : "text-gray-300 hover:text-white"
// //         }`}
// //       >
// //         {link.name}
// //       </Link>
// //     );
// //   })}
// // </div>

// //         {/* Mobile Button */}
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="md:hidden text-white"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}

// //       {isOpen && (
// //   <div className="md:hidden bg-slate-950 border-t border-slate-800">
// //     <div className="flex flex-col px-6 py-4 space-y-4">
// //       {navLinks.map((link) => {
// //         if (link.dropdown) {
// //           return (
// //             <div key={link.name} className="flex flex-col">
// //               <button
// //                 onClick={() => setProductOpen(!productOpen)}
// //                 className="flex items-center justify-between w-full text-gray-300 hover:text-white transition"
// //               >
// //                 <span>{link.name}</span>
// //                 <ChevronDown
// //                   size={16}
// //                   className={`transition-transform duration-200 ${
// //                     productOpen ? "rotate-180" : ""
// //                   }`}
// //                 />
// //               </button>

// //               {productOpen && (
// //                 <div
// //                   className="
// //                     mt-3 w-full
// //                     rounded-xl border border-blue-400/20
// //                     bg-gradient-to-b from-[#1f3c88] via-[#1d2f6f] to-[#162454]
// //                     shadow-[0_12px_35px_rgba(15,23,42,0.45)]
// //                     backdrop-blur-md
// //                     overflow-hidden
// //                   "
// //                 >
                  
// //                   <div className="flex flex-col">
// //                     {link.dropdown.map((item, index) => (
// //                       <Link
// //                         key={item.name}
// //                         href={item.path}
// //                         onClick={() => {
// //                           setProductOpen(false);
// //                           setIsOpen(false);
// //                         }}
// //                         className={`block px-4 py-3 text-sm text-center text-blue-50/90 transition-all duration-200 hover:bg-blue-400/15 hover:text-white ${
// //                           index !== link.dropdown.length - 1
// //                             ? "border-b border-blue-400/15"
// //                             : ""
// //                         }`}
// //                       >
// //                         {item.name}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           );
// //         }

// //         return (
// //           <Link
// //             key={link.name}
// //             href={link.path}
// //             onClick={() => setIsOpen(false)}
// //             className={`transition ${
// //               pathname === link.path
// //                 ? "text-blue-400 border-b-2 border-blue-500 pb-1"
// //                 : "text-gray-300 hover:text-white"
// //             }`}
// //           >
// //             {link.name}
// //           </Link>
// //         );
// //       })}
// //     </div>
// //   </div>
// // )}
// //     </nav>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [productOpen, setProductOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     {
//       name: "Products",
//       path: "/truvoh",
//       dropdown: [{ name: "Truvoh", path: "/truvoh" }],
//     },
//     { name: "About", path: "/about" },
//     { name: "Who We Serve", path: "/whoweserve" },
//     { name: "Why Auxvera", path: "/whyauxvera" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 z-50 w-full  bg-[var(--av-dark)] ">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 ">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-12 w-56 items-center justify-start">
//             <img
//               src="/Auxvera Logo.png"
//               alt="Auxvera"
//               className="h-full w-full object-contain"
//             />
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden items-center gap-5 text-sm lg:gap-8 md:flex">
//           {navLinks.map((link) => {
//             if (link.dropdown) {
//               return (
//                 <div key={link.name} className="relative ">
//                   <button
//                     onClick={() => setProductOpen(!productOpen)}
//                     className="flex items-center gap-1 font-medium text-[var(--av-dark)] transition hover:text-[var(--av-primary)]"
//                   >
//                     {link.name}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200 ${
//                         productOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`absolute left-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-2xl border border-[var(--av-border)] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out ${
//                       productOpen
//                         ? "visible translate-y-0 opacity-100"
//                         : "invisible translate-y-2 opacity-0"
//                     }`}
//                   >
//                     <div className="flex flex-col">
//                       {link.dropdown.map((item, index) => (
//                         <Link
//                           key={item.name}
//                           href={item.path}
//                           onClick={() => setProductOpen(false)}
//                           className={`block px-4 py-3 text-center text-sm font-medium text-[var(--av-muted)] transition hover:bg-[var(--av-primary-soft)] hover:text-[var(--av-primary)] ${
//                             index !== link.dropdown.length - 1
//                               ? "border-b border-[var(--av-border)]"
//                               : ""
//                           }`}
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             }

//             return (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className={`font-medium transition ${
//                   pathname === link.path
//                     ? "border-b-2 border-[var(--av-primary)] pb-1 text-[var(--av-primary)]"
//                     : "text-[var(--av-dark)] hover:text-[var(--av-primary)]"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-[var(--av-text)] md:hidden"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="border-t border-[var(--av-border)] bg-white md:hidden">
//           <div className="flex flex-col space-y-4 px-6 py-4">
//             {navLinks.map((link) => {
//               if (link.dropdown) {
//                 return (
//                   <div key={link.name} className="flex flex-col">
//                     <button
//                       onClick={() => setProductOpen(!productOpen)}
//                       className="flex w-full items-center justify-between font-medium text-[var(--av-muted)] transition hover:text-[var(--av-primary)]"
//                     >
//                       <span>{link.name}</span>
//                       <ChevronDown
//                         size={16}
//                         className={`transition-transform duration-200 ${
//                           productOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>

//                     {productOpen && (
//                       <div className="mt-3 w-full overflow-hidden rounded-xl border border-[var(--av-border)] bg-[var(--av-bg)]">
//                         <div className="flex flex-col">
//                           {link.dropdown.map((item, index) => (
//                             <Link
//                               key={item.name}
//                               href={item.path}
//                               onClick={() => {
//                                 setProductOpen(false);
//                                 setIsOpen(false);
//                               }}
//                               className={`block px-4 py-3 text-center text-sm font-medium text-[var(--av-muted)] transition hover:bg-[var(--av-primary-soft)] hover:text-[var(--av-primary)] ${
//                                 index !== link.dropdown.length - 1
//                                   ? "border-b border-[var(--av-border)]"
//                                   : ""
//                               }`}
//                             >
//                               {item.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`font-medium transition ${
//                     pathname === link.path
//                       ? "border-b-2 border-[var(--av-primary)] pb-1 text-[var(--av-primary)]"
//                       : "text-[var(--av-muted)] hover:text-[var(--av-primary)]"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
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
      dropdown: [{ name: "Truvoh", path: "/truvoh" }],
    },
    { name: "About", path: "/about" },
    { name: "Who We Serve", path: "/whoweserve" },
    { name: "Why Auxvera", path: "/whyauxvera" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[var(--av-dark)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-45  items-center justify-start">
            <img
              src="/Auxvera Logo-03.jpg"
              alt="Auxvera"
              className="h-full w-full object-contain bg-[var(--av-gradient-dark)] "
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 text-sm md:flex lg:gap-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setProductOpen(!productOpen)}
                    className="flex items-center gap-1 font-medium text-[var(--av-light-text)] transition hover:text-[var(--av-primary)]"
                  >
                    {link.name}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        productOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-2xl border border-[var(--av-border)] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out ${
                      productOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col">
                      {link.dropdown.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setProductOpen(false)}
                          className={`block px-4 py-3 text-center text-sm font-medium text-[var(--av-muted)] transition hover:bg-[var(--av-primary-soft)] hover:text-[var(--av-primary)] ${
                            index !== link.dropdown.length - 1
                              ? "border-b border-[var(--av-border)]"
                              : ""
                          }`}
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
                className={`font-medium transition ${
                  pathname === link.path
                    ? "border-b-2 border-[var(--av-primary)] pb-1 text-[var(--av-primary)]"
                    : "text-[var(--av-light-text)] hover:text-[var(--av-primary)]"
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
          className="text-[var(--av-light-text)] md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[var(--av-border-dark)] bg-[var(--av-dark)] md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className="flex w-full items-center justify-between font-medium text-[var(--av-light-text)] transition hover:text-[var(--av-primary)]"
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
                      <div className="mt-3 w-full overflow-hidden rounded-xl border border-[var(--av-border)] bg-white">
                        <div className="flex flex-col">
                          {link.dropdown.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              onClick={() => {
                                setProductOpen(false);
                                setIsOpen(false);
                              }}
                              className={`block px-4 py-3 text-center text-sm font-medium text-[var(--av-muted)] transition hover:bg-[var(--av-primary-soft)] hover:text-[var(--av-primary)] ${
                                index !== link.dropdown.length - 1
                                  ? "border-b border-[var(--av-border)]"
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
                  className={`font-medium transition ${
                    pathname === link.path
                      ? "border-b-2 border-[var(--av-primary)] pb-1 text-[var(--av-primary)]"
                      : "text-[var(--av-light-text)] hover:text-[var(--av-primary)]"
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