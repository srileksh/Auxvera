

"use client";

import { FaUsers, FaStore, FaIndustry, FaRecycle } from "react-icons/fa";

export default function ServiceSection() {
  const services = [
    {
      icon: <FaUsers className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Customers",
      description:
        "Organize products, track warranties, access repairs, and sell when needed.",
    },
    {
      icon: <FaStore className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Service Providers",
      description:
        "Get consistent repair opportunities and tools to manage workflows.",
    },
    {
      icon: <FaIndustry className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Retailers & Manufacturers",
      description:
        "Improve customer experience and gain lifecycle insights.",
    },
    {
      icon: <FaRecycle className="text-lg text-[var(--av-primary)] sm:text-xl" />,
      title: "Refurb & Recycling Partners",
      description:
        "Source used electronics efficiently for refurbishment or recycling.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[var(--av-surface-soft)] py-16 sm:py-20 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-[var(--av-primary)]/10 blur-[100px] sm:h-[300px] sm:w-[700px] sm:blur-[120px] md:h-[400px] md:w-[900px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-12">
        <div className="mb-10 px-2 text-center sm:mb-14 md:mb-16">
          <h2 className="text-2xl font-bold leading-tight text-[var(--av-text)] sm:text-3xl md:text-4xl xl:text-5xl">
            Who We Serve
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--av-muted)] sm:mt-4 sm:text-base md:max-w-2xl">
            Building a connected ecosystem for everyone in the device lifecycle
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4 xl:gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[var(--av-border)] bg-white p-5 text-center shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:shadow-[0_22px_70px_rgba(239,59,45,0.12)] sm:p-6 md:p-8"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--av-primary-soft)] sm:mb-5 sm:h-12 sm:w-12 md:mb-6 md:h-14 md:w-14">
                {item.icon}
              </div>

              <h3 className="mb-2 text-base font-semibold text-[var(--av-text)] sm:mb-3 sm:text-lg">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-[var(--av-muted)] sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}