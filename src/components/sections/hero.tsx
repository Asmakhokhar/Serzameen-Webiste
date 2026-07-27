import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white hover:bg-white/20">
            Trusted real estate partner
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Find a place that feels like home from the very first visit.
          </h1>
          <p className="mt-5 text-lg text-slate-300 sm:text-xl">
            Discover premium villas, modern apartments, and investment-ready properties in the most sought-after neighborhoods.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#listings"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
            >
              Explore Properties
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Featured</p>
          <h2 className="mt-3 text-2xl font-semibold">Luxury waterfront villa</h2>
          <p className="mt-3 text-slate-300">
            Spacious layout, private garden, and panoramic views in a secure gated community.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-900/50 p-3">4 Beds</div>
            <div className="rounded-2xl bg-slate-900/50 p-3">3 Baths</div>
            <div className="rounded-2xl bg-slate-900/50 p-3">5,200 sq ft</div>
          </div>
        </div>
      </div>
    </section>
  );
}
