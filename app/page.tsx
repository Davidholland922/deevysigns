import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import { Grain } from "@/components/ui/Grain";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Grain />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Stats />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
