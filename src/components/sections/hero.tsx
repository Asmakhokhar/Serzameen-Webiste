"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionButton from "../shared/section-button";

const HERO_IMAGE = "/hero2.png";

export default function Hero() {
  return (
    <section className="relative isolate h-screen min-h-[680px] overflow-hidden">
      {/* =====================================================
          HERO IMAGE
          Change only HERO_IMAGE when you want another image.
      ====================================================== */}
      <Image
        src={HERO_IMAGE}
        alt="Luxury waterfront property"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />

      {/* =====================================================
          IMAGE OVERLAY
          Keeps the text readable without making the image dull.
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-10
          bg-black/20
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-10
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.25)_100%)]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="mx-auto -mt-4 max-w-[900px] text-center md:-mt-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#D7C08A]" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[4px]
                text-white/85
              "
            >
              Serzameen Estate
            </span>

            <span className="h-px w-8 bg-[#D7C08A]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="
              font-[var(--font-manrope)]
              text-[48px]
              font-bold
              leading-[0.98]
              tracking-[-2.5px]
              text-white
              sm:text-[58px]
              md:text-[72px]
              lg:text-[88px]
              xl:text-[96px]
            "
          >
            Find a place
            
              worth calling home.
            
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="
              mx-auto
              mt-7
              max-w-[570px]
              font-[var(--font-manrope)]
              text-[13px]
              font-medium
              leading-6
              text-white/80
              sm:text-[14px]
              sm:leading-7
            "
          >
            Discover thoughtfully selected properties where refined
            design, exceptional locations, and lasting value come together.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
            className="mt-9 flex justify-center"
          >
            <SectionButton
              href="/contact"
              className="text-white"
            >
              <span>Get Started</span>
            </SectionButton>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
          Blends hero naturally into the next white section.
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          z-30
          h-40
          bg-gradient-to-t
          from-[#FCFBF8]
          via-[#FCFBF8]/65
          to-transparent
        "
      />
    </section>
  );
}