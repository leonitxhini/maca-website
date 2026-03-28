import { MapPin, Clock, Instagram } from "lucide-react";

export default function Location() {
  const hours = [
    { day: "Monday – Friday", time: "10:00 – 22:00" },
    { day: "Saturday", time: "10:00 – 23:00" },
    { day: "Sunday", time: "11:00 – 21:00" },
  ];

  return (
    <section id="location" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Come Visit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-4">
            Find Maça
          </h2>
          <p className="text-green-900/60 max-w-md mx-auto">
            We're right in the heart of Prishtina — inside the mall's Food Court, 
            ready to serve you something green and gorgeous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Info Cards */}
          <div className="space-y-5">
            {/* Location */}
            <div className="bg-card border border-card-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-lg mb-1">Our Location</h3>
                  <p className="text-green-900/60 leading-relaxed">
                    Prishtina Mall — Food Court<br />
                    Pristina, Kosovo 🇽🇰
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
                        <span className="text-green-900/60">{h.day}</span>
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

          {/* Real Prishtina Mall Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-80">
            <img
              src="/prishtina-mall.jpg"
              alt="Prishtina Mall — home of Maça"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent" />

            {/* Overlay Info */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 shadow-md border border-green-100">
              <p className="text-xs font-bold text-green-800">🇽🇰 Pristina, Kosovo</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="matcha-gradient rounded-2xl px-5 py-4 shadow-xl border border-white/10">
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Grand Opening</p>
                <p className="text-white font-black text-xl">April 8th, 2026</p>
                <p className="text-white/70 text-sm mt-1">📍 Prishtina Mall · Food Court</p>
                <p className="text-green-300 text-sm font-medium mt-1">Ready to meet us for Maça? 🍵</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
