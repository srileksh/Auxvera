"use client";

import { Zap, Lightbulb, TrendingUp, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Technology Built for the Future",
    description:
"Auxvera develops platforms that support both present needs and future innovation."  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven Development",
    description:
"We continuously explore emerging technologies to build solutions that deliver long-term value."  },
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
"We work closely with partners and customers to address real-world challenges."  },
{
    icon: CheckCircle,
    title: "Commitment to Quality",
    description:
"Every platform we develop follows high standards of security, reliability and performance."  },


];

export default function WhyChooseAuxvera() {
  return (
    <section className="bg-[#eef0f6]  py-16 sm:py-20 md:py-32 px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-[#0b1020]">
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
                <div className="mb-6 flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-2xl bg-[#e4e7f5]">
                  <Icon className="h-7 w-7 text-[#4b5fe2]" strokeWidth={2.2} />
                </div>

                <h3 className="mb-3 text-[18px] md:text-xl font-bold leading-snug text-[#111827]">
                  {feature.title}
                </h3>

                <p className=" text-sm leading-6 text-[#5b6472]">
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