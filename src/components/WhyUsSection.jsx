// // "use client";

// // import {
// //   Zap,
// //   Heart,
// //   Shield,
// //   Award,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion } from "framer-motion";
// // import CompanyInfo from "./CompanyInfo";

// // export default function WhyUsSection() {
// //   const features = [
// //     {
// //       icon: <Zap size={26} />,
// //       title: "Innovation-Driven Approach",
// //       desc: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions.",
// //     },
// //     {
// //       icon: <Heart size={26} />,
// //       title: "Client-Centric Solutions",
// //       desc: "Every solution is tailored to your unique needs, ensuring maximum value and impact.",
// //     },
// //     {
// //       icon: <Shield size={26} />,
// //       title: "Scalable & Secure Systems",
// //       desc: "Built for growth with enterprise-grade security at every layer.",
// //     },
// //     {
// //       icon: <Award size={26} />,
// //       title: "Skilled Technology Experts",
// //       desc: "Our team of experienced professionals brings deep expertise across multiple domains.",
// //     },
// //     {
// //       icon: <CheckCircle size={26} />,
// //       title: "Commitment to Quality",
// //       desc: "Rigorous quality assurance processes ensure reliable, high-performance deliverables.",
// //     },
// //   ];

// //   return (
// //       <div className="max-w-7xl mx-auto">
// //       <section className="w-full bg-gray-100 py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">

// //           {/* Section Header */}
// //           <div className="text-center mb-12 md:mb-16">
// //             <p className="text-blue-600 text-sm sm:text-base tracking-wide uppercase mb-3">
// //               Why Choose Us
// //             </p>

// //             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
// //               The{" "}
// //               <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
// //                 AUXVERA
// //               </span>{" "}
// //               Advantage
// //             </h2>
// //           </div>

// //           {/* Feature Grid */}
// //           <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
// //             {features.map((feature, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ y: 60, opacity: 0 }}
// //                 whileInView={{ y: 0, opacity: 1 }}
// //                 transition={{
// //                   type: "spring",
// //                   stiffness: 80,
// //                   damping: 15,
// //                   delay: index * 0.1,
// //                 }}
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 {/* Icon */}
// //                 <div className="text-blue-600 mb-4">
// //                   {feature.icon}
// //                 </div>

// //                 {/* Title */}
// //                 <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
// //                   {feature.title}
// //                 </h3>

// //                 {/* Description */}
// //                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
// //                   {feature.desc}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       <CompanyInfo />
// //     </div>
// //   );
// // }



// "use client";

// import {
//   Zap,
//   Lightbulb,
//   TrendingUp,
//   Users,
//   CheckCircle,
// } from "lucide-react";

// const features = [
//   {
//     icon: Zap,
//     title: "Future-Ready Technology",
//     description:
//       "Our platforms combine AI, data intelligence, and modern system architecture to support both present and future needs.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation-Driven Development",
//     description:
//       "We continuously explore emerging technologies to build solutions that deliver long-term value.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Scalable Architecture",
//     description:
//       "Our systems are designed to grow alongside businesses, ensuring reliability and flexibility.",
//   },
//   {
//     icon: Users,
//     title: "Customer-Focused Solutions",
//     description:
//       "We work closely with partners and customers to design solutions that address real operational challenges.",
//   },
//   {
//     icon: CheckCircle,
//     title: "Commitment to Quality",
//     description:
//       "Every solution developed by Auxvera Technologies follows high standards of reliability, security, and performance.",
//   },
// ];

// export default function WhyChooseUsSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#020617] px-6 py-20 text-white md:px-12 lg:px-20">
//       {/* Background glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(37,99,235,0.14),transparent_35%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_80px] opacity-20" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mx-auto mb-14 max-w-4xl text-center">
//           <p className="text-lg leading-8 text-gray-300 md:text-[20px]">
//             We combine technical excellence with a deep understanding of
//             real-world challenges to deliver platforms that truly make a
//             difference.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <div
//                 key={index}
//                 className={`group relative rounded-[24px] border border-blue-900/40 bg-[linear-gradient(180deg,rgba(10,16,40,0.95),rgba(2,6,23,0.98))] p-8 shadow-[0_0_30px_rgba(37,99,235,0.18),0_18px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(59,130,246,0.28),0_22px_70px_rgba(0,0,0,0.65)] ${
//                   index === 4 ? "md:col-span-2 xl:col-span-1" : ""
//                 }`}
//               >
//                 {/* soft blue bottom glow */}
//                 <div className="absolute inset-x-8 bottom-0 h-16 rounded-full bg-blue-600/20 blur-3xl" />

//                 {/* top highlight */}
//                 <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

//                 <div className="relative">
//                   <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1535] ring-1 ring-blue-800/40">
//                     <Icon className="h-7 w-7 text-blue-400" strokeWidth={2} />
//                   </div>

//                   <h3 className="mb-4 text-[24px] font-semibold leading-snug text-white">
//                     {feature.title}
//                   </h3>

//                   <p className="text-[18px] leading-9 text-gray-400">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Zap, Lightbulb, TrendingUp, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Future-Ready Technology",
    description:
      "Our platforms combine AI, data intelligence, and modern system architecture to support both present and future needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven Development",
    description:
      "We continuously explore emerging technologies to build solutions that deliver long-term value.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Our systems are designed to grow alongside businesses, ensuring reliability and flexibility.",
  },
  {
    icon: Users,
    title: "Customer-Focused Solutions",
    description:
      "We work closely with partners and customers to design solutions that address real operational challenges.",
  },
  {
    icon: CheckCircle,
    title: "Commitment to Quality",
    description:
      "Every solution developed by Auxvera Technologies follows high standards of reliability, security, and performance.",
  },
];

export default function WhyChooseAuxvera() {
  return (
    <section className="bg-[#eef0f6] px-6 py-25 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#0b1020]">
            Why Choose{" "}
            <span className="text-[#4b5fe2]">
              Auxvera?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#4b5563] md:text-[18px]">
            We combine technical excellence with a deep understanding of
            real-world challenges to deliver platforms that truly make a
            difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`rounded-[24px] border border-[#dde2f3] bg-[#f3f4f8] p-8 shadow-[0_12px_30px_rgba(122,136,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(122,136,255,0.18)] ${
                  index === 4 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e4e7f5]">
                  <Icon className="h-7 w-7 text-[#4b5fe2]" strokeWidth={2.2} />
                </div>

                <h3 className="mb-4 text-[22px] font-bold leading-snug text-[#111827]">
                  {feature.title}
                </h3>

                <p className="text-[18px] leading-9 text-[#5b6472]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}