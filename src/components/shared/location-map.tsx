interface LocationMapProps {
  src: string;
  title?: string;
}

export default function LocationMap({
  src,
  title = "Serzameen Estate location",
}: LocationMapProps) {
  return (
    <div className="relative h-90 w-full overflow-hidden md:h-107.5">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 grayscale-[0.25] contrast-[0.95]"
      />

      {/* Brand Overlay */}
      <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/60 bg-[#FCFBF8]/90 px-4 py-2 backdrop-blur-sm">
        <span className="text-xs font-medium uppercase tracking-widest text-[#0F6B65]">
          Serzameen Estate
        </span>
      </div>
    </div>
  );
}
