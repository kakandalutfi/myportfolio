import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CreatorProfile } from "@/components/sections/CreatorProfile";
import { Contact } from "@/components/sections/Contact";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <main className="relative bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30 overflow-hidden">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-4 py-12 space-y-40">
          <About />
          <FeaturedProducts />
          <ProductDetail />
          <CreatorProfile />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
