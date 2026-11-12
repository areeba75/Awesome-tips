"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CreditCard,
  CalendarDays,
  MapPin,
  Pause,
  PhoneCall,
  Play,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";

/**
 * IMAGES: save four royalty-free photos (Unsplash / Pexels) into /public/hero/
 * and credit the photographers in your footer.
 *   greek-islands.jpg  algarve.jpg  mallorca.jpg  amalfi.jpg
 * Use ~2200px wide, compress to WebP/JPG under ~300KB each.
 * All prices below are illustrative demo figures.
 */
const MOODS = [
  {
    id: "summer",
    phrase: "summer.",
    place: "Greek Islands",
    tagline: "Chasing the Aegean blue.",
    price: 649,
    image: "/greek-islands.png",
    alt: "White-washed Greek island village above a deep blue sea",
  },
  {
    id: "mornings",
    phrase: "slow mornings.",
    place: "Algarve",
    tagline: "Coffee on the cliffs, nowhere to be.",
    price: 429,
    image: "/algarve.jpg",
    alt: "Golden cliffs and turquoise water on the Algarve coast",
  },
  {
    id: "family",
    phrase: "family time.",
    place: "Mallorca",
    tagline: "Sandy bays and pools the kids won't leave.",
    price: 389,
    image: "/mallorca.jpg",
    alt: "Families on a sandy Mallorca beach",
  },
  {
    id: "two",
    phrase: "time for two.",
    place: "Amalfi Coast",
    tagline: "Lemon groves and long, late dinners.",
    price: 799,
    image: "/amalfi.jpg",
    alt: "Colourful clifftop houses on the Amalfi Coast at sunset",
  },
] as const;

const DESTINATIONS = [
  "Greek Islands",
  "Algarve",
  "Mallorca",
  "Amalfi Coast",
  "Canary Islands",
  "Cyprus",
  "Turkey",
];
const AIRPORTS = ["London (any)", "Manchester", "Birmingham", "Glasgow", "Bristol", "Edinburgh"];
const TRAVELLERS = ["1 adult", "2 adults", "2 adults, 1 child", "2 adults, 2 children", "3+ adults"];

const AUTOPLAY_MS = 6500;
const GOLD = "#FFC857";

type SearchValues = {
  destination: string;
  airport: string;
  month: string;
  travellers: string;
  flexible: boolean;
};

