import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Why Matcha", href: "#why-matcha" },
    { label: "Gallery", href: "#gallery" },
    { label: "Find Us", href: "#location" },
  ];

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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Maça Logo"
                className="w-9 h-9 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold tracking-tight text-green-900 transition-colors">
                Maça
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-green-900/80 transition-all hover:text-green-600 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex">
              <a
                href="#location"
                className="px-5 py-2 rounded-full text-sm font-semibold text-white matcha-gradient shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Visit Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-green-800 transition-colors hover:bg-green-50/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/40">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-green-900 font-medium py-2.5 px-3 rounded-xl hover:bg-green-50/60 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#location"
                className="mt-3 px-5 py-3 rounded-full text-sm font-semibold text-white matcha-gradient text-center"
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
