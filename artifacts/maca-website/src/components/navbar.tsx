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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Maça Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
            />
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-green-800" : "text-white"}`}>
              Maça
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all hover:text-green-400 relative group ${
                  scrolled ? "text-green-900" : "text-white/90"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full" />
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
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-green-800" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-green-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-green-900 font-medium py-2.5 px-3 rounded-lg hover:bg-green-50 transition-colors"
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
  );
}
