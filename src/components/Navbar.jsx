

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/truvoh",
      dropdown: [{ name: "Truvoh", path: "/truvoh" }],
    },
    { name: "About", path: "/about" },
    { name: "Who We Serve", path: "/whoweserve" },
    { name: "Why Auxvera", path: "/whyauxvera" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[var(--av-dark)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-45  items-center justify-start">
            <img
              src="/Auxvera Logo-03.jpg"
              alt="Auxvera"
              className="h-full w-full object-contain bg-[var(--av-gradient-dark)] "
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 text-sm md:flex lg:gap-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setProductOpen(!productOpen)}
                    className="flex items-center gap-1 font-medium text-[var(--av-light-text)] transition hover:text-[var(--av-primary)]"
                  >
                    {link.name}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        productOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-2xl border border-[var(--av-border)] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out ${
                      productOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col">
                      {link.dropdown.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setProductOpen(false)}
                          className={`block px-4 py-3 text-center text-sm font-medium text-[var(--av-muted)] transition hover:bg-[var(--av-primary-soft)] hover:text-[var(--av-primary)] ${
                            index !== link.dropdown.length - 1
                              ? "border-b border-[var(--av-border)]"
                              : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition ${
                  pathname === link.path
                    ? "border-b-2 border-[var(--av-primary)] pb-1 text-[var(--av-primary)]"
                    : "text-[var(--av-light-text)] hover:text-[var(--av-primary)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--av-light-text)] md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[var(--av-border-dark)] bg-[var(--av-dark)] md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className="flex w-full items-center justify-between font-medium text-[var(--av-light-text)] transition hover:text-[var(--av-primary)]"
                    >
                      <span>{link.name}</span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          productOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {productOpen && (
                      <div className="mt-3 w-full overflow-hidden rounded-xl border border-[var(--av-border)] bg-white">
                        <div className="flex flex-col">
                          {link.dropdown.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              onClick={() => {
                                setProductOpen(false);
                                setIsOpen(false);
                              }}
                              className={`block px-4 py-3 text-center text-sm font-medium text-[var(--av-muted)] transition hover:bg-[var(--av-primary-soft)] hover:text-[var(--av-primary)] ${
                                index !== link.dropdown.length - 1
                                  ? "border-b border-[var(--av-border)]"
                                  : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition ${
                    pathname === link.path
                      ? "border-b-2 border-[var(--av-primary)] pb-1 text-[var(--av-primary)]"
                      : "text-[var(--av-light-text)] hover:text-[var(--av-primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}