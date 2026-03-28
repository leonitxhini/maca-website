import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const galleryItems = [
  {
    src: "/matcha-latte-art.png",
    label: "Crafted with Care",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/iced-matcha-swirl.png",
    label: "Iced & Refreshing",
    span: "",
  },
  {
    src: "/matcha-powder-pour.png",
    label: "Pure Ceremonial Grade",
    span: "",
  },
  {
    src: "/cafe-vibes.png",
    label: "Your Perfect Corner",
    span: "col-span-2",
  },
  {
    src: "/matcha-trio.png",
    label: "Something for Everyone",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4 bg-green-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
              Our World
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-4">
              A Feast for the Eyes
            </h2>
            <p className="text-green-900/60 max-w-md mx-auto">
              Every Maça drink is crafted to be as beautiful as it is delicious.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-style Gallery Grid */}
        <ScrollReveal direction="up" delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8" style={{ gridAutoRows: "160px" }}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden card-hover cursor-pointer group ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/40 transition-colors duration-300 rounded-2xl" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold drop-shadow">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Instagram CTA */}
        <ScrollReveal delay={120}>
          <div className="text-center">
            <a
              href="https://www.instagram.com/maca_ks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 min-h-[44px] px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Instagram size={20} />
              Follow us on Instagram @maca_ks
            </a>
            <p className="mt-3 text-green-900/55 text-sm">
              167 followers and growing — join our community!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
