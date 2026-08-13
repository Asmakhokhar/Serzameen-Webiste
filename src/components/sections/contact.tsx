import ContactForm from "@/components/shared/contact-form";
import AboutHeading from "@/components/shared/section-heading";

import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
} from "@/components/shared/contact-icons";

interface ContactDetailProps {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}

function ContactDetail({
  label,
  value,
  href,
  icon,
}: ContactDetailProps) {
  const content = (
    <div className="flex items-center gap-4">
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#E4DCCF]
          bg-white
          text-[#0F6B65]
        "
      >
        {icon}
      </span>

      <div>
        <span
          className="
            block
            text-[9px]
            font-medium
            uppercase
            tracking-[2.5px]
            text-[#CBAF78]
          "
        >
          {label}
        </span>

        <span className="mt-1 block text-[14px] text-[#333]">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition-opacity duration-300 hover:opacity-70"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#FCFBF8]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* Decorative Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(to_right,rgba(15,107,101,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,107,101,0.035)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.78fr_1.22fr]
            lg:gap-16
          "
        >
          {/* Left */}
          <div className="max-w-[420px]">
            <span
              className="
                mb-4
                block
                text-[10px]
                font-medium
                uppercase
                tracking-[4px]
                text-[#0F6B65]
              "
            >
              Get In Touch
            </span>

            <AboutHeading
              title="Let's find your"
              italicTitle="place"
            />

            <p
              className="
                mt-7
                max-w-[390px]
                text-[14px]
                leading-[1.85]
                text-[#666]
              "
            >
              Whether you&apos;re searching for a new home, exploring an
              investment opportunity, or simply want to know more about
              the market, we&apos;re here to help.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-5">
              <ContactDetail
                label="Email"
                value="hello@serzameen.com"
                href="mailto:hello@serzameen.com"
                icon={
                  <MailIcon className="h-[17px] w-[17px]" />
                }
              />

              <ContactDetail
                label="Phone"
                value="+971 00 000 0000"
                href="tel:+971000000000"
                icon={
                  <PhoneIcon className="h-[17px] w-[17px]" />
                }
              />

              <ContactDetail
                label="Location"
                value="Dubai, United Arab Emirates"
                icon={
                  <LocationIcon className="h-[17px] w-[17px]" />
                }
              />
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}