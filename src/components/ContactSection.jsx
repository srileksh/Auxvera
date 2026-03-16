// "use client";

// import { Mail, ArrowRight } from "lucide-react";

// export default function ContactAuxveraSection() {
//   return (
//     <section className="bg-[#eef0f6] py-32 px-55">
//       <div className="mx-auto  rounded-[32px] border border-[#e3e5ee] bg-[linear-gradient(180deg,#f4f5fb_0%,#eef0f8_100%)] px-6 py-16 shadow-[0_30px_80px_rgba(120,130,255,0.12)] md:px-12 md:py-20 lg:px-20 lg:py-24">
//         <div className="mx-auto max-w-4xl text-center">
//           {/* Icon */}
//           <div className="mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-[20px] bg-[#dcd8f3] shadow-sm">
//             <Mail className="h-9 w-9 text-[#3f57d8]" strokeWidth={2} />
//           </div>

//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-[#060b1f] ">
//             Contact{" "}
//             <span className="text-[#4459dd]">Auxvera Technologies</span>
//           </h2>

//           {/* Description */}
//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#616777] md:text-[18px]">
//             Interested in partnerships, integrations, or early access to
//             Truvoh? Get in touch with us and be the first to experience the
//             future of product lifecycle management.
//           </p>

//           {/* Form */}
//           <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-4 md:flex-row md:justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="h-[50px] w-2/4 rounded-2xl border border-[#dfe3ee] bg-[#f3f4f8] px-5 text-[18px] text-[#111827] outline-none placeholder:text-[#6b7280] shadow-sm"
//             />

//             <button className="h-[50px] flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#4459dd_0%,#5d2ecb_100%)] px-8 text-[16px] font-semibold text-white shadow-[0_16px_30px_rgba(84,74,220,0.28)] transition hover:scale-[1.02]">
//               <p>Request Access</p>
//               <p><ArrowRight className="h-5 w-5" /></p>
//             </button>
//           </div>

//           {/* Footer text */}
//           <p className="mt-6 text-[16px] text-[#666c7a]">
//             Or reach out directly at{" "}
//             <a
//               href="mailto:contact@auxvera.com"
//               className="font-medium text-[#4459dd] hover:underline"
//             >
//               contact@auxvera.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function ContactAuxveraSection() {
  return (
    <section className="bg-[#eef0f6] py-32 px-55">
      <div className="mx-auto rounded-[32px] border border-[#e3e5ee] bg-[linear-gradient(180deg,#f4f5fb_0%,#eef0f8_100%)] px-6 py-16 shadow-[0_30px_80px_rgba(120,130,255,0.12)] md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-[20px] bg-[#dcd8f3] shadow-sm">
            <Mail className="h-9 w-9 text-[#3f57d8]" strokeWidth={2} />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-[#060b1f]">
            Contact <span className="text-[#4459dd]">Auxvera Technologies</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#616777] md:text-[18px]">
            Interested in partnerships, integrations or early access to Truvoh?
            Get in touch with us and be the first to experience the future of product lifecycle management.
          </p>

          {/* Email Form */}
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-4 md:flex-row md:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[50px] w-2/4 rounded-2xl border border-[#dfe3ee] bg-[#f3f4f8] px-5 text-[18px] text-[#111827] outline-none placeholder:text-[#6b7280] shadow-sm"
            />

            <button className="h-[50px] flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#4459dd_0%,#5d2ecb_100%)] px-8 text-[16px] font-semibold text-white shadow-[0_16px_30px_rgba(84,74,220,0.28)] transition hover:scale-[1.02]">
              <span>Request Access</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-[16px] text-[#666c7a] space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:contact@auxvera.com"
                className="font-medium text-[#4459dd] hover:underline"
              >
                contact@auxvera.com
              </a>
            </p>

            <p>
              Website:{" "}
              <a
                href="https://www.auxvera.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#4459dd] hover:underline"
              >
                www.auxvera.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}