import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative isolate h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero2.png"
        alt=""
        fill
        priority
        className="absolute inset-0 z-0 object-cover w-auto h-full"
      />

      <div className="absolute inset-0 z-10 bg-black/35" />

      {/* Overlay */}
      <div className="relative z-20 container mx-auto flex h-full items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="mr-2 text-[#D7C08A]">●</span>

            <span className="text-sm uppercase tracking-[0.25em] text-white">
              Luxury Coastal Living
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-6xl font-semibold leading-tight text-white lg:text-7xl">
            Find Your Dream
            <span className="block text-[#D7C08A]">Waterfront Home</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/85">
            Discover premium beachfront villas, modern apartments, and exclusive
            investment opportunities crafted for luxury living and lasting
            value.
          </p>
          {/* Buttons */}

          <div className="mt-10 flex gap-5">
            <Button
              size="lg"
              className="rounded-full bg-[#0E8AA7] px-8 hover:bg-[#0a7085]"
            >
              Explore Properties
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-[#0D3B4A]"
            >
              Book a Visit
            </Button>
          </div>

          {/* Rating */}

          <div className="mt-12 flex items-center gap-3 text-white">
            <span className="text-[#D7C08A]">★★★★★</span>

            <p className="text-sm">Trusted by 500+ Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
