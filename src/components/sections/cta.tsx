import Image from "next/image";

import CtaButton from "@/components/shared/cta-button";
import AboutHeading from "@/components/shared/section-heading";

export default function Cta() {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        bg-[#FCFBF8]
        px-6
        py-12
        md:py-16
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1200px]">
        {/* CTA Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            bg-white
            px-7
            py-8
            shadow-[0_20px_60px_rgba(15,107,101,0.05)]
            md:px-10
            md:py-10
            lg:px-12
            lg:py-11
          "
        >
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              border
              border-[#D7C08A]/20
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-24
              h-72
              w-72
              rounded-full
              border
              border-[#0F6B65]/[0.06]
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              grid
              gap-10
              md:grid-cols-[1fr_300px]
              md:items-center
              lg:grid-cols-[1fr_340px]
            "
          >
            {/* Left Content */}
            <div className="max-w-[620px]">
              
              <AboutHeading
                title="Ready to find your"
                italicTitle="place?"
              />

              <p
                className="
                  mt-6
                  max-w-[500px]
                  font-[var(--font-manrope)]
                  text-[13px]
                  leading-6
                  text-[#666]
                  md:text-[14px]
                  md:leading-7
                "
              >
                Explore thoughtfully selected properties and let our team
                help you find a home or investment that feels right.
              </p>

              {/* CTA */}
              <div className="mt-7">
                <CtaButton href="/properties">
                  Explore Properties
                </CtaButton>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="
                relative
                h-[220px]
                w-full
                overflow-hidden
                rounded-[20px]
                md:h-[260px]
                lg:h-[290px]
              "
            >
              <Image
                src="/cta-img.png"
                alt="Luxury property"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}