import Link from "next/link";

interface SectionButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function SectionButton({
  href,
  children,
}: SectionButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-[#CBAF78]
        px-9
        py-4
        text-[15px]
        text-[#333]
        transition-all
        duration-300
        hover:bg-[#0F6B65]
        hover:border-[#0F6B65]
        hover:text-white
      "
    >
      <span>{children}</span>

      <span className="text-lg leading-none">
        →
      </span>
    </Link>
  );
}