import { ArrowDown, MapPin, Sparkles } from "lucide-react";

const leafParticles = [
  { size: 7, left: "5%", delay: "0s", duration: "14s", opacity: 0.45 },
  { size: 5, left: "14%", delay: "2.5s", duration: "18s", opacity: 0.35 },
  { size: 9, left: "23%", delay: "5s", duration: "16s", opacity: 0.4 },
  { size: 6, left: "33%", delay: "1s", duration: "20s", opacity: 0.3 },
  { size: 8, left: "44%", delay: "7s", duration: "13s", opacity: 0.38 },
  { size: 4, left: "53%", delay: "3.5s", duration: "17s", opacity: 0.32 },
  { size: 10, left: "63%", delay: "9s", duration: "15s", opacity: 0.4 },
  { size: 6, left: "72%", delay: "0.5s", duration: "19s", opacity: 0.35 },
  { size: 5, left: "81%", delay: "4s", duration: "12s", opacity: 0.42 },
  { size: 7, left: "90%", delay: "6s", duration: "16s", opacity: 0.3 },
  { size: 4, left: "9%", delay: "11s", duration: "21s", opacity: 0.28 },
  { size: 8, left: "58%", delay: "8s", duration: "14s", opacity: 0.35 },
];

function LeafShape({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 10 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0 C9 4, 10 9, 5 16 C0 9, 1 4, 5 0Z" />
    </svg>
  );
}

export default function Hero() {
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

        {/* Subtle dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
      </div>

      {/* Large logo watermark — slowly rotates behind everything */}

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

      {/* Floating matcha leaf particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leafParticles.map((p, i) => (
          <div
            key={i}
            className="absolute hero-leaf-particle"
            style={{
              left: p.left,
              bottom: "-12px",
              opacity: p.opacity,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          >
            <LeafShape size={p.size} color="rgba(149,213,178,0.85)" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
