import { useState } from "react";

const categories = ["All", "Classic", "Signature", "Iced", "Seasonal"];

const menuItems = [
  {
    category: "Classic",
    name: "Ceremonial Matcha",
    desc: "Traditional Japanese matcha, whisked to perfection with hot water",
    price: "€3.50",
    emoji: "🍵",
    overlay: "bg-emerald-500/20",
    label: "Original",
    labelColor: "bg-emerald-100 text-emerald-800",
    badge: "Bestseller",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    category: "Classic",
    name: "Matcha Latte",
    desc: "Premium matcha with creamy steamed milk — the crowd favourite",
    price: "€4.00",
    emoji: "☕",
    overlay: "bg-green-300/25",
    label: "Creamy",
    labelColor: "bg-green-100 text-green-800",
    badge: "Popular",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    category: "Signature",
    name: "Vanilla Matcha",
    desc: "Smooth ceremonial matcha with silky vanilla and oat milk",
    price: "€4.50",
    emoji: "🤍",
    overlay: "bg-amber-100/40",
    label: "Vanilla",
    labelColor: "bg-amber-50 text-amber-800",
    badge: "Signature",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "Signature",
    name: "Blueberry Matcha",
    desc: "Vibrant blueberry puree layered with fresh iced matcha",
    price: "€4.50",
    emoji: "🫐",
    overlay: "bg-violet-400/30",
    label: "Blueberry",
    labelColor: "bg-violet-100 text-violet-800",
    badge: "Signature",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "Iced",
    name: "Iced Matcha Latte",
    desc: "Chilled matcha over ice, topped with cold milk — refreshing perfection",
    price: "€4.00",
    emoji: "🧊",
    overlay: "bg-cyan-300/25",
    label: "Iced",
    labelColor: "bg-cyan-100 text-cyan-800",
    badge: null,
    badgeColor: "",
  },
  {
    category: "Iced",
    name: "Matcha Lemonade",
    desc: "Zesty lemon meets earthy matcha over crushed ice",
    price: "€4.50",
    emoji: "🍋",
    overlay: "bg-yellow-300/30",
    label: "Lemon",
    labelColor: "bg-yellow-100 text-yellow-800",
    badge: "New",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    category: "Seasonal",
    name: "Spring Bloom Special",
    desc: "Seasonal matcha blend with cherry blossom syrup and rose",
    price: "€5.00",
    emoji: "🌸",
    overlay: "bg-pink-300/30",
    label: "Cherry Blossom",
    labelColor: "bg-pink-100 text-pink-800",
    badge: "Limited",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    category: "Seasonal",
    name: "Mango Matcha",
    desc: "Tropical mango swirled into our signature matcha base",
    price: "€5.00",
    emoji: "🥭",
    overlay: "bg-orange-300/30",
    label: "Mango",
    labelColor: "bg-orange-100 text-orange-800",
    badge: "Limited",
    badgeColor: "bg-orange-100 text-orange-700",
  },
];

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="py-24 px-4 bg-green-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            What We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-5">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every drink crafted with ceremonial-grade matcha and the freshest ingredients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "matcha-gradient text-white shadow-md scale-105"
                  : "bg-white text-green-700 border border-green-200 hover:border-green-400 hover:bg-green-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-green-100 shadow-sm card-hover flex flex-col overflow-hidden"
            >
              {/* Cup image with flavour overlay */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                <img
                  src="/maca-cup.png"
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Colour tint for this flavour */}
                <div className={`absolute inset-0 ${item.overlay}`} />
                {/* Flavour label chip */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${item.labelColor}`}>
                    {item.emoji} {item.label}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Badge */}
                {item.badge && (
                  <span
                    className={`inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Content */}
                <h3 className="text-green-900 font-bold text-base mb-1.5">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-3">
                  {item.desc}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold text-lg">{item.price}</span>
                  <span className="text-xs text-muted-foreground bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          Menu items and seasonal specials may vary.{" "}
          <span className="text-green-600 font-medium">More exciting drinks coming soon!</span>
        </p>
      </div>
    </section>
  );
}
