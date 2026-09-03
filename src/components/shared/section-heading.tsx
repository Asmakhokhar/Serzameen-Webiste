"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AboutHeadingProps {
  title: string;
  italicTitle: string;
}

export default function AboutHeading({
  title,
  italicTitle,
}: AboutHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-[42px] md:text-[48px] lg:text-[50px] leading-[1.05] font-light tracking-[-1.5px] text-[#1E1E1E]"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        className="flex items-center gap-5"
      >
        <span className="block h-px w-14.5 bg-[#CBAF78]" />

        <span className="font-serif italic text-[58px] md:text-[64px] lg:text-[70px] leading-[0.9] text-[#1E1E1E]">
          {italicTitle}
        </span>
      </motion.div>
    </div>
  );
}