import { useState } from "react";
import SteamWisp from "@/components/steam-wisp";

const categories = ["All", "Classic", "Signature", "Iced", "Seasonal"];

const menuItems = [
  {
    category: "Classic",
    name: "Ceremonial Matcha",
    desc: "Traditional Japanese matcha, whisked to perfection with hot water",
    price: "€3.50",
    image: "/menu/ceremonial-matcha.png",
    badge: "Bestseller",
    badgeColor: "bg-amber-100 text-amber-700",
    steam: true,
  },
  {
    category: "Classic",
    name: "Matcha Latte",
    desc: "Premium matcha with creamy steamed milk — the crowd favourite",
    price: "€4.00",
    image: "/menu/matcha-latte.png",
    badge: "Popular",
    badgeColor: "bg-green-100 text-green-700",
    steam: true,
  },
  {
    category: "Signature",
    name: "Vanilla Matcha",
    desc: "Smooth ceremonial matcha with silky vanilla and oat milk",
    price: "€4.50",
    image: "/menu/vanilla-matcha.png",
    badge: "Signature",
    badgeColor: "bg-purple-100 text-purple-700",
    steam: true,
  },
  {
    category: "Signature",
    name: "Blueberry Matcha",
    desc: "Vibrant blueberry puree layered with fresh iced matcha",
    price: "€4.50",
    image: "/menu/blueberry-matcha.png",
    badge: "Signature",
    badgeColor: "bg-purple-100 text-purple-700",
    steam: false,
  },
  {
    category: "Iced",
    name: "Iced Matcha Latte",
    desc: "Chilled matcha over ice, topped with cold milk — refreshing perfection",
    price: "€4.00",
    image: "/menu/iced-matcha-latte.png",
    badge: null,
    badgeColor: "",
    steam: false,
  },
  {
    category: "Iced",
    name: "Matcha Lemonade",
    desc: "Zesty lemon meets earthy matcha over crushed ice",
    price: "€4.50",
    image: "/menu/matcha-lemonade.png",
    badge: "New",
    badgeColor: "bg-yellow-100 text-yellow-700",
    steam: false,
  },
  {
    category: "Seasonal",
    name: "Spring Bloom Special",
    desc: "Seasonal matcha blend with cherry blossom syrup and rose",
    price: "€5.00",
    image: "/menu/spring-bloom.png",
    badge: "Limited",
    badgeColor: "bg-rose-100 text-rose-700",
    steam: true,
  },
  {
    category: "Seasonal",
    name: "Mango Matcha",
    desc: "Tropical mango swirled into our signature matcha base",
    price: "€5.00",
    image: "/menu/mango-matcha.png",
    badge: "Limited",
    badgeColor: "bg-orange-100 text-orange-700",
    steam: true,
  },
];

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="py-16 px-4 bg-green-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            What We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-4">
            Our Menu
          </h2>
          <p className="text-green-900/60 max-w-md mx-auto">
            Every drink crafted with ceremonial-grade matcha and the freshest ingredients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-green-100 shadow-sm card-hover flex flex-col overflow-visible group"
            >
              {/* Cup Image with optional steam */}
              <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-t-2xl">
                {item.steam && <SteamWisp />}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
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
        <p className="text-center text-green-900/55 mt-8 text-sm">
          Menu items and seasonal specials may vary.{" "}
          <span className="text-green-600 font-medium">More exciting drinks coming soon!</span>
        </p>
      </div>
    </section>
  );
}
