import { MapPin, Clock, Instagram, Phone } from "lucide-react";

export default function Location() {
  const hours = [
    { day: "Monday – Friday", time: "10:00 – 22:00" },
    { day: "Saturday", time: "10:00 – 23:00" },
    { day: "Sunday", time: "11:00 – 21:00" },
  ];

  return (
    <section id="location" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Come Visit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-5">
            Find Maça
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're right in the heart of Prishtina — inside the mall's Food Court, 
            ready to serve you something green and gorgeous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Info Card */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-card border border-card-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-lg mb-1">Our Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prishtina Mall — Food Court<br />
                    Pristina, Kosovo
                  </p>
                  <a
                    href="https://maps.google.com/?q=Prishtina+Mall+Kosovo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-card-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-green-900 text-lg mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-semibold text-green-800">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-card border border-card-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-green-900 text-lg mb-4">Stay Connected</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/maca_ks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-green-700 hover:text-green-900 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  @maca_ks on Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map Visual */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-80">
            {/* Decorative map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200" />
            
            {/* Grid pattern to simulate map */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#52b788 1px, transparent 1px), linear-gradient(90deg, #52b788 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Streets */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Horizontal road */}
                <div className="absolute -left-40 -right-40 h-8 bg-white/60 top-1/2 -translate-y-1/2 rounded" />
                {/* Vertical road */}
                <div className="absolute -top-32 -bottom-32 w-8 bg-white/60 left-1/2 -translate-x-1/2 rounded" />
                
                {/* Mall Pin */}
                <div className="relative z-10 flex flex-col items-center animate-float">
                  <div className="w-20 h-20 rounded-2xl matcha-gradient shadow-2xl flex items-center justify-center text-3xl border-4 border-white">
                    🏬
                  </div>
                  <div className="mt-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-green-100 text-center">
                    <p className="text-green-800 font-bold text-sm">Prishtina Mall</p>
                    <p className="text-green-600 text-xs">Food Court · Maça</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kosovo flag badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 shadow-md border border-green-100">
              <p className="text-xs font-bold text-green-800">🇽🇰 Pristina, Kosovo</p>
            </div>

            {/* Opening date */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="matcha-gradient rounded-xl px-4 py-3 text-center shadow-lg">
                <p className="text-white/80 text-xs font-medium">Grand Opening</p>
                <p className="text-white font-bold text-base">April 8th, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
