import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <main className="relative">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-6 py-24 space-y-48">
          <About />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
