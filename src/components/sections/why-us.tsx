import AboutHeading from "@/components/shared/section-heading";
import WhyUsCard from "@/components/shared/why-us-card";
import { whyUsItems } from "@/data/why-us";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-[#FCFBF8]
        py-24
        md:py-28
        lg:py-32
      "
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
          bg-[linear-gradient(to_right,rgba(15,107,101,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,107,101,0.045)_1px,transparent_1px)]
          bg-size-[72px_72px]
        "
      />

      {/* Soft background glow */}
      
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-125
          w-125
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D7C08A]/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-310 px-6">

        {/* Section Header */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-end
          "
        >
          {/* Left */}
          <div>
            {/* <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E5DED2]
                bg-white/70
                px-4
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[3px]
                text-[#0F6B65]
              "
            >
              <span className="text-[#D7C08A]">✦</span>
              Why Serzameen
            </span> */}

            <div className="mt-6">
              <AboutHeading title="A more thoughtful" italicTitle="way to find your place." />
            </div>
          </div>

          {/* Right */}
          <div className="max-w-107.5 lg:ml-auto lg:pb-2">
            <p
              className="
                text-[14px]
                leading-[1.9]
                text-[#686868]
                md:text-[15px]
              "
            >
              We believe exceptional property experiences begin with
              thoughtful guidance. From carefully selected homes to
              transparent advice, Serzameen is built around helping you
              make decisions with confidence.
            </p>

            <a
              href="/about"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#0F6B65]
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#0B5753]
                hover:shadow-[0_10px_30px_rgba(15,107,101,0.18)]
              "
            >
              Discover More
              <span aria-hidden="true" className="text-base transition-transform duration-300 hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-24
            lg:grid-cols-[0.78fr_1.55fr_0.78fr_0.78fr]
            lg:items-center
          "
        >
          {whyUsItems.map((item) => (
            <WhyUsCard key={item.number} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
