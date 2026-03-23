// "use client";

// import { FaRocket, FaLayerGroup, FaBullseye, FaShieldAlt, FaBolt } from "react-icons/fa";

// export default function AboutSection() {
//   const features = [
//     {
//       icon: <FaRocket />,
//       title: "Innovation-Driven",
//       desc: "Continuous exploration of emerging technologies to build future-ready platforms.",
//     },
//     {
//       icon: <FaLayerGroup />,
//       title: "Scalable Architecture",
//       desc: "Systems designed to grow seamlessly with your business needs.",
//     },
//     {
//       icon: <FaBullseye />,
//       title: "Customer-Focused",
//       desc: "Solutions designed around real user needs and experiences.",
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Security First",
//       desc: "High standards for security, reliability, and performance.",
//     },
//   ];

//   return (
//     <section className="w-full  py-37 bg-gradient-to-b from-white to-slate-100">
//       <div className="max-w-7xl mx-auto px-12 2xl:px-6 grid lg:grid-cols-2 gap-16 items-start">

//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
//             About <span className="text-indigo-600">Auxvera</span>
//           </h2>

//           <p className="mt-6 text-gray-600 leading-relaxed">
//             {/* Auxvera Technologies is a product-driven technology company focused
//             on building intelligent digital platforms that solve real-world
//             problems. Our goal is to create AI-enabled digital ecosystems that
//             connect consumers, businesses, and service providers. */}
//             Auxvera Technologies is a product-driven company, focused on building intelligent digital
// platforms that solve real-world problems.
//  Our goal is to create digital ecosystems that connect customers, businesses and service
// providers.

//           </p>

//           {/* <p className="mt-6 text-gray-600 leading-relaxed"> */}
//             {/* By combining product innovation, cloud technologies, and data
//             intelligence, we build platforms that transform fragmented processes
//             into connected systems. Our flagship platform Truvoh reflects this
//             vision by providing a unified lifecycle management platform for
//             electronic devices. */}
//             {/* Our goal is to create digital ecosystems that connect customers, businesses and service
// providers. */}

//           {/* </p> */}
//           {/* <p className="mt-6 text-gray-600 leading-relaxed">By combining product innovation, cloud infrastructure and data-driven insights, we build
// platforms that transform fragmented processes into connected systems.
// </p> */}
// <p className="mt-6 text-gray-600 leading-relaxed">By combining product innovation, cloud infrastructure and data-driven insights, we build
// platforms that transform fragmented processes into connected systems.Our flagship platform, Truvoh, reflects this vision by providing a unified lifecycle
// management platform for electronic products.
// </p>


//           {/* Mission */}
//           <div className="flex items-start gap-4 mt-10 bg-gradient-to-r from-blue-900 to-purple-900  text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
//             <div className="w-20 h-12 flex items-center justify-center bg-indigo-100 rounded-xl text-indigo-600 text-xl">
//               <FaBolt />
//             </div>

//             <div className="">
//               <h4 className="font-semibold text-white  text-xl">Our Mission</h4>
//               <p className="text-gray-100 text-md mt-2 ">
//                To simplify product ownership and build digital infrastructure that powers the future of
// product lifecycle management.

//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT FEATURES */}
//         <div className="grid sm:grid-cols-2 gap-8">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl text-lg mb-4">
//                 {item.icon}
//               </div>

//               <h3 className="font-semibold text-lg text-gray-900 mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { FaRocket, FaLayerGroup, FaBullseye, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function AboutSection() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Innovation-Driven",
      desc: "Continuous exploration of emerging technologies to build future-ready platforms.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Scalable Architecture",
      desc: "Systems designed to grow seamlessly with your business needs.",
    },
    {
      icon: <FaBullseye />,
      title: "Customer-Focused",
      desc: "Solutions designed around real user needs and experiences.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      desc: "High standards for security, reliability, and performance.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-indigo-600">Auxvera</span>
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
            Auxvera Technologies is a product-driven company focused on building intelligent
            digital platforms that solve real-world problems. Our goal is to create digital ecosystems
            that connect customers, businesses and service providers.
          </p>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
            By combining product innovation, cloud infrastructure and data-driven insights, we build
            platforms that transform fragmented processes into connected systems. Our flagship platform,
            Truvoh, reflects this vision by providing a unified lifecycle management platform for
            electronic products.
          </p>

          {/* Mission */}
          <div className="flex items-start gap-3 sm:gap-4 mt-8 sm:mt-10 
          bg-gradient-to-r from-blue-900 to-purple-900 text-white 
          p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl 
          shadow-md hover:shadow-xl transition">

            <div className="w-10 h-10 sm:w-12 sm:h-12 
            flex items-center justify-center 
            bg-indigo-100 rounded-lg sm:rounded-xl 
            text-indigo-600 text-lg">
              <FaBolt />
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg md:text-xl">
                Our Mission
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 mt-1 sm:mt-2 leading-relaxed">
                To simplify product ownership and build digital infrastructure that powers the future of
                product lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 
              rounded-xl sm:rounded-2xl 
              shadow-md hover:shadow-xl 
              transition duration-300 
              hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
              flex items-center justify-center 
              bg-indigo-100 text-indigo-600 
              rounded-lg sm:rounded-xl 
              text-base sm:text-lg mb-3 sm:mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
