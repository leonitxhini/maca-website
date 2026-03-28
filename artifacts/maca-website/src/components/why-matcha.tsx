import { Zap, Brain, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-7 h-7 text-amber-500" />,
    title: "Sustained Energy",
    desc: "No coffee crash. Matcha releases energy slowly thanks to L-theanine, keeping you focused and alert all day.",
    color: "from-amber-50 to-yellow-50 border-amber-100",
  },
  {
    icon: <Brain className="w-7 h-7 text-blue-500" />,
    title: "Mental Clarity",
    desc: "L-theanine promotes alpha brain waves — a state of calm focus that helps you think clearly without anxiety.",
    color: "from-blue-50 to-indigo-50 border-blue-100",
  },
  {
    icon: <Shield className="w-7 h-7 text-green-600" />,
    title: "Rich in Antioxidants",
    desc: "Matcha contains 137x more EGCG antioxidants than regular green tea, supporting overall health and wellness.",
    color: "from-green-50 to-emerald-50 border-green-100",
  },
  {
    icon: <Smile className="w-7 h-7 text-rose-500" />,
    title: "Mood Boost",
    desc: "The unique amino acids in matcha help reduce stress and enhance your overall sense of wellbeing naturally.",
    color: "from-rose-50 to-pink-50 border-rose-100",
  },
];

const infoCards = [
  {
    img: "/what-is-matcha.jpg",
    title: "What is Matcha?",
    caption: "Finely ground whole green tea leaves — you drink the entire leaf.",
  },
  {
    img: "/matcha-green.jpg",
    title: "Why is Matcha so Green?",
    caption: "Shade-grown to boost chlorophyll, antioxidants & amino acids.",
  },
  {
    img: "/matcha-energy.jpg",
    title: "Different Kind of Energy",
    caption: "Caffeine + L-Theanine = calm focus, smooth energy, no jitters.",
  },
];

export default function WhyMatcha() {
  return (
    <section id="why-matcha" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            The Matcha Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-5">
            Why Choose Matcha?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kosovo loves its coffee — but matcha offers something different: 
            clean energy, mental clarity, and a world of flavour, without the jitters.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-gradient-to-br ${b.color} border card-hover`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Matcha Info Cards with real photos */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {infoCards.map((card, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg card-hover group aspect-square">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h4 className="font-bold text-lg mb-1 drop-shadow">{card.title}</h4>
                <p className="text-white/80 text-sm leading-snug">{card.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden matcha-gradient p-10 md:p-14 text-center shadow-2xl">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-white/10" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Kosovo, meet matcha.
            </h3>
            <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto">
              Be among the first to experience Prishtina's most exciting new café — 
              opening April 8th at Prishtina Mall Food Court.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#location"
                className="px-8 py-3.5 rounded-full bg-white text-green-800 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Find Us at the Mall
              </a>
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/15 transition-all"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
