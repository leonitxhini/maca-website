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

          {/* Google Maps Embed */}
          <div className="rounded-3xl overflow-hidden shadow-xl min-h-80 bg-card border border-card-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6!2d21.1655!3d42.6529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f3a3f84d855%3A0x95b2a8b5c0cf7af9!2sPrishtina%20Mall%20Food%20Court%2C%20Pristina%2C%20Kosovo!5e0!3m2!1sen!2s!4v1711000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prishtina Mall — Food Court, Pristina, Kosovo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
