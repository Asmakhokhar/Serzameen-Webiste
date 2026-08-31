import CtaButton from "@/components/shared/cta-button";

export default function Cta() {
  return (
    <section
      className="
        bg-[#FCFBF8]
        px-6
        py-10
        md:py-12
      "
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            border
            border-[#DED6C8]
            bg-[#F5F1E9]
            px-7
            py-8
            md:px-10
            md:py-9
            lg:px-12
          "
        >
          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-64
              w-64
              rounded-full
              border
              border-[#D7C08A]/30
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-14
              h-44
              w-44
              rounded-full
              border
              border-[#0F6B65]/10
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-7
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* Text */}
            <div className="max-w-[650px]">
              <span
                className="
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[4px]
                  text-[#0F6B65]
                "
              >
                Begin Your Journey
              </span>

              <h2
                className="
                  mt-3
                  font-serif
                  text-[30px]
                  font-normal
                  leading-[1.1]
                  tracking-[-0.5px]
                  text-[#1E1E1E]
                  md:text-[34px]
                "
              >
                Find a place that feels
                <span className="italic text-[#0F6B65]"> right.</span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-[560px]
                  text-[13px]
                  leading-[1.7]
                  text-[#6A6A6A]
                  md:text-[14px]
                "
              >
                Explore thoughtfully selected properties and let us help you
                find your next home or investment.
              </p>
            </div>

            {/* Action */}
            <CtaButton href="/properties">Explore Properties</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
