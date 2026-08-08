import Image from "next/image";
import AboutHeading from "../shared/section-heading";
import SectionButton from "../shared/section-button";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FCFCFA]
        py-24
        md:py-28
        lg:py-32
      "
    >
      {/* About Background PNG */}
      <img
        src="/about-bg.png"
        alt=""
        className="
          absolute
          inset-x-0
          top-0
          h-[50%]
          w-full
          object-cover
          object-center
          opacity-100
          pointer-events-none
          z-0
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1150px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

          {/* IMAGE */}
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-[12px] md:h-[580px] lg:h-[620px]">
              <Image
                src="/hero.jpg"
                alt="Serzameen Estate"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-[500px]">

            <AboutHeading
              title="Investing with"
              italicTitle="purpose"
            />

            <p className="mt-9 text-[16px] leading-[1.8] text-[#454545]">
              Throughout our journey, we have developed a deep understanding
              of the property market and the opportunities it offers. At
              Serzameen Estate, we combine market knowledge with a thoughtful
              approach to help our clients discover properties that offer
              exceptional living and lasting value.
            </p>

            <div className="mt-9">
              <SectionButton href="/properties">
                Available Properties
              </SectionButton>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}