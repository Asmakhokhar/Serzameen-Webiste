import Contact from "@/components/sections/contact";
import CallToAction from "@/components/sections/cta";
import ContactPageHero from "@/components/sections/contact-page-hero";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1E1E]">
      <ContactPageHero />

      <section className="mx-auto max-w-[1200px] px-6 pb-4 pt-16 md:pt-20">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-[10px] font-medium uppercase tracking-[4px] text-[#0F6B65]">
            Contact
          </span>

          <h2 className="mt-4 font-serif text-[38px] leading-[1.05] tracking-[-0.8px] text-[#1E1E1E] md:text-[48px]">
            Send Us an <span className="italic text-[#0F6B65]">Enquiry</span>
          </h2>
        </div>

        <Contact
          showIntro={false}
          description="Whether you are buying, investing, or simply exploring the market, our team is ready to guide you with clarity and care."
        />
      </section>

      <CallToAction />
    </div>
  );
}
