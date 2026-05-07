

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
    },
    {
      icon: <Wrench size={22} />,
      title: "Smart Service Requests",
      desc: "Connect with verified service providers. Compare price, ratings, repair time, and availability easily.",
    },
    {
      icon: <FileText size={22} />,
      title: "Digital Wallet",
      desc: "Securely store invoices, warranties, and records with expiry tracking and reminders.",
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "Marketplace",
      desc: "Sell products with ownership verification, condition tracking, and AI price suggestions.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Pricing Insights",
      desc: "Compare prices, track trends, and find the best time to buy within your budget.",
    },
    {
      icon: <Recycle size={22} />,
      title: "Refurb & Recycle",
      desc: "Connect with refurbishers and recyclers for resale, repair, or eco-friendly disposal.",
    },
  ];

  return (
    <section className="w-full bg-[var(--av-bg)] px-4 py-2 text-[var(--av-text)] sm:px-3 sm:py-4 ">
      <div className="mx-auto max-w-7xl">
        <div className="px-2 text-center sm:mb-7 md:mb-10">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--av-primary)]">
            Truvoh Features
          </p> */}

          <h2 className="mb-3 text-2xl font-bold leading-tight sm:mb-4 sm:text-3xl md:text-4xl xl:text-5xl">
            Key Features of{" "}
            <span className="text-[var(--av-primary)]">Truvoh</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm text-[var(--av-muted)] sm:text-base md:max-w-2xl">
            Manage your products from purchase to end-of-life in one intelligent
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[var(--av-border)] bg-[var(--av-surface)] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:shadow-[0_22px_55px_rgba(239,59,45,0.12)] sm:p-6 md:p-8"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--av-primary-soft)] text-[var(--av-primary)] sm:mb-5 sm:h-10 sm:w-10 md:mb-4 md:h-12 md:w-12">
                {feature.icon}
              </div>

              <h3 className="mb-2 text-base font-semibold text-[var(--av-text)] sm:mb-3 sm:text-lg md:text-xl">
                {feature.title}
              </h3>

              <p className="text-xs leading-relaxed text-[var(--av-muted)] sm:text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}