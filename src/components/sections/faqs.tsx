import AboutHeading from "../shared/section-heading";
import FAQItem from "../shared/faq-item";
import { FAQS } from "@/data/faqs";

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="
        relative
        overflow-hidden
        bg-[#FCFBF8]
        py-24
        md:py-28
        lg:py-32
      "
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          bg-[linear-gradient(to_right,rgba(15,107,101,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,107,101,0.035)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1200px]
          px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-24
          "
        >
          {/* =========================================
              LEFT — SECTION HEADING
          ========================================== */}
          <div className="lg:pt-2">
            <AboutHeading title="Frequently Asked" italicTitle="Questions" />

            <p
              className="
                mt-8
                max-w-sm
                font-[var(--font-manrope)]
                text-[14px]
                leading-7
                text-[#666]
              "
            >
              Everything you need to know before finding your next place with
              Serzameen.
            </p>
          </div>

          {/* =========================================
              RIGHT — FAQ LIST
          ========================================== */}
          <div
            className=" overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,107,101,0.05)]"
          >
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} item={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
