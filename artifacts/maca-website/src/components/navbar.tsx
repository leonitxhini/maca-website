import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Menu", href: "#menu", id: "menu" },
    { label: "Why Matcha", href: "#why-matcha", id: "why-matcha" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Find Us", href: "#location", id: "location" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    const activeMap: Record<string, boolean> = {};

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          activeMap[id] = entry.isIntersecting;
          const firstActive = sectionIds.find((sid) => activeMap[sid]);
          if (firstActive) setActiveSection(firstActive);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <nav
        className={`transition-all duration-500 ${
          isOpen ? "rounded-3xl" : "rounded-2xl"
        } ${
          scrolled
            ? "bg-white/85 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-white/60"
            : "bg-white/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Maça Logo"
                className="w-8 h-8 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
              />
              <span
                className="text-2xl text-green-900 transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
              >
                MAÇA
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-all relative group ${
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-green-900/80 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex">
              <a
                href="#location"
                className="min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold text-white matcha-gradient shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center"
              >
                Visit Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50/50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/40">
            <div className="px-4 py-3 flex flex-col gap-1">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`font-medium py-3 px-3 rounded-xl transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? "text-green-700 bg-green-50/80 font-semibold"
                        : "text-green-900 hover:bg-green-50/60"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#location"
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white matcha-gradient text-center min-h-[44px] flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Visit Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
