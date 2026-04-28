"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as any },
});

const examLogos = [
  { name: "Banking", logo: "/assets/banking.png" },
  { name: "SSC", logo: "/assets/ssc.png" },
  { name: "Railway", logo: "/assets/railway.png" },
  { name: "AFCAT", logo: "/assets/afcat.png" },
  { name: "CDS", logo: "/assets/cds.png" },
  { name: "RBI", logo: "/assets/rbi.png" },
];

const loopLogos = [...examLogos, ...examLogos];

const features = [
  { label: "Free PYQs", color: "#16a34a" },
  { label: "Live Classes", color: "#2563eb" },
  { label: "Mock Tests", color: "#d97706" },
  { label: "Expert Faculty", color: "#7c3aed" },
];

const Hero = ({ onStartClick }: { onStartClick?: () => void }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* â”€â”€ Background layers â”€â”€ */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(100,116,139,0.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
        {/* Ambient glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-125 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(249,115,22,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[25%] right-[-5%] w-150 h-125 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-125 h-87.5 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ── Decorative SVG shapes ── */}

        {/* Concentric arc rings — top-right */}
        <svg
          className="absolute -top-24 -right-24 opacity-[0.06]"
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="rgba(99,102,241,0.4)"
            strokeWidth="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="220"
            stroke="rgba(99,102,241,0.4)"
            strokeWidth="0.8"
            strokeDasharray="6 10"
          />
          <circle
            cx="300"
            cy="300"
            r="160"
            stroke="rgba(99,102,241,0.4)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Rotated mesh grid — bottom-left */}
        <svg
          className="absolute -bottom-16 -left-20 opacity-[0.18]"
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          style={{ transform: "rotate(-18deg)" }}
        >
          {Array.from({ length: 8 }).map((_, col) =>
            Array.from({ length: 8 }).map((_, row) => (
              <rect
                key={`${col}-${row}`}
                x={col * 50 + 4}
                y={row * 50 + 4}
                width="42"
                height="42"
                rx="6"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            )),
          )}
        </svg>

        {/* Diagonal slash lines — top-left */}
        <svg
          className="absolute top-10 left-10 opacity-[0.07]"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          {[0, 20, 40, 60, 80].map((offset) => (
            <line
              key={offset}
              x1={offset}
              y1="0"
              x2={offset + 40}
              y2="120"
              stroke="#f97316"
              strokeWidth="1.2"
            />
          ))}
        </svg>

        {/* Floating rounded-square blob — upper-left */}
        <motion.div
          animate={{ y: [0, -22, 0], x: [0, 10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[7%] w-20 h-20 rounded-4xl opacity-[0.12]"
          style={{ background: "linear-gradient(135deg, #f97316, #fb923c)" }}
        />

        {/* Floating circle blob — right middle */}
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[52%] right-[5%] w-14 h-14 rounded-full opacity-[0.09]"
          style={{ background: "linear-gradient(135deg, #2563eb, #60a5fa)" }}
        />

        {/* Floating triangle — bottom-left area */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-[24%] left-[16%] w-10 h-10 opacity-[0.09]"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Pulsing dot — center-left */}
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[42%] left-[40%] w-5 h-5 rounded-full"
          style={{ background: "#f97316" }}
        />

        {/* Bottom wave layers */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: "120px" }}
        >
          <path
            d="M0,60 C200,110 400,10 600,60 C800,110 1000,20 1200,60 C1320,88 1400,50 1440,60 L1440,120 L0,120 Z"
            fill="rgba(249,115,22,0.045)"
          />
          <path
            d="M0,80 C240,30 480,100 720,70 C960,40 1200,90 1440,80 L1440,120 L0,120 Z"
            fill="rgba(37,99,235,0.03)"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* â”€â”€ Left Content â”€â”€ */}
          <div>
            {/* Announcement badge */}
            <motion.div {...fadeUp(0)} className="mb-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 cursor-pointer group"
                style={{
                  background:
                    "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
                  border: "1px solid rgba(249,115,22,0.3)",
                  boxShadow:
                    "0 0 0 4px rgba(249,115,22,0.07), 0 2px 12px rgba(249,115,22,0.12)",
                }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                <span className="text-sm font-semibold text-orange-700">
                  New batches starting Enroll Free
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-500 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.div>

            {/* Headline */}
<motion.h1
  {...fadeUp(0.1)}
  className="text-5xl md:text-6xl xl:text-[4.5rem] font-black tracking-[-0.035em] text-slate-100 leading-[1.05] mb-6"
>
  Crack Any
  <br />
  <span className="relative inline-block">
    
    {/* Gradient Text */}
    <span
      className="relative z-10"
      style={{
        background:
          "linear-gradient(120deg, #818cf8 0%, #22d3ee 50%, #c084fc 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textShadow: "0 0 35px rgba(99,102,241,0.25)",
      }}
    >
      Govt Exam
    </span>

    {/* Refined Animated Underline */}
    <motion.span
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
      style={{
        background:
          "linear-gradient(90deg, rgba(129,140,248,0.8), rgba(34,211,238,0.4), transparent)",
        filter: "blur(0.3px)",
      }}
    />
  </span>{" "}
  in Odisha
</motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mb-10"
            >
              Live classes, free PYQs, AI-powered mock tests & expert mentorship
              & everything your rank depends on.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              {/* Primary */}
              <motion.button
                whileHover={{
                  y: -3,
                  boxShadow: "0 28px 50px -10px rgba(249,115,22,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={onStartClick}
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-base shadow-[0_18px_40px_-10px_rgba(249,115,22,0.35)]"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                {/* Shine sweep on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    animation: "shimmer 0.7s ease forwards",
                    background:
                      "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                  }}
                />
                <Zap className="w-4 h-4 fill-white relative z-10" />
                <span className="relative z-10">Start for Free</span>
              </motion.button>

              {/* Secondary */}
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-slate-700 text-base bg-white border border-slate-200 hover:border-orange-200 hover:bg-orange-50/50 transition-colors shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <Play className="w-3 h-3 text-orange-600 fill-orange-600 translate-x-px" />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Avatars + rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[
                    "/assets/profile (10).png",
                    "/assets/g-profile2.png",
                    "/assets/profile (4).png",
                    "/assets/g-profile4.png",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white"
                    >
                      <Image
                        src={img}
                        alt={`Student ${i + 1}`}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                    <span className="ml-1 text-xs font-black text-slate-700">
                      4.9
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                    50,000+ students trust us
                  </p>
                </div>
              </div>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 shadow-sm"
                    style={{ color: f.color }}
                  >
                    <CheckCircle className="w-3 h-3" />
                    {f.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* â”€â”€ Right â€” Visual Composition â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative rings */}
            <div
              className="absolute w-120 h-120 rounded-full border border-dashed border-orange-200/70 pointer-events-none"
              style={{ animation: "spin 40s linear infinite" }}
            />
            <div className="absolute w-97.5 h-97.5 rounded-full border border-slate-100 pointer-events-none" />
            <div className="absolute w-75 h-75 rounded-full border border-orange-50 pointer-events-none" />

            {/* Main image card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-82.5 h-103.75 rounded-[2.5rem] overflow-hidden"
              style={{
                boxShadow:
                  "0 48px 96px -24px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
            >
              <Image
                src="/assets/images/hero-banner-1.jpg"
                alt="Student learning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

              {/* Live class inner overlay */}
              <div
                className="absolute bottom-5 left-4 right-4 rounded-2xl p-3.5 backdrop-blur-md"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-2">
                  Live Now
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <Play className="w-3.5 h-3.5 text-white fill-white translate-x-px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-bold truncate">
                      Reasoning in SSC CGL
                    </p>
                    <p className="text-white/50 text-[10px]">2,340 watching</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-red-400 text-[10px] font-bold">
                      LIVE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating card â€” Success Rate */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute top-6 -right-6 z-20 bg-white rounded-2xl p-4 border border-slate-100"
              style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.14)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-base shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                  }}
                >
                  98%
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Success Rate
                  </p>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                    Govt exam selections
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card â€” Rating */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -left-10 z-20 bg-white rounded-2xl p-4 border border-slate-100"
              style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.14)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">4.9 / 5.0</p>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                    15,000+ verified reviews
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Free access pill */}
            <motion.div
              animate={{ y: [0, -7, 0], x: [0, 3, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute top-[38%] -left-12 z-20 bg-white rounded-full px-3.5 py-1.5 flex items-center gap-2 border border-slate-100"
              style={{ boxShadow: "0 8px 24px -4px rgba(0,0,0,0.1)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700">
                Free Access
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* â”€â”€ Exam Logos Marquee â”€â”€ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-10 pt-10 border-t border-slate-100"
        >
          <p className="text-center text-[12px] font-black text-slate-400 uppercase tracking-[0.25em] mb-8">
            India's most competitive exams in one platform
          </p>
          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex gap-14 items-center w-max"
              style={{ animation: "marquee 28s linear infinite" }}
            >
              {loopLogos.map((exam, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 shrink-0 opacity-55 hover:opacity-100 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-orange-100">
                    <Image
                      src={exam.logo}
                      alt={exam.name}
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-slate-600 whitespace-nowrap group-hover:text-slate-900 transition-colors duration-300">
                    {exam.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade → seamless blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
        <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-orange-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
