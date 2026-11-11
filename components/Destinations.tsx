
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, MoveUpRight } from "lucide-react";

const destinations = [
  {
    name: "Cannes Journey",
    country: "FRENCH RIVIERA · FRANCE",
    description: "Golden afternoons. Riviera evenings. A little French magic.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
    className: "md:row-span-2 min-h-[460px] md:min-h-[620px]",
    featured: true,
    number: "01",
  },
  {
    name: "The Cliffs of Cinque Terre",
    country: "LIGURIA · ITALY",
    description: "Colourful villages, endless coastal views.",
    image:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1200&q=85",
    className: "min-h-[300px] md:min-h-0",
    featured: false,
    number: "02",
  },
  {
    name: "Somewhere in the Algarve",
    country: "ALGARVE · PORTUGAL",
    description: "Wild coastlines and beautifully slow days.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
    className: "min-h-[300px] md:min-h-0",
    featured: false,
    number: "03",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-[#F5F0E7] px-5 py-20 md:px-10 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* Section Introduction */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">

          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[3px] text-[#D77D5B]"
            >
              <span className="h-px w-9 bg-[#D77D5B]" />
              A WORLD OF POSSIBILITIES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl leading-[1.08] tracking-[-2px] text-[#102C2A] sm:text-5xl md:text-6xl lg:text-[72px]"
            >
              Curated adventures.
              <br />
              <span className="italic text-[#D77D5B]">
                Just for you.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[340px]"
          >
            <p className="text-sm leading-7 text-[#747B72]">
              From sun-drenched coastlines to charming European hideaways,
              discover places that make you want to pack your bags.
            </p>

            <a
              href="#holiday-finder"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#102C2A] transition-colors hover:text-[#D77D5B]"
            >
              FIND YOUR NEXT ESCAPE
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Editorial Destination Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {destinations.map((destination, index) => (
            <motion.article
              key={destination.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`group relative isolate overflow-hidden rounded-[20px] ${destination.className}`}
            >
              {/* Destination Image */}
              <div
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${destination.image}')`,
                }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071C19]/85 via-[#071C19]/15 to-transparent" />

              {/* Top Label */}
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[9px] font-bold tracking-[2px] text-white backdrop-blur-md">
                  {destination.country}
                </span>

                <span className="font-serif text-xl italic text-white/80">
                  {destination.number}
                </span>
              </div>

              {/* Destination Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">

                <div className="mb-3 flex items-center gap-2 text-[9px] font-bold tracking-[2px] text-[#A8D8CB]">
                  <MapPin size={13} />
                  DISCOVER SOMEWHERE NEW
                </div>

                <h3
                  className={`max-w-[500px] font-serif leading-[1.08] tracking-tight ${
                    destination.featured
                      ? "text-4xl sm:text-5xl md:text-6xl"
                      : "text-3xl md:text-4xl"
                  }`}
                >
                  {destination.name}
                </h3>

                <div className="mt-4 flex items-end justify-between gap-4">
                  <p className="max-w-[300px] text-xs leading-6 text-white/80 md:text-sm">
                    {destination.description}
                  </p>

                  <a
                    href="#holiday-finder"
                    aria-label={`Explore ${destination.name}`}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F48A61] text-[#102C2A] transition-all duration-300 group-hover:rotate-45 group-hover:bg-white"
                  >
                    <MoveUpRight size={21} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#DCD5C9] pt-7 sm:flex-row sm:items-center">
          <p className="font-serif text-xl italic text-[#68746A]">
            The world is full of somewhere.
          </p>

          <a
            href="#holiday-finder"
            className="group flex items-center gap-3 text-[11px] font-bold tracking-[1.5px] text-[#102C2A]"
          >
            LET&apos;S FIND YOURS
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#102C2A]/30 transition-all group-hover:bg-[#102C2A] group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
