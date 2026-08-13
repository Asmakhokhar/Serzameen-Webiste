import Image from "next/image";

const DEFAULT_IMAGES = {
  primary: "/hero.jpg",
  secondary: "/elite-prop-hmlP-v0vJ5o-unsplash.jpg",
} as const;

export function ExperienceCard({ years = 15 }: { years?: number }) {
  return (
    <div
      className="
        absolute
        left-[180px]
        top-4
        z-20
        w-[165px]
        rounded-[6px]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(0,0,0,0.07)]
        md:left-[205px]
        md:w-[180px]
      "
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-serif text-[24px] font-medium text-[#0F6B65]">{years}+</p>
          <p className="mt-1 text-[9px] uppercase tracking-[1.5px] text-[#999]">Years of experience</p>
        </div>

        <span aria-hidden className="text-lg text-[#D7C08A]">↗</span>
      </div>

      <p className="mt-3 text-[10px] leading-4 text-[#777]">Trusted property guidance built around knowledge, clarity and lasting relationships.</p>
    </div>
  );
}

export function RatingCard({ rating = 4.9 }: { rating?: number }) {
  return (
    <div
      className="
        absolute
        bottom-2
        left-[120px]
        z-20
        rounded-[6px]
        bg-white
        px-5
        py-4
        shadow-[0_12px_35px_rgba(0,0,0,0.07)]
        md:left-[135px]
      "
    >
      <p className="text-[9px] uppercase tracking-[2px] text-[#999]">Client trust</p>

      <div className="mt-2 flex items-center gap-1">
        <span className="text-[13px] tracking-[1px] text-[#D7C08A]">★★★★★</span>
        <span className="ml-1 text-xs font-medium text-[#333]">{rating}</span>
      </div>
    </div>
  );
}

export default function AboutVisual({
  primarySrc = DEFAULT_IMAGES.primary,
  secondarySrc = DEFAULT_IMAGES.secondary,
  years = 15,
  rating = 4.9,
}: {
  primarySrc?: string;
  secondarySrc?: string;
  years?: number;
  rating?: number;
}) {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[560px]">
      {/* Primary image */}
      <div className="absolute bottom-8 left-0 h-[330px] w-[270px] overflow-hidden rounded-[6px] md:h-[365px] md:w-[300px]">
        <Image src={primarySrc} alt="Property exterior" fill className="object-cover" sizes="300px" priority />
      </div>

      {/* Secondary image */}
      <div className="absolute bottom-0 right-0 h-[280px] w-[260px] overflow-hidden rounded-[6px] md:h-[315px] md:w-[285px]">
        <Image src={secondarySrc} alt="Property interior" fill className="object-cover" sizes="285px" />
      </div>

      {/* Overlay cards */}
      <ExperienceCard years={years} />
      <RatingCard rating={rating} />
    </div>
  );
}
