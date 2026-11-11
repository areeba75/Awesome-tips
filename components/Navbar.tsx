
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Holiday Types", href: "#holidays" },
  { label: "Our Story", href: "#why-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b border-white/20 text-white">
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-20">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-3xl text-[#F48A61]">✳</span>

          <span className="text-[23px] font-extrabold tracking-[-1.5px]">
            awesome<span className="font-normal">trips</span>

            <span className="mt-1 block text-[8px] font-medium tracking-[2.5px] text-white/70">
              GO SOMEWHERE GOOD.
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-white/85 transition-colors hover:text-[#F48A61]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#enquiry"
          className="hidden items-center gap-3 rounded-full border border-white/60 px-5 py-3 text-xs font-semibold transition-all hover:border-[#F48A61] hover:bg-[#F48A61] hover:text-[#102C2A] md:flex"
        >
          Let&apos;s plan a trip
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/40 md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="flex flex-col bg-[#102C2A]/95 px-6 pb-6 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-sm"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#enquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#F48A61] py-4 text-sm font-bold text-[#102C2A]"
          >
            Let&apos;s plan a trip
            <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
