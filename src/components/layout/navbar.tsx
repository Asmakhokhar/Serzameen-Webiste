"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import SectionButton from "../shared/section-button";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Properties", href: "/properties" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500
      ${
        scrolled
          ? "bg-white shadow-lg py-6"
          : "bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

        <Logo colored={scrolled} />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`text-sm uppercase tracking-[0.15em] transition
              ${
                scrolled
                  ? "text-[#0D3B4A] hover:text-[#0E8AA7]"
                  : "text-white hover:text-[#D7C08A]"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <SectionButton
          href="/contact"
          className={`h-10 rounded-full px-7 py-2 text-sm font-medium
          ${
            scrolled
              ? "border-[#0E8AA7] bg-[#0E8AA7] text-white hover:border-[#09738a] hover:bg-[#09738a]"
              : "border-white bg-white text-[#0D3B4A] hover:border-[#ececec] hover:bg-[#ececec]"
          }`}
        >
          Book a Visit
        </SectionButton>

      </div>
    </header>
  );
}
