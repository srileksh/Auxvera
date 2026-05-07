
"use client";

import {
  FaRocket,
  FaLayerGroup,
  FaBullseye,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

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
    <section className="w-full bg-[var(--av-gradient-light)]  sm:py-6 md:py-10 lg:py-15 mt-10">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:gap-12 sm:px-6 md:gap-16 lg:grid-cols-2 lg:px-12">
        {/* LEFT CONTENT */}
        <div>
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--av-primary)]">
            About Auxvera
          </p> */}

          <h2 className="text-2xl font-bold leading-tight text-[var(--av-text)] sm:text-3xl md:text-4xl xl:text-5xl">
            {/* Building clean, connected{" "}
            About 
            <span className="text-[var(--av-primary)]">digital ecosystems</span> */}
             About {" "}
            <span className="text-[var(--av-primary)]">Auxvera</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[var(--av-muted)] sm:mt-5 sm:text-base md:mt-6">
            Auxvera Technologies is a product-driven company focused on building
            intelligent digital platforms that solve real-world problems. Our
            goal is to create digital ecosystems that connect customers,
            businesses and service providers.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--av-muted)] sm:mt-5 sm:text-base md:mt-6">
            By combining product innovation, cloud infrastructure and
            data-driven insights, we build platforms that transform fragmented
            processes into connected systems. Our flagship platform, Truvoh,
            reflects this vision by providing a unified lifecycle management
            platform for electronic products.
          </p>

          {/* Mission */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--av-border)] bg-[var(--av-primary-soft)] p-4  transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)] sm:mt-10 sm:gap-4 sm:p-5 md:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--av-primary-soft)] border-1 text-lg text-[var(--av-primary)] sm:h-12 sm:w-12">
              <FaBolt />
            </div>

            <div>
              <h4 className="text-base font-semibold text-[var(--av-text)] sm:text-lg md:text-xl">
                Our Mission
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-[var(--av-muted)] sm:mt-2 sm:text-sm md:text-base">
                To simplify product ownership and build digital infrastructure
                that powers the future of product lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[var(--av-border)] bg-[var(--av-surface)] p-5 shadow-[0_14px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:shadow-[0_22px_55px_rgba(239,59,45,0.12)] sm:p-6 md:p-8"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--av-primary-soft)] text-base text-[var(--av-primary)] sm:mb-4 sm:h-11 sm:w-11 sm:text-lg md:h-12 md:w-12">
                {item.icon}
              </div>

              <h3 className="mb-1 text-base font-semibold text-[var(--av-text)] sm:mb-2 sm:text-lg">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-[var(--av-muted)] sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}