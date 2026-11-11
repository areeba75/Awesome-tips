"use client";

import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Plane,
  CalendarDays,
  Users,
  Search,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

function getTodayString() {
  const today = new Date();
  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function HolidayFinder() {
  const [destination, setDestination] = useState("");
  const [airport, setAirport] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2 Adults");
  const [message, setMessage] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Sync the DOM `min` attribute after mount (no setState needed)
  useEffect(() => {
    if (dateInputRef.current) {
      dateInputRef.current.min = getTodayString();
    }
  }, []);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!destination || !airport || !date) {
      setMessage("Please complete your destination, airport and travel date.");
      return;
    }

    // `min` doesn't block typed/pasted dates in every browser, so check here too
    if (date < getTodayString()) {
      setMessage("Please choose a travel date that is today or later.");
      return;
    }

    setMessage(
      `Your demo search is ready! ${destination}, departing from ${airport}, on ${date}, for ${travellers}.`
    );
  }

  return (
    <section
      id="holiday-finder"
      className="relative z-20 mt-12 bg-[#F5F0E7] px-5 pb-12 pt-0 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Search Panel */}
        <div className="rounded-[24px] border border-[#E9E2D6] bg-white p-6 shadow-[0_20px_60px_rgba(16,44,42,0.10)] md:p-9 lg:p-10">

          {/* Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>
              <div className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] text-[#D77D5B]">
                <Sparkles size={15} />
                YOUR NEXT ESCAPE STARTS HERE
              </div>

              <h2 className="font-serif text-3xl tracking-tight text-[#102C2A] sm:text-4xl md:text-5xl">
                Where shall we take you?
              </h2>

              <p className="mt-3 text-sm text-[#777E77]">
                A little sunshine is closer than you think.
              </p>
            </div>

            <span className="hidden text-xs font-medium text-[#8B938B] md:block">
              LET&apos;S MAKE IT HAPPEN
            </span>
          </div>

          {/* Search Form */}
        
{/* Search Form */}
<form onSubmit={handleSearch}>

  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr_auto]">

    {/* Destination */}
    <div className="rounded-xl border border-[#E9E7E1] bg-[#FAF9F6] p-3 transition-colors focus-within:border-[#D77D5B]">
      <label
        htmlFor="destination"
        className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[1.5px] text-[#8B938B]"
      >
        <MapPin size={14} className="text-[#D77D5B]" />
        DESTINATION
      </label>

      <select
        id="destination"
        value={destination}
        onChange={(e) => {
          setDestination(e.target.value);
          setMessage("");
        }}
        className="w-full cursor-pointer bg-transparent text-sm font-semibold text-[#102C2A] outline-none"
      >
        <option value="">Where to?</option>
        <option value="Greece">Greece</option>
        <option value="Spain">Spain</option>
        <option value="Italy">Italy</option>
        <option value="Turkey">Turkey</option>
        <option value="Maldives">Maldives</option>
        <option value="Portugal">Portugal</option>
      </select>
    </div>

    {/* Departure Airport */}
    <div className="rounded-xl border border-[#E9E7E1] bg-[#FAF9F6] p-3 transition-colors focus-within:border-[#D77D5B]">
      <label
        htmlFor="airport"
        className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[1.5px] text-[#8B938B]"
      >
        <Plane size={14} className="text-[#D77D5B]" />
        DEPARTING FROM
      </label>

      <select
        id="airport"
        value={airport}
        onChange={(e) => {
          setAirport(e.target.value);
          setMessage("");
        }}
        className="w-full cursor-pointer bg-transparent text-sm font-semibold text-[#102C2A] outline-none"
      >
        <option value="">Choose airport</option>
        <option value="London Heathrow">London Heathrow</option>
        <option value="London Gatwick">London Gatwick</option>
        <option value="Manchester">Manchester</option>
        <option value="Birmingham">Birmingham</option>
        <option value="Bristol">Bristol</option>
        <option value="Edinburgh">Edinburgh</option>
      </select>
    </div>

    {/* Travel Date */}
    <div className="rounded-xl border border-[#E9E7E1] bg-[#FAF9F6] p-3 transition-colors focus-within:border-[#D77D5B]">
      <label
        htmlFor="travel-date"
        className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[1.5px] text-[#8B938B]"
      >
        <CalendarDays size={14} className="text-[#D77D5B]" />
        WHEN?
      </label>

      <input
  id="travel-date"
  ref={dateInputRef}
  type="date"
  value={date}
  onChange={(e) => {
    setDate(e.target.value);
    setMessage("");
  }}
  className="w-full bg-transparent text-sm font-semibold text-[#102C2A] outline-none"
/>
    </div>

    {/* Travellers */}
    <div className="rounded-xl border border-[#E9E7E1] bg-[#FAF9F6] p-3 transition-colors focus-within:border-[#D77D5B]">
      <label
        htmlFor="travellers"
        className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[1.5px] text-[#8B938B]"
      >
        <Users size={14} className="text-[#D77D5B]" />
        WHO&apos;S GOING?
      </label>

      <select
        id="travellers"
        value={travellers}
        onChange={(e) => setTravellers(e.target.value)}
        className="w-full cursor-pointer bg-transparent text-sm font-semibold text-[#102C2A] outline-none"
      >
        <option>1 Adult</option>
        <option>2 Adults</option>
        <option>2 Adults, 1 Child</option>
        <option>2 Adults, 2 Children</option>
        <option>3 Adults</option>
        <option>4 Adults</option>
        <option>5+ Travellers</option>
      </select>
    </div>

    {/* Search Button - Desktop only */}
    <button
      type="submit"
      className="group hidden min-h-[65px] items-center justify-center gap-3 rounded-xl bg-[#F48A61] px-6 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#102C2A] lg:flex"
    >
      Find trips
      <Search
        size={18}
        className="transition-transform group-hover:scale-110"
      />
    </button>

  </div>

  {/* Search Button - Mobile and Tablet */}
  <div className="mt-5 flex justify-center lg:hidden">
    <button
      type="submit"
      className="group flex min-h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-[#F48A61] px-7 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#102C2A] sm:w-auto sm:min-w-[200px]"
    >
      Find trips
      <Search
        size={18}
        className="transition-transform group-hover:scale-110"
      />
    </button>
  </div>

  {/* Demo Search Feedback */}
  {message && (
    <div
      role="status"
      aria-live="polite"
      className="mt-5 rounded-xl bg-[#F5F0E7] p-3 text-sm leading-6 text-[#102C2A]"
    >
      {message}
    </div>
  )}

</form>


          {/* Bottom Note */}
          <div className="mt-7 flex flex-col gap-2 border-t border-[#EEEAE3] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-[#8B938B]">
              Not sure where to go? Let inspiration find you.
            </p>

            <a
              href="#destinations"
              className="group flex items-center gap-2 text-xs font-bold text-[#D77D5B]"
            >
              Explore our destinations
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
