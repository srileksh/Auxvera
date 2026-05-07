

"use client";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[url('/bgimg.jpeg')] bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-white/88 xl:bg-white/78" />

      {/* Brand Glow */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--av-primary)]/10 blur-[100px] sm:h-[350px] sm:w-[450px] md:h-[420px] md:w-[650px] lg:h-[500px] lg:w-[900px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-4 rounded-full border border-[var(--av-border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--av-primary)] shadow-sm backdrop-blur-md"
        >
          Auxvera Technologies
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-xl font-bold leading-tight text-[var(--av-text)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-12"
        >
          Building the Future for{" "}
          <span className="bg-[var(--av-gradient-primary)] bg-clip-text text-[var(--av-primary)] ">
            Product Lifecycle Management
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-4 max-w-xl space-y-3 px-2 text-sm leading-relaxed text-[var(--av-muted)] sm:mt-8 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-[17px]"
        >
          <p>
            Auxvera Technologies is a product-driven company building platforms
            that simplify real-world problems through intelligent software
            systems. Our mission is to create scalable digital ecosystems
            connecting consumers, businesses, and service providers.
          </p>

          <p>
            Our flagship platform <strong className="text-[var(--av-text)]">TRUVOH</strong> is a
            unified lifecycle platform for managing consumer devices from
            purchase to disposal. It includes invoice & warranty tracking,
            service requests, resale, AI-powered pricing insights, and
            streamlined refurbishment — all in one system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-4 rounded-3xl border border-[var(--av-border)] bg-black p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-md sm:mt-12 sm:gap-6 sm:p-5 md:grid-cols-4"
        >
          <div>
            <h3 className="text-base font-bold text-[var(--av-primary)] sm:text-lg md:text-xl">
              100%
            </h3>
            <p className="text-xs text-[var(--av-light-text)] sm:text-sm">
              Lifecycle Coverage
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--av-primary)] sm:text-lg md:text-xl">
              24/7
            </h3>
            <p className="text-xs text-[var(--av-light-text)] sm:text-sm">
              Platform Access
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--av-primary)] sm:text-lg md:text-xl">
              Secure
            </h3>
            <p className="text-xs text-[var(--av-light-text)] sm:text-sm">
              Digital Wallet
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--av-primary)] sm:text-lg md:text-xl">
              Smart
            </h3>
            <p className="text-xs text-[var(--av-light-text)] sm:text-sm">
              AI Insights
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}