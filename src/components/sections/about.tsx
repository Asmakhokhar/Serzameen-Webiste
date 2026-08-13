import AboutVisual from "@/components/shared/about-visual";
import AboutHeading from "../shared/section-heading";
import SectionButton from "../shared/section-button";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FCFBF8] py-24 md:py-28 lg:py-32">
      {/* Subtle decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(15,107,101,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,107,101,0.035)_1px,transparent_1px)] [background-size:90px_90px]"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT VISUAL */}
          <AboutVisual />

          {/* RIGHT CONTENT */}
          <div className="max-w-[500px]">
            {/* <span className="block text-[11px] font-medium uppercase tracking-[5px] text-[#0F6B65]">About Us</span> */}

            <div className="mt-5">
              <AboutHeading title="Discover a place" italicTitle="worth calling home." />
            </div>

            {/* <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D7C08A]" />
              <span className="text-[10px] uppercase tracking-[3px] text-[#A28D64]">Serzameen Estate</span>
            </div> */}

            <div className="mt-7 space-y-4 text-[15px] leading-[1.9] text-[#666]">
              <p>At Serzameen Estate, we believe finding the right property should feel considered, personal and effortless.</p>

              <p>From exceptional waterfront residences to refined urban homes, we carefully connect our clients with properties selected for their character, location and long-term value.</p>
            </div>

            <SectionButton href="/properties" className="mt-9">Explore Properties</SectionButton>
          </div>
        </div>
      </div>
    </section>
  );
}