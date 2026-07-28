"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";

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
          ? "bg-white shadow-lg py-4"
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

        <Button
          className={`rounded-full px-7 h-11
          ${
            scrolled
              ? "bg-[#0E8AA7] hover:bg-[#09738a]"
              : "bg-white text-[#0D3B4A] hover:bg-[#ececec]"
          }`}
        >
          Book a Visit
        </Button>

      </div>
    </header>
  );
}
