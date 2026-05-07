
"use client";

import { Calendar, Hash, MapPin, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyInfo() {
  const details = [
    {
      icon: <Calendar size={22} />,
      label: "INCORPORATION DATE",
      value: "December 15, 2025",
    },
    {
      icon: <Hash size={22} />,
      label: "CIN",
      value: "U62010KL2025PTC099229",
    },
    {
      icon: <MapPin size={22} />,
      label: "LOCATION",
      value: "Kerala, India",
    },
    {
      icon: <Activity size={22} />,
      label: "STATUS",
      value: "Active",
    },
  ];

  return (
    <section className="mt-10 w-full bg-[var(--av-dark)] px-4 py-12 sm:mt-14 sm:px-6 sm:py-16 md:mt-16 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--av-accent)] sm:mb-3 sm:text-sm md:text-base">
          Company Information
        </p>

        <h2 className="mb-8 px-2 text-xl font-bold leading-tight text-white sm:mb-10 sm:text-2xl md:mb-14 md:text-3xl lg:text-4xl xl:text-5xl">
          Corporate <span className="text-[var(--av-primary)]">Details</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:bg-white/[0.06] hover:shadow-[0_18px_55px_rgba(239,59,45,0.12)] sm:p-6 md:p-8"
            >
              <div className="mb-3 flex justify-center text-[var(--av-primary)] sm:mb-4">
                {item.icon}
              </div>

              <p className="mb-1 text-[10px] tracking-wide text-gray-400 sm:mb-2 sm:text-xs md:text-sm">
                {item.label}
              </p>

              <p className="break-words text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}