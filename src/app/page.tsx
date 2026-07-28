import { Hero } from "@/components/sections/hero";
import { ListingsGrid } from "@/components/sections/listings-grid";
import { WhyUs } from "@/components/sections/why-us";
import  Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { listings } from "@/data/listings";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ListingsGrid listings={listings} />
        <WhyUs />
        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">Let’s find your next address</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Share your goals and we’ll guide you toward the best fit, whether you’re buying, investing, or relocating.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
