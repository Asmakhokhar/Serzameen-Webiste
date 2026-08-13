interface AboutHeadingProps {
  title: string;
  italicTitle: string;
}

export default function AboutHeading({
  title,
  italicTitle,
}: AboutHeadingProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-[42px] md:text-[48px] lg:text-[50px] leading-[1.05] font-light tracking-[-1.5px] text-[#1E1E1E]">
        {title}
      </h2>

      <div className="flex items-center gap-5">
        <span className="block h-px w-14.5 bg-[#CBAF78]" />

        <span className="font-serif italic text-[58px] md:text-[64px] lg:text-[70px] leading-[0.9] text-[#1E1E1E]">
          {italicTitle}
        </span>
      </div>
    </div>
  );
}