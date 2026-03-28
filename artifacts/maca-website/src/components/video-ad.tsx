import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoAd() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6 justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>

        {/* Video card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-green-950 mx-auto aspect-[9/16] max-w-sm">
          <video
            ref={videoRef}
            src="/maca-ad.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            onClick={togglePlay}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Center play button — fades after play */}
          {!playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </button>
          )}

          {/* Bottom bar controls */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div className="text-white">
              <p className="font-black text-2xl md:text-3xl drop-shadow leading-tight">
                Maça's Signature Flavours ❤️🔥
              </p>
              <p className="text-white/75 text-sm mt-1">
                Coming soon — April 8th · Prishtina Mall
              </p>
            </div>
            <div className="flex gap-2">
              {playing && (
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Pause className="w-4 h-4 text-white" />
                </button>
              )}
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {muted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-5">
          Tap to play · Turn up the sound for the full experience 🔊
        </p>
      </div>
    </section>
  );
}
