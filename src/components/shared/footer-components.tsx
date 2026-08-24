import Link from "next/link";
import type { ReactNode } from "react";

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[3px] text-[#A88A4B]">
        {title}
      </h3>
      <div className="flex flex-col items-start gap-3.5">{children}</div>
    </div>
  );
}

 interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-[13px] text-[#555] transition-colors duration-300 hover:text-[#0F6B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F6B65]"
    >
      {children}
    </Link>
  );
}
