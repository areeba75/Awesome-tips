
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "Holiday Types", href: "#holidays" },
    { label: "Why AwesomeTrips", href: "#why-us" },
  ],
  Discover: [
    { label: "Couples Holidays", href: "#holidays" },
    { label: "Family Holidays", href: "#holidays" },
    { label: "Luxury Escapes", href: "#holidays" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#102C2A] px-6 pb-8 pt-20 text-[#F5F0E7] md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Main footer content */}
        <div className="grid gap-14 border-b border-white/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-4xl text-[#F48A61]">✳</span>
              <span className="text-3xl font-extrabold tracking-[-1.5px]">
                awesome<span className="font-normal">trips</span>
              </span>
            </Link>

            <p className="mt-6 max-w-[300px] text-sm leading-7 text-white/55">
              A little inspiration, a world of possibilities, and
              somewhere wonderful waiting for you.
            </p>

            <p className="mt-7 text-xs font-semibold tracking-[2px] text-[#A8D8CB]">
              GO SOMEWHERE GOOD.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-6 text-xs font-bold tracking-[2px] text-[#F48A61]">
                {heading.toUpperCase()}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-[#A8D8CB]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / CTA */}
          <div>
            <h3 className="mb-6 text-xs font-bold tracking-[2px] text-[#F48A61]">
              YOUR NEXT CHAPTER
            </h3>

            <p className="max-w-[280px] text-sm leading-7 text-white/60">
              Got somewhere in mind? Let&apos;s start turning that idea
              into your next adventure.
            </p>

            <a
              href="#enquiry"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F48A61] px-6 py-3 text-sm font-bold text-[#102C2A] transition-all hover:bg-[#A8D8CB]"
            >
              Plan your trip
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} AwesomeTrips. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#F48A61] hover:text-[#F48A61]"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
