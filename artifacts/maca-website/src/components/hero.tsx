import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/three-cups.jpg"
          alt="Maça matcha drinks"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/70 to-green-900/85" />
      </div>

      {/* Organic glow overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #95d5b2 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #b7e4c7 0%, transparent 70%)" }}
        />
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
