interface SectionHeadingProps {
  smallTitle: string;
  title: string;
  italicWord?: string;
}

export default function SectionHeading({
  smallTitle,
  title,
  italicWord,
}: SectionHeadingProps) {
  return (
    <div className="space-y-5">
      <span className="uppercase tracking-[5px] text-[#D7C08A] text-sm font-medium">
        {smallTitle}
      </span>

      <h2 className="text-5xl md:text-6xl leading-tight font-light text-[#0F6B65]">
        {title}
        {italicWord && (
          <>
            <br />
            <span className="italic font-serif text-gray-900">
              {italicWord}
            </span>
          </>
        )}
      </h2>
    </div>
  );
}