

"use client";

import Link from "next/link";
import { Youtube, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@AuxveraTechnologies",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/auxvera_tech",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/AuxveraTechnologies",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/auxvera.tech/",
    },
  ];

  return (
    <footer className="bg-[var(--av-dark)] px-4 pb-6 pt-10 text-gray-300 sm:px-6 sm:pb-8 sm:pt-12 md:pt-14 lg:px-12 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between  gap-6  sm:gap-8 md:gap-10  lg:gap-12">
          {/* Company Info */}
          <div>
            <h2 className="mb-3 text-lg font-bold text-white sm:mb-4 sm:text-xl md:text-2xl">
              {/* AUXVERA <span className="text-[var(--av-primary)]">TECH</span> */}
               <div className="flex h-8 w-30  items-center justify-start">
            <img
              src="/Auxvera Logo-03.jpg"
              alt="Auxvera"
              className="h-full w-full object-contain bg-[var(--av-gradient-dark)] "
            />
          </div>
            </h2>

            <p className="max-w-sm text-xs leading-relaxed text-gray-400 sm:text-sm md:text-base">
              Innovating the future with smart technology solutions from Kerala,
              India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base md:text-lg">
              Quick Links
            </h3>

            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm md:text-base">
              <li>
                <Link href="/" className="transition hover:text-[var(--av-primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[var(--av-primary)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/truvoh" className="transition hover:text-[var(--av-primary)]">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[var(--av-primary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base md:text-lg">
              Services
            </h3>

            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm md:text-base">
              <li className="cursor-pointer transition hover:text-[var(--av-primary)]">
                Software Development
              </li>
              <li className="cursor-pointer transition hover:text-[var(--av-primary)]">
                Cloud Solutions
              </li>
              <li className="cursor-pointer transition hover:text-[var(--av-primary)]">
                AI & Automation
              </li>
              <li className="cursor-pointer transition hover:text-[var(--av-primary)]">
                IT Consulting
              </li>
            </ul>
          </div> */}

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base md:text-lg">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 transition hover:border-[var(--av-primary)] hover:bg-[var(--av-primary)] sm:h-9 sm:w-9 md:h-10 md:w-10"
                  >
                    <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-[11px] leading-relaxed text-gray-500 sm:mt-10 sm:pt-5 sm:text-xs md:mt-12 md:pt-6 md:text-sm">
          © 2026 AUXVERA TECHNOLOGIES PRIVATE LIMITED.
          <br className="sm:hidden" />
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}