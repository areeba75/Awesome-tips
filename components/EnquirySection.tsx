
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Plane,
  Users,
} from "lucide-react";

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    departure: "",
    date: "",
    travellers: "2",
    holidayType: "Not sure yet",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const inputClass =
    "w-full border-b border-[#102C2A]/20 bg-transparent py-3 text-sm text-[#102C2A] outline-none transition-colors placeholder:text-[#102C2A]/40 focus:border-[#F48A61]";

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#F5F0E7] px-6 py-24 md:px-10 md:py-20 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px] text-[#D77D5B]">
            <span className="h-2 w-2 rounded-full bg-[#F48A61]" />
            YOUR NEXT ADVENTURE
          </span>

          <h2 className="mt-7 max-w-[570px] font-serif text-5xl leading-[1.05] tracking-[-2px] text-[#102C2A] sm:text-6xl lg:text-[76px]">
            So, where
            <br />
            shall we
            <br />
            <span className="italic text-[#D77D5B]">take you?</span>
          </h2>

          <p className="mt-7 max-w-[420px] text-base leading-8 text-[#102C2A]/65">
            Tell us a little about your dream escape. Share your
            ideas, and let&apos;s get your next adventure started.
          </p>

          <div className="mt-12 space-y-6">
            {[
              {
                icon: MapPin,
                title: "Your destination",
                text: "Somewhere you've always wanted to go.",
              },
              {
                icon: CalendarDays,
                title: "Your perfect timing",
                text: "Whenever you're ready to get away.",
              },
              {
                icon: Users,
                title: "Your travel crew",
                text: "A solo escape, a couple's trip or family time.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A8D8CB]/40 text-[#102C2A]">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#102C2A]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#102C2A]/55">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Enquiry form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-[28px] bg-white p-6 shadow-[0_20px_70px_rgba(16,44,42,0.08)] sm:p-10 lg:p-12"
        >
          {submitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A8D8CB]/40 text-[#102C2A]">
                <CheckCircle2 size={32} />
              </div>

              <h3 className="mt-7 font-serif text-4xl text-[#102C2A]">
                Your adventure starts here.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#102C2A]/60">
                Thanks, {form.name}! Your enquiry has been prepared
                successfully in this demo.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    destination: "",
                    departure: "",
                    date: "",
                    travellers: "2",
                    holidayType: "Not sure yet",
                  });
                }}
                className="mt-8 text-sm font-semibold text-[#D77D5B] hover:text-[#102C2A]"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="mb-9">
                <span className="text-xs font-semibold tracking-[2.5px] text-[#D77D5B]">
                  LETa&apos;S MAKE IT HAPPEN
                </span>

                <h3 className="mt-3 font-serif text-3xl text-[#102C2A] sm:text-4xl">
                  Tell us what you&apos;re dreaming of.
                </h3>

                <p className="mt-3 text-sm text-[#102C2A]/55">
                  A few details are all we need to get started.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-[#102C2A]/70">
                      Your name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#102C2A]/70">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-[#102C2A]/70">
                      Where would you like to go?
                    </label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Choose destination</option>
                      <option>Greece</option>
                      <option>Spain</option>
                      <option>Italy</option>
                      <option>Turkey</option>
                      <option>Maldives</option>
                      <option>Not decided yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#102C2A]/70">
                      Departure airport
                    </label>
                    <select
                      name="departure"
                      value={form.departure}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Choose airport</option>
                      <option>London Heathrow</option>
                      <option>London Gatwick</option>
                      <option>Manchester</option>
                      <option>Birmingham</option>
                      <option>Bristol</option>
                      <option>Edinburgh</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-[#102C2A]/70">
                      When would you like to travel?
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    //   min={new Date().toISOString().split("T")[0]}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#102C2A]/70">
                      Number of travellers
                    </label>
                    <select
                      name="travellers"
                      value={form.travellers}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                        <option key={number} value={number}>
                          {number} {number === 1 ? "Traveller" : "Travellers"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#102C2A]/70">
                    What kind of holiday?
                  </label>
                  <select
                    name="holidayType"
                    value={form.holidayType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>Not sure yet</option>
                    <option>All-inclusive</option>
                    <option>Luxury escape</option>
                    <option>Family holiday</option>
                    <option>Couples getaway</option>
                    <option>Adventure holiday</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#F48A61] px-7 py-4 text-sm font-bold text-[#102C2A] transition-all duration-300 hover:bg-[#102C2A] hover:text-white"
                >
                  Send my enquiry
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-[#102C2A]/40">
                  This is a demonstration form. No personal details are
                  transmitted or stored.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
