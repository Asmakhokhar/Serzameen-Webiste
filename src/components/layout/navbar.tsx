import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Serzameen Estates
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link href="#listings" className="transition hover:text-slate-900">
            Listings
          </Link>
          <Link href="#why-us" className="transition hover:text-slate-900">
            Why Us
          </Link>
          <Link href="#contact" className="transition hover:text-slate-900">
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="inline-flex h-7 items-center rounded-[min(var(--radius-md),12px)] bg-primary px-2.5 text-[0.8rem] font-medium text-primary-foreground transition hover:bg-primary/80"
        >
          Book Visit
        </Link>
      </div>
    </header>
  );
}
