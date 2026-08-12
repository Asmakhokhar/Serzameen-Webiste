import Image from "next/image";
import type { WhyUsItem } from "@/data/why-us";

interface WhyUsCardProps {
  item: WhyUsItem;
}

export default function WhyUsCard({ item }: WhyUsCardProps) {
  const { number, title, description, icon, image, featured } = item;

  if (featured) {
    return (
      <article className="relative z-10 w-full overflow-hidden rounded-[18px] border border-[#E8E2D8] bg-white shadow-[0_18px_50px_rgba(15,107,101,0.08)] lg:-mt-14">
        {image && (
          <div className="relative h-[220px] overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 420px" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F6B65]/20 to-transparent" />
          </div>
        )}

        <div className="flex min-h-[350px] flex-col p-7 md:p-8">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4DED3] text-sm text-[#0F6B65]">
            {icon}
          </span>

          <span className="mt-5 font-serif text-sm italic text-[#D7C08A]">{number}</span>

          <h3 className="mt-3 max-w-[320px] font-serif text-[31px] leading-[1.08] text-[#202020] md:text-[34px]">{title}</h3>

          <p className="mt-auto max-w-[350px] pt-8 text-[14px] leading-[1.8] text-[#6A6A6A]">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex min-h-[320px] flex-col rounded-[18px] border border-[#E8E2D8] bg-white/75 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D7C08A] hover:bg-white md:p-8">
      <span className="font-serif text-[46px] leading-none tracking-[-2px] text-[#E8E8E8] transition-colors duration-500 group-hover:text-[#D7C08A]/60">{number}</span>

      <div className="mt-auto">
        <span aria-hidden="true" className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E2D8] text-xs text-[#0F6B65]">
          {icon}
        </span>

        <h3 className="font-serif text-[24px] leading-[1.15] text-[#202020]">{title}</h3>

        <p className="mt-4 text-[13px] leading-[1.75] text-[#707070]">{description}</p>
      </div>
    </article>
  );
}
