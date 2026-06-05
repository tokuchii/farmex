import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [{ title: "About Us" }];
}

// ─── Timeline data ────────────────────────────────────────────────────────────
const timelineEvents = [
  {
    year: "2018",
    title: "Founded as Leads Agriventures Corporation",
    body: "Established as a proud subsidiary of LEADS Agri, the company began its journey focused on hybrid rice seed varietal testing and milled rice distribution to improve food security across the country.",
    accent: "gold",
  },
  {
    year: "2018–23",
    title: "Growth & diversification",
    body: "Expanded into financing for rice farmers, rental of large-scale agricultural machinery, and distribution of small farm tools and equipment — offering end-to-end solutions from planting to post-harvest.",
    accent: "gold",
  },
  {
    year: "2024",
    title: "Rebranded to Farmex Corporation",
    body: "As the company expanded its scope and vision, it was officially rebranded to Farmex Corporation — cementing its commitment to advancing Philippine agriculture through innovation, sustainability, and meaningful partnerships.",
    accent: "green",
  },
];

// ─── History Section ──────────────────────────────────────────────────────────
function HistorySection() {
  return (
    <section className="w-full relative py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/history.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) brightness(0.35)",
          transform: "scale(1.05)",
        }}
      />
      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2">
            Our story
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest mb-3">
            History
          </h2>
          <div className="w-10 h-1 bg-yellow-400 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {timelineEvents.map((event, index) => {
            const isLast = index === timelineEvents.length - 1;
            return (
              <motion.div
                key={event.year}
                className="flex gap-6"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
              >
                {/* Left col: dot + year + connector line */}
                <div className="flex flex-col items-center" style={{ minWidth: 72 }}>
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-white/20 flex-shrink-0 mt-1 ${
                      event.accent === "green"
                        ? "bg-green-400 ring-2 ring-green-400"
                        : "bg-yellow-400 ring-2 ring-yellow-400"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold mt-1.5 mb-1 ${
                      event.accent === "green" ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {event.year}
                  </span>
                  {!isLast && (
                    <div className="flex-1 w-0.5 bg-gradient-to-b from-yellow-400 to-green-400 rounded-full" />
                  )}
                </div>

                {/* Right col: card — frosted glass */}
                <div
                  className={`mb-8 flex-1 rounded-xl px-5 py-4 border backdrop-blur-sm ${
                    event.accent === "green"
                      ? "bg-white/10 border-green-400/30"
                      : "bg-white/10 border-white/20"
                  }`}
                >
                  <p className="text-sm font-semibold text-white mb-1">
                    {event.title}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {event.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ─── Mission & Vision pillars ─────────────────────────────────────────────────
const missionPillars = [
  "High-yielding variety testing",
  "Machinery rental & farm tools",
  "Technical consultations & training",
  "Farmer financing solutions",
];

const visionPillars = [
  "Strengthen rice food security",
  "Advance Philippine agriculture",
  "Sustainable farming practices",
  "Nationwide farmer partnerships",
];

// ─── Mission & Vision Section ─────────────────────────────────────────────────
function MissionVisionSection() {
  return (
    <>
      <section className="w-full relative border-t border-gray-100 py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Blurred background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/mission.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(6px) brightness(0.35)",
            transform: "scale(1.05)",
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2">
              What drives us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest mb-3">
              Our Mission
            </h2>
            <div className="w-10 h-1 bg-yellow-400 rounded-full" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Mission card */}
            <motion.div
              className="relative rounded-xl border border-white/20 overflow-hidden backdrop-blur-sm bg-white/10"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="h-1 w-full bg-green-400" />
              <div className="px-6 pt-6 pb-7">
                <div className="w-11 h-11 rounded-lg bg-green-400/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-1">
                  Mission
                </p>
                <p className="text-lg font-bold text-white mb-3">What we do every day</p>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  To bring all the technologies and provide holistic support to the Filipino rice farmer — from land preparation through to post-harvest.
                </p>
                <ul className="flex flex-col gap-2">
                  {missionPillars.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 bg-green-400/10 border border-green-400/20 rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision card */}
            <motion.div
              className="relative rounded-xl border border-white/20 overflow-hidden backdrop-blur-sm bg-white/10"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="h-1 w-full bg-yellow-400" />
              <div className="px-6 pt-6 pb-7">
                <div className="w-11 h-11 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-1">
                  Vision
                </p>
                <p className="text-lg font-bold text-white mb-3">Where we are headed</p>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  To be the leading end-to-end agricultural solutions provider in the Philippines — empowering farming communities through innovation and sustainability.
                </p>
                <ul className="flex flex-col gap-2">
                  {visionPillars.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quote banner */}
      <motion.div
        className="w-full bg-gradient-to-br from-[#2A4127] to-[#3B6D11] py-12 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-4xl leading-none text-yellow-400 font-serif mb-2">&ldquo;</p>
        <p className="text-white/90 text-base md:text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
          Advancing Philippine agriculture through innovation, sustainability, and meaningful partnerships with the farming community.
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
          Farmex Corporation
        </p>
      </motion.div>
    </>
  );
}

// ─── Main About Page ──────────────────────────────────────────────────────────
export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen">

      {/* ── Hero Banner ── */}
      <motion.div className="relative w-full h-auto overflow-hidden">
        {isClient && (
          <motion.img
            src="/bgabout.png"
            alt="Farm Image"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 mt-16 md:-mt-26">
            FARMEX AT A GLANCE
          </h2>
        </div>
      </motion.div>

      {/* ── History (timeline) ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HistorySection />
      </motion.div>

      {/* ── Mission & Vision + Quote banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MissionVisionSection />
      </motion.div>

      {/* ── Leadership Team ── */}
      <motion.div>
        <section className="relative w-full bg-gradient-to-tr from-[#788B5F] to-[#2A4127] min-h-screen">
          <div className="relative w-full h-1 bg-[#E0B100]" />

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-[24px] md:text-5xl font-extrabold text-white mb-4">
                  Farmex Leadership Team
                </h2>
                <div className="w-auto md:w-[620px] h-1 bg-[#E0B100] mx-auto" />
              </div>

              {/* Intro text */}
              <div className="text-white text-center text-base md:text-lg leading-relaxed mb-16 space-y-6">
                <p>
                  The leadership team of Farmex Corporation comprises dedicated and forward-thinking individuals committed to empowering Filipino rice farmers through innovation and comprehensive agricultural support.
                </p>
                <p>
                  Guided by the mission to deliver comprehensive technologies and services across the rice production cycle, the team oversees initiatives that include the continuous testing of high-yielding, locally adaptable rice seed varieties under Farmex Corporation.
                </p>
                <p>
                  Their leadership ensures that farmers receive end-to-end assistance—from land preparation to harvest—through technical consultations, machinery rentals, production training, and field demonstrations, driving sustainable growth and productivity in the local rice industry.
                </p>
              </div>

              {/* Personnel */}
              <div className="mb-16">
                {/* Chairman */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Fernando B. Malveda
                  </h3>
                  <p className="text-white text-lg tracking-wide">Chairman</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Jose Maria Fernando L. Malveda</h4>
                    <p className="text-white text-base">President</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Arturo A. Alejar Jr.</h4>
                    <p className="text-white text-base">Chief Operations Officer (COO)</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Angelica A. Belarmino</h4>
                    <p className="text-white text-base">Operations Manager</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Myrile Mae T. Adlus</h4>
                    <p className="text-white text-base">Business Development Manager</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Karlo Miguel F. Santos</h4>
                    <p className="text-white text-base">LTC Operations Manager</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Janine M. Villamor</h4>
                    <p className="text-white text-base">Admin and Sales Operations Manager</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Rey N. Rivera</h4>
                    <p className="text-white text-base">Warehouse Manager</p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Angelou Q. Reodique</h4>
                    <p className="text-white text-base">Communications Manager</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </motion.div>

    </div>
  );
}