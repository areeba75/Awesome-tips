
"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Compass,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Compass,
    title: "Made around you",
    description:
      "Your travel style, your pace, your kind of escape. Start with what matters most to you.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "A little more inspiration",
    description:
      "Discover destinations and experiences that make you excited to start planning.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Thoughtful recommendations",
    description:
      "Explore holiday ideas with the details that help you decide what feels right.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Easy to get started",
    description:
      "Found somewhere you love? Tell us what you're looking for and take the next step.",
  },
];

export default function WhyAwesomeTrips() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#102C2A] px-6 py-24 text-[#F5F0E7] md:px-10 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[3px] text-[#A8D8CB]">
              <span className="h-2 w-2 rounded-full bg-[#F48A61]" />
              THE AWESOME DIFFERENCE
            </span>

            <h2 className="max-w-[650px] font-serif text-5xl leading-[1.05] tracking-[-2px] sm:text-6xl lg:text-[76px]">
              It&apos;s not just
              <br />
              <span className="italic text-[#F48A61]">
                where you go.
              </span>
              <br />
              It&apos;s how it feels.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-[460px] lg:ml-auto lg:pb-3"
          >
            <p className="text-lg leading-8 text-white/65">
              Every great holiday starts with a feeling. We&apos;re here to help
              you turn that little spark of inspiration into somewhere
              wonderful to go.
            </p>

            <a
              href="#enquiry"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#F48A61] pb-2 text-sm font-semibold text-[#F48A61] transition-colors hover:text-white"
            >
              Let&apos;s find your somewhere
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        {/* Reasons grid */}
        <div className="mt-20 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group border-b border-white/15 py-9 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#F48A61]">
                    {reason.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#A8D8CB] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-12 font-serif text-2xl tracking-tight">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl italic text-[#A8D8CB]">
            Good holidays. Great memories. Your kind of somewhere.
          </p>

          <a
            href="#destinations"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] text-white/60 transition-colors hover:text-[#F48A61]"
          >
            EXPLORE DESTINATIONS
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
