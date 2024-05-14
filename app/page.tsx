import Essentials from "@/components/essentials";
import Explore from "@/components/explore";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Subsribe from "@/components/subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="px-8 md:px-24 ">
        <Explore />
        <Essentials />
        <Pricing />
        <Subsribe />
      </div>
    </main>
  );
}
