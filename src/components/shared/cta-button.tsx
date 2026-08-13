import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function CtaButton({
  href,
  children,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        shrink-0
        items-center
        gap-4
        rounded-full
        border
        border-[#D7C08A]
        bg-white
        px-6
        py-3
        text-[13px]
        font-medium
        text-[#1E1E1E]
        transition-all
        duration-300
        hover:border-[#0F6B65]
        hover:bg-[#0F6B65]
        hover:text-white
      "
    >
      {children}

      <span
        aria-hidden="true"
        className="
          text-base
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </Link>
  );
}