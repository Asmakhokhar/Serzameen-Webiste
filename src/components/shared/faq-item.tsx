"use client";

import { useState } from "react";
import type { FAQItem as FAQItemType } from "@/data/faqs";

interface FAQItemProps {
  item: FAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#EDE9E1] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          px-6
          py-5
          text-left
          transition-colors
          duration-300
          hover:text-[#0F6B65]
          md:px-7
        "
      >
        <span
          className="
            font-[var(--font-manrope)]
            text-[13px]
            font-semibold
            leading-6
            text-[#1E1E1E]
            md:text-[14px]
          "
        >
          {item.question}
        </span>

        {/* Simple + / - */}
        <span
          aria-hidden="true"
          className="
            relative
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            text-[20px]
            font-light
            leading-none
            text-[#0F6B65]
          "
        >
          <span
            className={`
              absolute
              transition-transform
              duration-300
              ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
            `}
          >
            +
          </span>

          <span
            className={`
              absolute
              transition-opacity
              duration-300
              ${isOpen ? "opacity-100" : "opacity-0"}
            `}
          >
            −
          </span>
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p
            className="
              px-6
              pb-5
              pr-14
              font-[var(--font-manrope)]
              text-[13px]
              leading-6
              text-[#777]
              md:px-7
            "
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}