// "use client";

// import { color } from "framer-motion";
// import {
//   ScanLine,
//   Smartphone,
//   Wrench,
//   FileText,
//   ShoppingBag,
//   BarChart3,
//   Recycle,
// } from "lucide-react";

// export default function FeaturesSection() {
//   const bottomFeatures = [
//     {
//   icon: <ScanLine size={24} />,
//   title: "Product Registration",
//   desc: "Products can be registered using invoice scanning with OCR, manual entry, email invoice import, or retailer system integrations. Purchase and warranty details are automatically recorded.",
//   color: "from-blue-500/20 to-purple-500/10",
//   iconBg: "bg-blue-500/20 text-blue-400",
// },
// {
//   icon: <Wrench size={24} />,
//   title: "Smart Service Requests",
//   desc: "The product connects users with verified service providers such as — manufacturer service centers, extended warranty providers, and local technicians. Users can compare providers based on price, ratings, estimated repair time, and availability.",
//   color: "from-indigo-500/20 to-purple-500/10",
//   iconBg: "bg-purple-500/20 text-purple-400",

// },

// {
//   icon: <FileText size={24} />,
//   title: "Digital Wallet",
//   desc: "Secure storage for invoices, warranty certificates, product-related records and the platform tracks expiry dates and sends reminders.",
//   color: "from-blue-500/20 to-indigo-500/10",
//     iconBg: "bg-indigo-500/20 text-indigo-400",

// },

// {
//   icon: <ShoppingBag size={24} />,
//   title: "Integrated Marketplace",
//   desc: "Users can sell products directly from their product inventory with ownership verification, product condition, service history, and AI-generated price suggestions.",
//   color: "from-purple-500/20 to-indigo-500/10",
//     iconBg: "bg-blue-500/20 text-blue-400",

// },

// {
//   icon: <BarChart3 size={24} />,
//   title: "Pricing Insights Engine",
//   desc: "Truvoh provides price intelligence that helps users to compare prices across retailers, track historical price trends, identify the best time to buy and discover alternative products within your budget.",
//   color: "from-indigo-500/20 to-blue-500/10",
//     iconBg: "bg-purple-500/20 text-purple-400",

// },

// {
//   icon: <Recycle size={24} />,
//   title: "Refurb Agents & Disposal Network",
//   desc: "When products reach the end of their lifecycle, Truvoh connects users with refurbishment and recycling partners. Users can request refurbishment, sell products to refurbishers and schedule recycling pickup. This supports a sustainable electronics ecosystem.",
//   color: "from-blue-500/20 to-purple-500/10",
//     iconBg: "bg-indigo-500/20 text-indigo-400",

// }
//   ]

//   return (
//     <section className="w-full mt-15 rounded-xl text-white py-20 px-3 lg:px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
//             Key Features of <span className="text-blue-500">Truvoh</span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Everything you need to manage your products from purchase to end-of-life,
//             all in one intelligent platform.
//           </p>
//         </div>

//         {/* Bottom Cards */}
//         <div className="grid md:grid-cols-3  gap-8">
//           {bottomFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className={`relative rounded-2xl border border-slate-800
//               bg-gradient-to-br ${feature.color}
//               p-8 transition duration-300 hover:-translate-y-2
//               hover:border-blue-500/40`}
//             >
//               <div
//                 className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
//                 rounded-lg mb-6 ${feature.iconBg}`}
//               >
//                 {feature.icon}
//               </div>

//               <h3 className="text-[18px] md:text-xl font-semibold mb-4">
//                 {feature.title}
//               </h3>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import {
  ScanLine,
  Wrench,
  FileText,
  ShoppingBag,
  BarChart3,
  Recycle,
} from "lucide-react";

export default function FeaturesSection() {
  const bottomFeatures = [
    {
      icon: <ScanLine size={22} />,
      title: "Product Registration",
      desc: "Register products via OCR invoice scan, manual entry, email import, or retailer integrations with auto warranty tracking.",
      color: "from-blue-500/20 to-purple-500/10",
      iconBg: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: <Wrench size={22} />,
      title: "Smart Service Requests",
      desc: "Connect with verified service providers. Compare price, ratings, repair time, and availability easily.",
      color: "from-indigo-500/20 to-purple-500/10",
      iconBg: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: <FileText size={22} />,
      title: "Digital Wallet",
      desc: "Securely store invoices, warranties, and records with expiry tracking and reminders.",
      color: "from-blue-500/20 to-indigo-500/10",
      iconBg: "bg-indigo-500/20 text-indigo-400",
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "Marketplace",
      desc: "Sell products with ownership verification, condition tracking, and AI price suggestions.",
      color: "from-purple-500/20 to-indigo-500/10",
      iconBg: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Pricing Insights",
      desc: "Compare prices, track trends, and find the best time to buy within your budget.",
      color: "from-indigo-500/20 to-blue-500/10",
      iconBg: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: <Recycle size={22} />,
      title: "Refurb & Recycle",
      desc: "Connect with refurbishers and recyclers for resale, repair, or eco-friendly disposal.",
      color: "from-blue-500/20 to-purple-500/10",
      iconBg: "bg-indigo-500/20 text-indigo-400",
    },
  ];

  return (
    <section className="w-full text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Key Features of <span className="text-blue-500">Truvoh</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl md:max-w-2xl mx-auto">
            Manage your products from purchase to end-of-life in one intelligent platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-slate-800 
              bg-gradient-to-br ${feature.color}
              p-5 sm:p-6 md:p-8 
              transition duration-300 
              hover:-translate-y-1 sm:hover:-translate-y-2
              hover:border-blue-500/40`}
            >
              {/* Icon */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
                flex items-center justify-center 
                rounded-lg mb-4 sm:mb-5 md:mb-6 
                ${feature.iconBg}`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}