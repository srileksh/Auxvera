



"use client";

import { Zap, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Technology Built for the Future",
    description:
      "Auxvera develops platforms that support both present needs and future innovation.",
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
      "Our systems are built to grow with businesses while maintaining reliability and flexibility.",
  },
  {
    icon: CheckCircle,
    title: "Customer-Focused Solutions",
    description:
      "We work closely with partners and customers to address real-world challenges.",
  },
  {
    icon: CheckCircle,
    title: "Commitment to Quality",
    description:
      "Every platform we develop follows high standards of security, reliability and performance.",
  },
];

export default function WhyChooseAuxvera() {
  return (
    <section className="bg-[#eef0f6] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-10 sm:mb-14 md:mb-16 max-w-3xl md:max-w-4xl text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-[#0b1020] leading-tight">
            Why Choose{" "}
            <span className="text-[#4b5fe2]">Auxvera?</span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[#4b5563] max-w-xl md:max-w-2xl">
            We combine technical excellence with a deep understanding of
            real-world challenges to deliver platforms that truly make a
            difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border border-[#dde2f3] bg-[#f3f4f8]
                p-5 sm:p-6 md:p-8
                shadow-[0_8px_20px_rgba(122,136,255,0.12)]
                transition-all duration-300
                hover:-translate-y-1 sm:hover:-translate-y-2
                hover:shadow-[0_16px_40px_rgba(122,136,255,0.18)]
                ${index === 4 ? "sm:col-span-2 xl:col-span-1" : ""}`}
              >

                {/* Icon */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 items-center justify-center rounded-xl bg-[#e4e7f5]">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#4b5fe2]" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl font-bold leading-snug text-[#111827]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-sm leading-relaxed text-[#5b6472]">
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