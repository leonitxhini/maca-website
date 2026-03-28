import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Menu from "@/components/menu";
import WhyMatcha from "@/components/why-matcha";
import Gallery from "@/components/gallery";
import Reel from "@/components/reel";
import Location from "@/components/location";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <WhyMatcha />
      <Gallery />
      <Reel />
      <Location />
      <Footer />
    </div>
  );
}
