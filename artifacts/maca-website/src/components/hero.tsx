import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 matcha-gradient" />
      
      {/* Organic blob shapes */}
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
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #d8f3dc 0%, transparent 70%)" }}
        />

        {/* Floating leaves */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-5xl animate-float"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            🍃
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-8">
          <Sparkles size={14} className="text-yellow-300" />
          <span>Now Open at Prishtina Mall</span>
          <Sparkles size={14} className="text-yellow-300" />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
          Maça
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 font-light mb-4">
          Matcha, reimagined.
        </p>
        <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
          Premium Japanese matcha meets Kosovo's coffee culture. Sip something extraordinary at Prishtina Mall — Food Court.
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
        <div className="mt-12 inline-flex items-center gap-2 text-white/60 text-sm">
          <span>Opening Day:</span>
          <span className="text-white font-semibold">April 8th, 2026</span>
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
