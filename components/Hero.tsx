
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex md:min-h-[700px] min-h-200 max-h-[1000px] items-center overflow-hidden bg-[#102C2A] text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 scale-[1.02] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081e1c]/90 via-[#081e1c]/65 to-[#081e1c]/15" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081e1c]/70 via-transparent to-transparent" />

      {/* Decorative Sun */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute right-[12%] top-[19%] text-[130px] text-[#F48A61]/80 md:text-[180px]"
      >
        ✳
      </motion.div> */}

      {/* Hero Content */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20  md:px-10 lg:px-20">

        <div className="max-w-[750px]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3 text-[9px] font-bold tracking-[3px] text-[#A8D8CB] md:text-[10px]"
          >
            <span className="h-px w-9 bg-[#F48A61]" />
            YOUR NEXT CHAPTER STARTS HERE
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-[54px] leading-[0.98] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-[92px] lg:tracking-[-5px]"
          >
            Somewhere
            feels like
            
            <span className="italic text-[#F48A61]">&nbsp;summer.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-8 mt-7 max-w-[420px] text-[13px] leading-8 text-white/80 md:text-[15px]"
          >
            More sunshine. More slow mornings. More stories worth telling.
            Find the holiday that feels like you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7"
          >
            <a
              href="#holiday-finder"
              className="flex min-h-[54px] items-center gap-5 rounded-full border border-[#F48A61] bg-[#F48A61] px-6 text-[14px] font-bold text-[#102C2A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5F0E7] hover:bg-[#F5F0E7]"
            >
              Find your somewhere
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#destinations"
              className="group flex items-center gap-3 text-[14px] font-semibold text-white"
            >
              Explore destinations
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-2"
              />
            </a>
          </motion.div>
        </div>

        {/* Floating Destination Card */}
     
<motion.div
  className="absolute bottom-[7%] right-[5%] z-10 hidden w-[min(390px,90vw)] overflow-hidden rounded-[18px] bg-[#3b6d6a] shadow-2xl lg:block"
  initial={{ opacity: 0, x: 45, y: 15 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.9, delay: 0.7 }}
>
  {/* Destination Image */}
  <div className="h-[220px] w-full overflow-hidden">
    <Image
      src="/greek-islands.png"
      alt="Beautiful view of the Greek Islands"
      width={780}
      height={440}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Card Content */}
  <div className="p-5 text-white">
    {/* Top Label */}
    <div className="mb-3 flex items-center justify-between">
      <span className="rounded-full bg-[#0B503B] px-2 py-1 text-[10px] font-semibold text-[#36D399]">
        Floating hero card
      </span>
    </div>

    {/* Location */}
    <div className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-wide text-[#A8D8CB]">
      GREEK ISLANDS
    </div>

    {/* Heading */}
    <h3 className="mb-4 font-sans text-[23px] font-normal leading-tight">
      Chasing the Aegean blue.
    </h3>

    {/* Divider */}
    <div className="mb-4 border-t border-white/25" />

    {/* Price and Action */}
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[12px] text-white">
          SAMPLE ESCAPE FROM
        </span>

        <strong className="mt-1 text-[24px] font-bold">
          £649 pp
        </strong>

        <span className="mt-1 text-[12px] text-white/80">
          Illustrative demo price
        </span>
      </div>

      <a
        href="#destinations"
        aria-label="Explore Greek Islands"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#F48A61] transition-transform duration-300 hover:rotate-45"
      >
        <ArrowUpRight size={21} />
      </a>
    </div>
  </div>
</motion.div>


        {/* Bottom Details */}
        <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between text-[14px] font-semibold tracking-[1.5px] text-white/70 md:left-10 md:right-10 lg:left-20 lg:right-20">
          <p className="hidden md:block">
            MADE FOR YOUR KIND OF ESCAPE<br/>
            
            01 — THE WORLD IS YOURS
          </p>

          <a
            href="#holiday-finder"
            className="flex items-center gap-3 text-white"
          >
            SCROLL TO EXPLORE
            <ArrowDown size={16} className="text-[#F48A61]" />
          </a>

        </div>
      </div>
    </section>
  );
}
