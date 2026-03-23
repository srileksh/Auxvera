// "use client";

// import { Linkedin, Twitter } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Suraj Ajayan",
//     role: "Project Manager",
//     image: "surajajayan.jpeg",
//   },
//   {
//     name: "Lijoy Mohan",
//     role: "QA Engineer",
//     image: "Lijoy.jpeg",
//   },
//   {
//     name: "Lekshmi Raj G",
//     role: "Digital Marketing",
//     image: "leks.jpeg",
//   },
//   {
//     name: "Jeffin George",
//     role: "Flutter Developer",
//     image: "jeffin.jpeg",
//   },
//   {
//     name: "Augnes Rose",
//     role: "Flutter Developer",
//     image: "augnesrose.jpeg",
//   },
//   {
//     name: "Tom Sebastian",
//     role: "Frontend Developer",
//     image: "tomseb.jpeg",
//   },
//   {
//     name: "Sreelakshmi J",
//     role: "Frontend Developer",
//     image: "sree.png",
//   },
//   {
//     name: "Fathima F",
//     role: "Frontend Developer",
//     image: "fathimaf.jpeg",
//   },
//   {
//     name: "Aswin D Kumar",
//     role: "Backend Developer",
//     image: "aswin.jpeg",
//   },
//   {
//     name: "Siva Prasad",
//     role: "Backend Developer",
//     image: "sivaprasad.jpeg",
//   },
// ];

// export default function OurTeamSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#020617] px-4 sm:px-6 md:px-10 lg:px-16 py-38 text-white">
//       {/* Heading */}
//       <div className="mx-auto mb-16 max-w-4xl text-center">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           Our <span className="text-[#5b7cff]">Team</span>
//         </h2>

//         <p className="mx-auto mt-5 max-w-2xl text-gray-400 text-sm sm:text-base">
//           Meet the passionate individuals behind Auxvera who are dedicated to
//           building the future of device lifecycle management.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="mx-auto grid max-w-7xl gap-8 md:gap-8 px-8 md:p-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className=" group relative rounded-2xl border border-blue-900/30 
//             bg-[#020617] p-6 text-center shadow-lg transition-all duration-300 
//             hover:-translate-y-2 hover:shadow-blue-500/20 flex flex-col items-center"
//           >
//             {/* Profile Image */}
//             {/* <div className=" mb-6 mx-auto w-28 sm:w-32 md:w-36 lg:w-38 aspect-square overflow-hidden rounded-full border-4 border-[#1d2748]"> */}
//             <div className="mb-6 flex justify-center w-full">
//               <div
//                 className="w-28 sm:w-32 md:w-36 lg:w-40 aspect-square 
//       overflow-hidden rounded-full border-4 border-[#1d2748]"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className=" h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Name */}
//             <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>

//             {/* Role */}
//             <p className="mt-1 text-sm sm:text-base text-[#5b7cff]">
//               {member.role}
//             </p>

//             {/* Social */}
//             <div className="mt-5 flex justify-center gap-3">
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c132b] text-gray-400 hover:text-white transition"
//               >
//                 <Linkedin size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c132b] text-gray-400 hover:text-white transition"
//               >
//                 <Twitter size={18} />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
