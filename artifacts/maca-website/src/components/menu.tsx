import { useState } from "react";

import ceremonialMatcha from "../assets/menu/ceremonial-matcha.png";
import matchaLatte from "../assets/menu/matcha-latte.png";
import vanillaMatcha from "../assets/menu/vanilla-matcha.png";
import blueberryMatcha from "../assets/menu/blueberry-matcha.png";
import icedMatchaLatte from "../assets/menu/iced-matcha-latte.png";
import matchaLemonade from "../assets/menu/matcha-lemonade.png";
import springBloomSpecial from "../assets/menu/spring-bloom-special.png";
import mangoMatcha from "../assets/menu/mango-matcha.png";

const categories = ["All", "Classic", "Signature", "Iced", "Seasonal"];

const menuItems = [
  {
    category: "Classic",
    name: "Ceremonial Matcha",
    desc: "Traditional Japanese matcha, whisked to perfection with hot water",
    price: "€3.50",
    emoji: "🍵",
    image: ceremonialMatcha,
    badge: "Bestseller",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    category: "Classic",
    name: "Matcha Latte",
    desc: "Premium matcha with creamy steamed milk — the crowd favourite",
    price: "€4.00",
    emoji: "☕",
    image: matchaLatte,
    badge: "Popular",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    category: "Signature",
    name: "Vanilla Matcha",
    desc: "Smooth ceremonial matcha with silky vanilla and oat milk",
    price: "€4.50",
    emoji: "🤍",
    image: vanillaMatcha,
    badge: "Signature",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "Signature",
    name: "Blueberry Matcha",
    desc: "Vibrant blueberry puree layered with fresh iced matcha",
    price: "€4.50",
    emoji: "🫐",
    image: blueberryMatcha,
    badge: "Signature",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "Iced",
    name: "Iced Matcha Latte",
    desc: "Chilled matcha over ice, topped with cold milk — refreshing perfection",
    price: "€4.00",
    emoji: "🧊",
    image: icedMatchaLatte,
    badge: null,
    badgeColor: "",
  },
  {
    category: "Iced",
    name: "Matcha Lemonade",
    desc: "Zesty lemon meets earthy matcha over crushed ice",
    price: "€4.50",
    emoji: "🍋",
    image: matchaLemonade,
    badge: "New",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    category: "Seasonal",
    name: "Spring Bloom Special",
    desc: "Seasonal matcha blend with cherry blossom syrup and rose",
    price: "€5.00",
    emoji: "🌸",
    image: springBloomSpecial,
    badge: "Limited",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    category: "Seasonal",
    name: "Mango Matcha",
    desc: "Tropical mango swirled into our signature matcha base",
    price: "€5.00",
    emoji: "🥭",
    image: mangoMatcha,
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
              {/* Drink Image */}
              <div className="w-full aspect-square bg-gradient-to-br from-green-50 to-green-100 overflow-hidden relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    {item.emoji}
                  </div>
                )}
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
