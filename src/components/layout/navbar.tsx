"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

import Logo from "./logo";
import SectionButton from "../shared/section-button";

const NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Properties", href: "/properties" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD = 32;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrolledSnapshot() {
  return window.scrollY > SCROLL_THRESHOLD;
}

function getServerScrolledSnapshot() {
  return false;
}

export default function Navbar() {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrolledSnapshot,
    getServerScrolledSnapshot
  );

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ease-out
        ${
          scrolled
            ? "bg-[#0F6B65]/75 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-transparent py-3.5"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-11
          max-w-[1240px]
          items-center
          justify-between
          px-5
          sm:px-7
          lg:px-8
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Serzameen Estate home"
          className="shrink-0"
        >
          <Logo colored={scrolled} />
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative
                py-2
                text-[11px]
                font-medium
                uppercase
                tracking-[1.8px]
                transition-colors
                duration-300
                ${
                  scrolled
                    ? "text-white/85 hover:text-[#D7C08A]"
                    : "text-white/90 hover:text-[#D7C08A]"
                }

                after:absolute
                after:bottom-0
                after:left-1/2
                after:h-px
                after:w-0
                after:-translate-x-1/2
                after:bg-[#D7C08A]
                after:transition-all
                after:duration-300
                hover:after:w-full
              `}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <SectionButton
          href="/contact"
          className={`
            h-9
            rounded-full
            px-5
            py-2
            text-[11px]
            font-medium
            tracking-wide
            transition-all
            duration-300
            ${
              scrolled
                ? "border-[#D7C08A] bg-[#D7C08A] text-[#1E1E1E] hover:border-[#CBAF78] hover:bg-[#CBAF78]"
                : "border-white/80 bg-white/95 text-[#0F6B65] hover:border-white hover:bg-white"
            }
          `}
        >
          Book a Visit
        </SectionButton>
      </div>
    </header>
  );
}