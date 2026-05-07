

"use client";

import { LayoutGrid } from "lucide-react";
import { TiSpanner } from "react-icons/ti";
import TruvohFeatures from "./TruvohFeatures";

export default function TruvohSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--av-bg)] px-4 py-16 text-[var(--av-text)] sm:px-6 sm:py-20 md:py-24 lg:px-12">
      <div className="absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-[var(--av-primary)]/10 blur-[100px] sm:h-[300px] sm:w-[700px] md:h-[400px] md:w-[900px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 flex justify-center sm:mb-6">
          <div className="flex items-center gap-2 rounded-full border border-[var(--av-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--av-muted)] shadow-sm sm:px-4 sm:text-sm">
            <LayoutGrid size={14} className="text-[var(--av-primary)]" />
            Introducing
          </div>
        </div>

        <div className="px-5 sm:px-20 md:px-10 xl:px-20 flex-col sm:flex-row justify-center item-center gap-2 xl:gap-5  leading:2 sm:leading-0">
          <img
            src="/Truvoh-logo.png"
            className=" sm:h-8 md:h-12 w-30 sm:w-40 md:w-55 mx-auto mb-5"
          />
          <h2 className="mb-4 px-2 text-center  font-bold leading-tight text-[var(--av-text)] sm:mb-6 text-lg sm:text-xl md:text-3xl xl:text-4xl">
            Smart Product Lifecycle Management Platform
          </h2>
        </div>

        <p className="mx-auto mb-10 max-w-xl px-2 text-center text-sm leading-relaxed text-[var(--av-muted)] sm:mb-14 sm:max-w-2xl sm:text-base md:mb-16 md:max-w-3xl md:text-lg">
          Truvoh integrates fragmented systems into one ecosystem to manage the
          complete product lifecycle. From purchase to end-of-life, users can
          organize, track, and manage products efficiently.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
          {/* Problem Card */}
          <div className="rounded-2xl border border-[var(--av-border)] bg-[var(--av-surface)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.07)] sm:p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <h3 className="text-base font-semibold text-[var(--av-text)] sm:text-lg md:text-xl">
                The Problem TRUVOH Solves
              </h3>
            </div>

            <p className="mb-4 text-sm text-[var(--av-muted)] sm:mb-6 sm:text-base">
              Managing multiple electronic devices is often difficult and
              inefficient.
            </p>

            <ul className="space-y-2 text-xs text-[var(--av-muted)] sm:space-y-3 sm:text-sm">
              <li>• Losing invoices or warranty documents</li>
              <li>• Tracking warranty expiry dates</li>
              <li>• Finding reliable repair services</li>
              <li>• Lack of repair cost transparency</li>
              <li>• Limited resale or disposal options</li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="rounded-2xl border border-[var(--av-primary)]/20 bg-[linear-gradient(135deg,#ffffff_0%,#fff4f1_100%)] p-5 shadow-[0_16px_45px_rgba(239,59,45,0.09)] sm:p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <h3 className="text-base font-semibold text-[var(--av-text)] sm:text-lg md:text-xl">
                The Truvoh Solution
              </h3>
            </div>

            <p className="mb-4 text-sm text-[var(--av-muted)] sm:mb-6 sm:text-base">
              One unified platform for complete device lifecycle management.
            </p>

            <div className="space-y-2 text-xs text-[var(--av-muted)] sm:space-y-3 sm:text-sm">
              <div>• Store invoices and documents</div>
              <div>• Track warranty information</div>
              <div>• Request repairs and service</div>
              <div>• Sell products via marketplace</div>
              <div>• Compare pricing insights</div>
              <div>• Request refurbishment or recycling</div>
            </div>

            {/* <div className="mt-5 flex items-center gap-2 rounded-xl border border-[var(--av-border)] bg-white p-3 text-xs text-[var(--av-muted)] shadow-sm sm:mt-6 sm:gap-3 sm:p-4 sm:text-sm">
              <TiSpanner className="text-lg text-[var(--av-primary)] sm:text-xl" />
              <span>Connect with verified service providers instantly</span>
            </div> */}
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <TruvohFeatures />
        </div>
      </div>
    </section>
  );
}
