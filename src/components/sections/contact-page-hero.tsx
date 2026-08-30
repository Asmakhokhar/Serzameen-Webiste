import Image from "next/image";

export default function ContactPageHero() {
  return (
    <section className="relative isolate h-[360px] overflow-hidden md:h-[440px]">
      <Image
        src="/hero2.png"
        alt="Luxury real estate exterior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.55)_100%)]"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#FCFBF8] via-[#FCFBF8]/75 to-transparent" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center">
          <span className="text-[10px] font-medium uppercase tracking-[4px] text-[#D7C08A]">
            Serzameen Estate
          </span>

          <h1 className="mt-4 font-serif text-[44px] leading-none tracking-[-1px] text-white md:text-[64px]">
            Get in Touch
          </h1>
        </div>
      </div>
    </section>
  );
}
