import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const particles = [
    { size: 6, left: "8%", delay: "0s", duration: "14s", opacity: 0.35 },
    { size: 4, left: "18%", delay: "2.5s", duration: "18s", opacity: 0.25 },
    { size: 8, left: "27%", delay: "5s", duration: "16s", opacity: 0.3 },
    { size: 5, left: "38%", delay: "1s", duration: "20s", opacity: 0.2 },
    { size: 7, left: "48%", delay: "7s", duration: "13s", opacity: 0.28 },
    { size: 3, left: "57%", delay: "3.5s", duration: "17s", opacity: 0.22 },
    { size: 9, left: "66%", delay: "9s", duration: "15s", opacity: 0.3 },
    { size: 5, left: "74%", delay: "0.5s", duration: "19s", opacity: 0.25 },
    { size: 4, left: "83%", delay: "4s", duration: "12s", opacity: 0.32 },
    { size: 6, left: "91%", delay: "6s", duration: "16s", opacity: 0.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Maça matcha background"
          className="w-full h-full object-cover object-center"
        />

        {/* Layer 1: Dark base tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-green-900/40 to-green-950/70" />

        {/* Layer 2: Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 70% at 50% 45%, transparent 20%, rgba(5, 20, 10, 0.65) 100%)",
          }}
        />

        {/* Layer 3: Directional fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5, 18, 10, 0.5) 0%, transparent 30%, transparent 60%, rgba(3, 14, 8, 0.65) 100%)",
          }}
        />
      </div>

      {/* Large logo watermark — slowly rotates behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Outer glow ring */}
        <div
          className="absolute rounded-full hero-logo-pulse"
          style={{
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, rgba(82,183,136,0.18) 0%, rgba(52,144,100,0.08) 50%, transparent 75%)",
          }}
        />
        {/* Second softer glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(149,213,178,0.07) 0%, transparent 65%)",
          }}
        />
        {/* The big watermark logo itself */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="absolute rounded-full hero-logo-spin"
          style={{
            width: 400,
            height: 400,
            opacity: 0.07,
            filter: "blur(1px) brightness(1.4) saturate(0.6)",
            objectFit: "cover",
          }}
        />
        {/* Sharp inner version at lower opacity for definition */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="absolute rounded-full hero-logo-spin"
          style={{
            width: 300,
            height: 300,
            opacity: 0.05,
            filter: "brightness(1.8) saturate(0)",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none hero-grain" />

      {/* Glow orbs layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #95d5b2 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #b7e4c7 0%, transparent 70%)" }}
        />
        <div
          className="absolute -top-32 -left-16 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, #52b788 0%, transparent 65%)", opacity: 0.12 }}
        />
        <div
          className="absolute top-1/3 -right-12 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, #d8f3dc 0%, transparent 70%)", opacity: 0.1 }}
        />
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full"
          style={{ background: "radial-gradient(ellipse, #40916c 0%, transparent 70%)", opacity: 0.15 }}
        />
      </div>

      {/* Floating bokeh particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full hero-particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              bottom: "-10px",
              opacity: p.opacity,
              background:
                "radial-gradient(circle, rgba(149,213,178,0.9) 0%, rgba(82,183,136,0.4) 50%, transparent 100%)",
              animationDelay: p.delay,
              animationDuration: p.duration,
              boxShadow: `0 0 ${p.size * 2}px rgba(149, 213, 178, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="Maça Logo"
            className="w-20 h-20 rounded-full object-cover shadow-2xl border-4 border-white/20 animate-float"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
          <Sparkles size={14} className="text-yellow-300" />
          <span>Now at Prishtina Mall · Food Court</span>
          <Sparkles size={14} className="text-yellow-300" />
        </div>

        {/* Main brand name — matches the MAÇA cup branding */}
        <h1
          className="text-[9rem] md:text-[13rem] text-white mb-2 leading-none drop-shadow-lg"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
        >
          MAÇA
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase mb-10">
          Matcha, reimagined.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="px-8 py-4 rounded-full bg-white text-green-800 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            See Our Menu
          </a>
          <a
            href="#location"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/25 transition-all duration-200"
          >
            <MapPin size={18} />
            Find Us
          </a>
        </div>

        {/* Opening Date */}
        <div className="mt-12 inline-flex items-center gap-2 text-white/60 text-sm tracking-wider">
          <span>GRAND OPENING ·</span>
          <span className="text-white font-semibold">APRIL 8TH, 2026</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </a>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full text-background fill-current" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
