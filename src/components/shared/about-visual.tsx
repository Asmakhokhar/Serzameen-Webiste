import Image from "next/image";

const DEFAULT_IMAGES = {
  primary: "/hero.jpg",
  secondary: "/bg-11.png",
} as const;

export function ExperienceCard({ years = 15 }: { years?: number }) {
  return (
    <div
      className="
        absolute
        left-45
        top-4
        z-20
        w-41.25
        rounded-[6px]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(0,0,0,0.07)]
        md:left-51.25
        md:w-45
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
        left-30
        z-20
        rounded-[6px]
        bg-white
        px-5
        py-4
        shadow-[0_12px_35px_rgba(0,0,0,0.07)]
        md:left-33.75
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
    <div className="relative mx-auto h-140 w-full max-w-140">
      {/* Primary image */}
      <div className="absolute bottom-8 left-0 h-82.5 w-67.5 overflow-hidden rounded-[6px] md:h-91.25 md:w-75">
        <Image src={primarySrc} alt="Property exterior" fill className="object-cover" sizes="300px" priority />
      </div>

      {/* Secondary image */}
      <div className="absolute bottom-0 right-0 h-70 w-65 overflow-hidden rounded-[6px] md:h-78.75 md:w-71.25">
        <Image src={secondarySrc} alt="Property interior" fill className="object-cover" sizes="285px" />
      </div>

      {/* Overlay cards */}
      <ExperienceCard years={years} />
      <RatingCard rating={rating} />
    </div>
  );
}
