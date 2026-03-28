import { Instagram, Play } from "lucide-react";

export default function Reel() {
  return (
    <section className="py-24 px-4 bg-green-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            See It in Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3 mb-5">
            Watch Our Latest Reel
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Get a taste of Maça before you visit — follow us on Instagram for the freshest content.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Instagram Reel Embed */}
          <div className="w-full max-w-sm shrink-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-100">
              <iframe
                src="https://www.instagram.com/reel/DWO7qfvjA1a/embed/"
                className="w-full"
                style={{ height: "600px", border: "none" }}
                allowFullScreen
                scrolling="no"
                loading="lazy"
                title="Maça Instagram Reel"
              />
            </div>
          </div>

          {/* Text Companion */}
          <div className="max-w-md text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-sm px-4 py-2 rounded-full mb-6">
              <Play size={14} className="fill-white" />
              <span>Now Live on Instagram</span>
            </div>

            <h3 className="text-3xl font-bold text-green-900 mb-4">
              Kosovo loves coffee...<br />
              <span className="gradient-text">but have you tried Maça?</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              See what's coming to Prishtina Mall's Food Court. Pure ceremonial matcha, 
              creative flavours, and vibes that hit different. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Opening <strong className="text-green-700">April 8th, 2026</strong> — 
              follow us so you don't miss a thing.
            </p>

            <a
              href="https://www.instagram.com/maca_ks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Instagram size={18} />
              Follow @maca_ks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
