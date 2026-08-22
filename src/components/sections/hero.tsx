import Image from "next/image";
import SectionButton from "../shared/section-button";

export function Hero() {
  return (
    <section className="relative isolate h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg-1.png"
        alt=""
        width={660}
        height={378}
        priority
        className="block h-auto w-full"
      />

      {/* Bottom white fade */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-white via-white/70 to-transparent" />

      {/* <div className="absolute inset-0 z-10 bg-black/35" /> */}

      {/* Overlay */}
      <div className="absolute inset-0 z-20 container mx-auto flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
         
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

          <div className="mt-10 flex flex-wrap gap-5">
            <SectionButton
              href="/properties"
              className="rounded-full border-[#0E8AA7] bg-[#0E8AA7] px-8 py-3 text-white hover:border-[#0a7085] hover:bg-[#0a7085]"
            >
              Explore Properties
            </SectionButton>

            <SectionButton
              href="/contact"
              variant="outline"
              className="rounded-full border-white bg-transparent px-8 py-3 text-white hover:bg-white hover:text-[#0D3B4A]"
            >
              Book a Visit
            </SectionButton>
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
