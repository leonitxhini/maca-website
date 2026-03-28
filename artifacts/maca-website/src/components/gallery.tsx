import { Instagram } from "lucide-react";

const galleryItems = [
  { emoji: "🍵", label: "Classic Ceremonial Matcha", bg: "from-green-200 to-emerald-300" },
  { emoji: "🤍", label: "Vanilla Matcha Latte", bg: "from-purple-100 to-violet-200" },
  { emoji: "🫐", label: "Blueberry Matcha", bg: "from-blue-200 to-indigo-300" },
  { emoji: "🌿", label: "Matcha Fields", bg: "from-green-300 to-teal-400" },
  { emoji: "🍋", label: "Matcha Lemonade", bg: "from-yellow-200 to-lime-300" },
  { emoji: "🌸", label: "Seasonal Bloom", bg: "from-pink-200 to-rose-300" },
  { emoji: "🧊", label: "Iced Matcha", bg: "from-cyan-200 to-blue-300" },
  { emoji: "☕", label: "Matcha Latte", bg: "from-amber-100 to-orange-200" },
  { emoji: "🥭", label: "Mango Matcha", bg: "from-orange-200 to-yellow-300" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-green-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Our World
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-5">
            A Feast for the Eyes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every Maça drink is crafted to be as beautiful as it is delicious.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-10">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} card-hover cursor-pointer group`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <span className="hidden md:block text-xs font-medium text-green-900/70 text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/maca_ks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <Instagram size={20} />
            Follow us on Instagram @maca_ks
          </a>
          <p className="mt-4 text-muted-foreground text-sm">
            167 followers and growing — join our community!
          </p>
        </div>
      </div>
    </section>
  );
}
