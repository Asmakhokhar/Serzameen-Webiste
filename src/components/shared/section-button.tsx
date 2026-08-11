import Link from "next/link";

import { cn } from "@/lib/utils";

interface SectionButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  variant?: "primary" | "outline";
}

export default function SectionButton({
  href,
  children,
  className,
  fullWidth = false,
  variant = "primary",
}: SectionButtonProps) {
  const variantClasses = {
    primary:
      "border-[#CBAF78] bg-transparent text-[#333] hover:border-[#0F6B65] hover:bg-[#0F6B65] hover:text-white",
    outline:
      "border-white bg-transparent text-white hover:bg-white hover:text-[#0D3B4A]",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full border px-9 py-4 text-[15px] font-medium transition-all duration-300 [font-family:var(--font-body)]",
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
    >
      <span>{children}</span>

      <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}