"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

import Logo from "./logo";
import SectionButton from "../shared/section-button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD = 32;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`
            mx-auto
            flex
            h-[56px]
            max-w-[1220px]
            items-center
            justify-between
            rounded-full
            border
            px-4
            transition-all
            duration-300
            sm:h-[60px]
            sm:px-5
            lg:px-6
            ${
              isScrolled
                ? "border-white/20 bg-[#0F6B65]/55 shadow-[0_10px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl"
                : "border-white/30 bg-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-lg"
            }
          `}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Serzameen Estate"
            onClick={closeMenu}
            className="shrink-0"
          >
            <Logo colored={isScrolled} />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`
                  font-[var(--font-manrope)]
                  text-[12px]
                  font-medium
                  transition-colors
                  duration-200
                 text-white/90 hover:text-[#D7C08A] 
                `}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="
                rounded-full
                bg-[#0F6B65]
                px-5
                py-2.5
                font-[var(--font-manrope)]
                text-[11px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[#0B5753]
                hover:shadow-[0_6px_18px_rgba(15,107,101,0.20)]
              "
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              transition-colors
              duration-200
              lg:hidden
              ${
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-[#1E1E1E] hover:bg-black/5"
              }
            `}
          >
            {isMenuOpen ? (
              <FiX size={21} strokeWidth={1.7} />
            ) : (
              <FiMenu size={21} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            mx-auto
            mt-2
            max-w-[1220px]
            overflow-hidden
            rounded-[24px]
            border
            border-white/30
            bg-white/80
            shadow-[0_15px_45px_rgba(0,0,0,0.10)]
            backdrop-blur-2xl
            transition-all
            duration-300
            lg:hidden
            ${
              isMenuOpen
                ? "visible max-h-[500px] translate-y-0 opacity-100"
                : "invisible max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >
          <nav className="p-4" aria-label="Mobile navigation">
            <div className="space-y-1">
              {NAV_LINKS.map(({ label, href }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    font-[var(--font-manrope)]
                    text-[13px]
                    font-medium
                    text-[#1E1E1E]
                    transition-colors
                    duration-200
                    hover:bg-[#0F6B65]/5
                    hover:text-[#0F6B65]
                  "
                >
                  <span>{label}</span>

                  <span className="text-[10px] text-[#CBAF78]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-3 border-t border-[#E8E3DA] pt-3">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  w-full
                  justify-center
                  rounded-full
                  bg-[#0F6B65]
                  px-5
                  py-3
                  font-[var(--font-manrope)]
                  text-[12px]
                  font-semibold
                  text-white
                  hover:bg-[#0B5753]
                "
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}