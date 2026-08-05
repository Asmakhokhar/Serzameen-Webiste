import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function SectionButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 border border-[#D7C08A] px-8 py-4 rounded-full hover:bg-[#0F6B65] hover:text-white transition-all duration-300"
    >
      {children}

      <span>→</span>
    </Link>
  );
}