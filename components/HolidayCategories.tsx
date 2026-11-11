
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
  {
    number: "01",
    tag: "FOR THE TWO OF YOU",
    title: "Love looks good\non holiday.",
    description:
      "Slow mornings, sunset dinners and places made for two.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-7",
  },
  {
    number: "02",
    tag: "FOR THE WHOLE CREW",
    title: "Little moments.\nBig adventures.",
    description:
      "More splashing, exploring and memories together.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-5",
  },
  {
    number: "03",
    tag: "FOR THE EXTRAORDINARY",
    title: "Go on.\nTreat yourself.",
    description:
      "Beautiful stays, all-inclusive indulgence and a little luxury.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-12",
  },
];

export default function HolidayCategories() {
  return (
    <section
      id="holidays"
      className="bg-[#F5F0E7] px-5 py-20 md:px-10 md:py-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">

          <div className="max-w-[650px]">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] text-[#D77D5B]">
              <Sparkles size={15} />
              YOUR HOLIDAY, YOUR WAY
            </div>

            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-[#102C2A] sm:text-5xl md:text-6xl">
              Different dreams.
              <br />
              <span className="italic text-[#D77D5B]">
                One perfect escape.
              </span>
            </h2>
          </div>

          <p className="max-w-[320px] text-sm leading-7 text-[#737A72]">
            Whether it&apos;s romance, family adventures or a little luxury,
            there&apos;s a somewhere waiting just for you.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {categories.map((category, index) => (
            <motion.article
              key={category.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className={`group relative isolate min-h-[430px] overflow-hidden rounded-[22px] ${category.className} ${
                index === 2 ? "lg:min-h-[380px]" : ""
              }`}
            >

              {/* Background Image */}
              <div
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('${category.image}')`,
                }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081E1C]/90 via-[#081E1C]/25 to-[#081E1C]/5 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Card Content */}
              <div className="flex h-full min-h-[430px] flex-col justify-between p-6 text-white md:p-9">

                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[9px] font-bold tracking-[2px] backdrop-blur-md">
                    {category.tag}
                  </span>

                  <span className="font-serif text-xl text-white/80">
                    {category.number}
                  </span>
                </div>

                {/* Bottom */}
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                  <div className="max-w-[500px]">
                    <h3 className="whitespace-pre-line font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
                      {category.title}
                    </h3>

                    <p className="mt-4 max-w-[360px] text-xs leading-6 text-white/80 md:text-sm">
                      {category.description}
                    </p>
                  </div>

                  <a
                    href="#enquiry"
                    aria-label={`Enquire about ${category.tag.toLowerCase()}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F48A61] text-[#102C2A] transition-all duration-300 group-hover:rotate-45 group-hover:bg-white"
                  >
                    <ArrowUpRight size={22} />
                  </a>

                </div>
              </div>
            </motion.article>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-9 flex flex-col gap-3 border-t border-[#DCD5C9] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-lg italic text-[#102C2A]">
            Your kind of holiday is out there.
          </p>

          <a
            href="#enquiry"
            className="flex items-center gap-2 text-xs font-bold text-[#D77D5B] transition-colors hover:text-[#102C2A]"
          >
            LET&apos;S FIND IT
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
