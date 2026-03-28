import { Instagram, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Why Matcha", href: "#why-matcha" },
    { label: "Gallery", href: "#gallery" },
    { label: "Find Us", href: "#location" },
  ];

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                <span className="text-lg">🍵</span>
              </div>
              <span
                className="text-3xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
              >
                MAÇA
              </span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5 max-w-xs">
              Premium matcha drinks crafted with care, brought to the heart of Prishtina. 
              Kosovo's first dedicated matcha café experience.
            </p>
            <a
              href="https://www.instagram.com/maca_ks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Instagram size={16} />
              @maca_ks
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Visit Us
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={16} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white/80 text-sm">Prishtina Mall</p>
                <p className="text-white/60 text-sm">Food Court</p>
                <p className="text-white/60 text-sm">Pristina, Kosovo 🇽🇰</p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10">
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">
                Opening Date
              </p>
              <p className="text-white font-bold text-base">April 8th, 2026</p>
              <p className="text-green-400 text-xs mt-1">See you there! 🍵</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Maça. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-400 fill-rose-400" /> in Prishtina, Kosovo · by{" "}
            <a
              href="https://lxclouds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors underline underline-offset-2"
            >
              lxclouds.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