export default function Hero({ onSearch }: { onSearch?: (values: SearchValues) => void }) {
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const destRef = useRef<HTMLSelectElement>(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false); // user pressed pause
  const [interacting, setInteracting] = useState(false); // focus/hover inside finder
  const [months, setMonths] = useState<string[]>([]);
  const [values, setValues] = useState<SearchValues>({
    destination: "",
    airport: "",
    month: "Any month",
    travellers: "2 adults",
    flexible: true,
  });
  const [errors, setErrors] = useState<{ destination?: string; airport?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const mood = MOODS[active];
  const playing = !reduceMotion && !paused && !interacting;

  // Months are built on the client to avoid hydration mismatches.
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });
    const now = new Date();
    setMonths(
      Array.from({ length: 12 }, (_, i) =>
        fmt.format(new Date(now.getFullYear(), now.getMonth() + i, 1))
      )
    );
  }, []);

  // Autoplay (off for reduced motion, pause button, or while using the finder).
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % MOODS.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [playing, active]);

  const selectMood = (i: number) => {
    setActive(i);
    // Picking a mood pre-fills the finder with that mood's destination.
    setValues((v) => ({ ...v, destination: MOODS[i].place }));
    setErrors((e) => ({ ...e, destination: undefined }));
  };

  const update = <K extends keyof SearchValues>(key: K, value: SearchValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setSubmitted(false);
    if (key === "destination" || key === "airport") {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!values.destination) next.destination = "Choose where you'd like to go";
    if (!values.airport) next.airport = "Choose your departure airport";
    setErrors(next);
    if (Object.keys(next).length) {
      (next.destination ? destRef.current : document.getElementById(`${uid}-airport`))?.focus();
      return;
    }
    setSubmitted(true);
    onSearch?.(values);
    window.dispatchEvent(new CustomEvent("awesometrips:search", { detail: values }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Find your holiday"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0B2B29] text-white"
    >
      {/* Background: stacked photos cross-fade, active one drifts slowly */}
      {MOODS.map((m, i) => (
        <motion.div
          key={m.id}
          aria-hidden
          className="absolute inset-0 -z-30"
          initial={false}
          animate={{ opacity: i === active ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{ scale: i === active && playing ? 1.08 : 1 }}
            transition={{ duration: i === active ? AUTOPLAY_MS / 1000 + 1 : 1.2, ease: "linear" }}
          >
            <Image
              src={m.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Readability overlays: guarantee text contrast on any photo */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061a18]/90 via-[#061a18]/55 to-[#061a18]/10" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#061a18]/85 via-transparent to-[#061a18]/40" />

      {/* Top: headline + synced offer card */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center gap-10 px-6 pb-8 pt-28 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-20 lg:pt-32">
        <div className="max-w-[760px]">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[42px] leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Somewhere feels like
            <span className="mt-1 block min-h-[1.1em]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mood.id}
                  className="relative inline-block whitespace-nowrap"
                  style={{ color: GOLD }}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -24 }}
                  transition={{ duration: 0.45 }}
                >
                  {mood.phrase}
                  <svg
                    aria-hidden
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full"
                  >
                    <motion.path
                      d="M2 8 C 60 2, 140 12, 298 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={reduceMotion ? false : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    />
                  </svg>
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <p className="mb-7 mt-7 max-w-[440px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
            Pick a feeling, we&apos;ll find the holiday. Tell us where from and when, and
            our team will come back with ideas.
          </p>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <button
              type="button"
              onClick={() => {
                destRef.current?.scrollIntoView({
                  behavior: reduceMotion ? "auto" : "smooth",
                  block: "center",
                });
                destRef.current?.focus({ preventScroll: true });
              }}
              className="flex min-h-[54px] items-center gap-4 rounded-full px-7 text-[15px] font-bold text-[#0B2B29] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              style={{ backgroundColor: GOLD }}
            >
              Find your somewhere
              <ArrowUpRight size={18} aria-hidden />
            </button>
            <a
              href="#destinations"
              className="text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-8 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Browse destinations
            </a>
          </div>

          {/* Mood selector: each choice changes the photo, card and finder */}
          <div className="mt-8 flex items-center gap-3">
            <div
              role="group"
              aria-label="Choose a holiday mood"
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
            >
              {MOODS.map((m, i) => (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => selectMood(i)}
                  className={`relative shrink-0 overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    i === active
                      ? "border-[#FFC857] bg-white/15 text-white"
                      : "border-white/30 text-white/85 hover:border-white/70"
                  }`}
                >
                  {m.phrase.replace(".", "")}
                  {i === active && playing && (
                    <motion.span
                      key={`${m.id}-progress`}
                      aria-hidden
                      className="absolute bottom-0 left-0 h-[3px] bg-[#FFC857]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play hero slideshow" : "Pause hero slideshow"}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {paused ? <Play size={15} aria-hidden /> : <Pause size={15} aria-hidden />}
              </button>
            )}
          </div>

          {/* Mobile-only price line (the card is desktop-only) */}
          <p className="mt-5 text-sm text-white/85 lg:hidden">
            {mood.place}: sample escape from <strong>£{mood.price} pp</strong>{" "}
            <span className="text-white/70">(illustrative demo price)</span>
          </p>
        </div>

        {/* Floating offer card, synced with the active mood */}
        <div className="hidden w-[min(380px,90vw)] shrink-0 lg:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={mood.id}
              aria-label={`Sample offer: ${mood.place}`}
              className="overflow-hidden rounded-[20px] bg-[#0F3B38]/85 shadow-2xl backdrop-blur-md"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <div className="relative h-[190px] w-full">
                <Image src={mood.image} alt={mood.alt} fill sizes="380px" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-[#A8D8CB]">{mood.place}</p>
                <h2 className="mt-1 font-sans text-[22px] font-normal leading-tight">
                  {mood.tagline}
                </h2>
                <div className="mt-4 flex items-end justify-between border-t border-white/25 pt-4">
                  <div>
                    <p className="text-[13px] text-white/85">Sample escape from</p>
                    <p className="text-[26px] font-bold leading-tight">£{mood.price} pp</p>
                    <p className="text-[13px] text-white/75">Illustrative demo price</p>
                  </div>
                  <a
                    href="#destinations"
                    aria-label={`Explore ${mood.place}`}
                    className="grid h-11 w-11 place-items-center rounded-full text-[#0B2B29] transition-transform duration-300 hover:rotate-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ backgroundColor: GOLD }}
                  >
                    <ArrowUpRight size={20} aria-hidden />
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom: holiday finder inside the hero */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 md:px-10 lg:px-20">
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Holiday finder (demo)"
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={() => setInteracting(false)}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          className="rounded-2xl bg-[#FBF7EF] p-4 text-[#0B2B29] shadow-2xl md:p-5"
        >
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:items-end">
            <Field label="Where to" htmlFor={`${uid}-dest`} icon={<MapPin size={18} />} error={errors.destination} errorId={`${uid}-dest-err`}>
              <select
                id={`${uid}-dest`}
                ref={destRef}
                value={values.destination}
                onChange={(e) => update("destination", e.target.value)}
                aria-invalid={!!errors.destination}
                aria-describedby={errors.destination ? `${uid}-dest-err` : undefined}
                className="finder-input"
              >
                <option value="">Choose a destination</option>
                <option value="Surprise me">Surprise me</option>
                {DESTINATIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </Field>

            <Field label="Flying from" htmlFor={`${uid}-airport`} icon={<Plane size={18} />} error={errors.airport} errorId={`${uid}-airport-err`}>
              <select
                id={`${uid}-airport`}
                value={values.airport}
                onChange={(e) => update("airport", e.target.value)}
                aria-invalid={!!errors.airport}
                aria-describedby={errors.airport ? `${uid}-airport-err` : undefined}
                className="finder-input"
              >
                <option value="">Choose an airport</option>
                {AIRPORTS.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </Field>

            <Field label="When" htmlFor={`${uid}-month`} icon={<CalendarDays size={18} />}>
              <select
                id={`${uid}-month`}
                value={values.month}
                onChange={(e) => update("month", e.target.value)}
                className="finder-input"
              >
                <option>Any month</option>
                {months.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </Field>

            <Field label="Who's going" htmlFor={`${uid}-who`} icon={<Users size={18} />}>
              <select
                id={`${uid}-who`}
                value={values.travellers}
                onChange={(e) => update("travellers", e.target.value)}
                className="finder-input"
              >
                {TRAVELLERS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>

            <button
              type="submit"
              className="min-h-[52px] rounded-xl bg-[#0B2B29] px-8 text-[15px] font-bold text-white transition-colors hover:bg-[#143f3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2B29] md:col-span-2 lg:col-span-1"
            >
              Find holidays
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-sm font-medium">
              <input
                type="checkbox"
                checked={values.flexible}
                onChange={(e) => update("flexible", e.target.checked)}
                className="h-5 w-5 accent-[#0B2B29]"
              />
              I&apos;m flexible by a few days
            </label>
            <p role="status" className="text-sm font-medium text-[#1d5c55]">
              {submitted ? "Thanks. Scroll down to tell us a little more and send your enquiry." : ""}
            </p>
          </div>
        </form>

        {/* Trust strip: placeholders only, replace once verified */}
        <ul className="mt-4 flex flex-col gap-2 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li className="flex items-center gap-2">
            <ShieldCheck size={17} aria-hidden style={{ color: GOLD }} />
            ATOL protection: [placeholder, add licence number]
          </li>
          <li className="flex items-center gap-2">
            <CreditCard size={17} aria-hidden style={{ color: GOLD }} />
            Flexible payment options: [placeholder]
          </li>
          <li className="flex items-center gap-2">
            <PhoneCall size={17} aria-hidden style={{ color: GOLD }} />
            Talk to a real person: [placeholder phone]
          </li>
        </ul>
      </div>

      {/* Scoped styles for the finder inputs */}
      <style jsx global>{`
        .finder-input {
          width: 100%;
          min-height: 52px;
          border-radius: 12px;
          border: 1px solid #c9c2b4;
          background: #fff;
          padding: 0 14px 0 44px;
          font-size: 15px;
          color: #0b2b29;
        }
        .finder-input:focus-visible {
          outline: 2px solid #0b2b29;
          outline-offset: 2px;
        }
        .finder-input[aria-invalid="true"] {
          border-color: #b42318;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  error,
  errorId,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: ReactNode;
  error?: string;
  errorId?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-[#2f4a47]">
        {label}
      </label>
      <div className="relative">
        <span aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2f4a47]">
          {icon}
        </span>
        {children}
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-[13px] font-medium text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}