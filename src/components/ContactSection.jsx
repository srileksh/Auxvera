
// }


"use client";

import { Contact2, ContactIcon, Mail } from "lucide-react";
import { FcContacts } from "react-icons/fc";
import { IoCall, IoCallOutline } from "react-icons/io5";

export default function ContactAuxveraSection() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[var(--av-bg)] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 xl:px-20">
      <div className="w-full max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--av-primary-soft)] shadow-sm sm:mb-8 sm:h-16 sm:w-16">
          <Mail className="h-7 w-7 text-[var(--av-primary)] sm:h-9 sm:w-9" />
        </div>

        <h2 className="text-2xl font-bold leading-tight text-[var(--av-text)] sm:text-3xl md:text-4xl lg:text-5xl">
          Contact{" "}
          <span className="text-[var(--av-primary)]">
            Auxvera Technologies
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--av-muted)] sm:mt-5 sm:text-base md:text-lg">
          Interested in partnerships, integrations or early access to Truvoh?
          Get in touch and be among the first to experience the future of
          product lifecycle management.
        </p>
<div className="flex justify-center gap-5">
        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@auxvera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[var(--av-border)] bg-[var(--av-surface)] px-5 py-3 text-sm font-medium text-[var(--av-text)] shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:shadow-[0_18px_50px_rgba(239,59,45,0.12)] sm:px-6 sm:text-base"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--av-primary-soft)] transition-colors duration-300 group-hover:bg-[var(--av-primary)]">
              <Mail className="h-5 w-4 text-[var(--av-primary)] group-hover:text-white" />
            </span>

            <span className="break-all sm:break-normal">
              {/* <span className="mr-1 text-[var(--av-muted)]">Email:</span> */}
              info@auxvera.com
            </span>
          </a>
        </div>
        
         <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@auxvera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[var(--av-border)] bg-[var(--av-surface)] px-5 py-3 text-sm font-medium text-[var(--av-text)] shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--av-primary)] hover:shadow-[0_18px_50px_rgba(239,59,45,0.12)] sm:px-6 sm:text-base"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--av-primary-soft)] transition-colors duration-300 group-hover:bg-[var(--av-primary)]">
              <IoCallOutline className="h-5 w-10 text-[var(--av-primary)] group-hover:text-white" />
            </span>

            <span className="break-all sm:break-normal">
              {/* <span className="mr-1 text-[var(--av-muted)]">Contact:</span> */}
              +91 790 247 7666
            </span>
          </a>
        </div>
        </div>
        
      </div>
    </section>
  );
}