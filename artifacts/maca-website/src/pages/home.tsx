import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import VideoAd from "@/components/video-ad";
import About from "@/components/about";
import Menu from "@/components/menu";
import WhyMatcha from "@/components/why-matcha";
import Gallery from "@/components/gallery";
import Reel from "@/components/reel";
import Location from "@/components/location";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor-glow";
import ScrollReveal from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <Hero />
      <ScrollReveal>
        <VideoAd />
      </ScrollReveal>
      <About />
      <ScrollReveal>
        <Menu />
      </ScrollReveal>
      <WhyMatcha />
      <Gallery />
      <ScrollReveal>
        <Reel />
      </ScrollReveal>
      <Location />
      <Footer />
    </div>
  );
}
