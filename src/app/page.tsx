import { Hero } from "@/components/sections/hero";
import  VisionSection  from "@/components/sections/vision";
import { WhyUs } from "@/components/sections/why-us";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import About from "@/components/sections/about";
import FeaturedProperties from "@/components/sections/featured-properties";
import CallToAction from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import ContactMap from "@/components/sections/contact-map";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VisionSection
        darkText="Thoughtfully selected spaces for people who value"
        image="/4.jpg"
        grayText="comfort, character, and timeless living."
      />
        <About />
        <FeaturedProperties />
        <WhyUs />
        <Contact />
        <ContactMap />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
