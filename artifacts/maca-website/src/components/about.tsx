import { Leaf, Heart, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Pure & Natural",
      desc: "We source only the finest ceremonial-grade Japanese matcha, bringing you an authentic, vibrant green experience.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Made with Love",
      desc: "Every cup is crafted by hand with care and passion — from the matcha whisk to the final pour.",
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: "Kosovo-First",
      desc: "We're proud to bring this unique matcha experience to Prishtina, blending global flavors with local warmth.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-5">
            Meet Maça
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Born from a love of matcha and a passion for Prishtina's vibrant café culture, 
            Maça is where ancient Japanese tea traditions meet modern Kosovo energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-green-800">
              Kosovo loves coffee... but have you tried matcha?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Maça is Kosovo's newest matcha destination, bringing premium quality and creative flavors 
              to the heart of Prishtina Mall. Whether you're discovering matcha for the first time 
              or you're a seasoned enthusiast, we have something special for you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From classic ceremonial matcha to playful blueberry and vanilla variations, 
              every sip is designed to delight, energize, and refresh.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Matcha Lattes", "Seasonal Specials", "Iced Drinks", "Blended Bowls"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium border border-green-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
              {/* Decorative matcha bowl visual */}
              <div className="absolute inset-0 matcha-gradient opacity-90" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-8">
                <div className="text-8xl animate-float">🍵</div>
                <p className="text-white text-center text-xl font-semibold">
                  Where every sip tells a story
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-green-100 -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-green-200 -z-10" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card border border-card-border shadow-sm card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h4 className="text-lg font-bold text-green-900 mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
