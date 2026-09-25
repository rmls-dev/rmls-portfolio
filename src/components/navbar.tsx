"use client";

import { useState } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-black"
        >
          RMLS
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button flex flex-col gap-1.5 rounded-md p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav border-t border-black/10 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-black/10 py-4 text-base font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}