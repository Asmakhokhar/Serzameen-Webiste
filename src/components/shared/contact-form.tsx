"use client";

import { FormEvent, useState } from "react";

import ContactField from "./contact-field";
import {
  MailIcon,
  PhoneIcon,
  SubjectIcon,
  UserIcon,
} from "./contact-icons";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(INITIAL_FORM);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // API integration later
      console.log(formData);

      setFormData(INITIAL_FORM);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        rounded-[24px]
        bg-white
        p-7
        shadow-[0_20px_60px_rgba(15,107,101,0.05)]
        md:p-9
      "
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#D7C08A]"
          />

          <span
            className="
              font-[var(--font-manrope)]
              text-[9px]
              font-semibold
              uppercase
              tracking-[3px]
              text-[#0F6B65]
            "
          >
            Your Details
          </span>
        </div>

        {/* <h3
          className="
            mt-3
            font-serif
            text-[30px]
            font-normal
            leading-[1.1]
            tracking-[-0.7px]
            text-[#1E1E1E]
            md:text-[32px]
          "
        >
          Let&apos;s start a{" "}
          <span className="italic text-[#0F6B65]">
            conversation.
          </span>
        </h3> */}
      </div>

      {/* Fields */}
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <ContactField
          label="Name"
          name="name"
          placeholder="Your name"
          required
          icon={<UserIcon className="h-4 w-4" />}
          inputProps={{
            value: formData.name,
            onChange: handleChange,
            autoComplete: "name",
          }}
        />

        <ContactField
          label="Email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          icon={<MailIcon className="h-4 w-4" />}
          inputProps={{
            value: formData.email,
            onChange: handleChange,
            autoComplete: "email",
          }}
        />

        <ContactField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Your phone"
          icon={<PhoneIcon className="h-4 w-4" />}
          inputProps={{
            value: formData.phone,
            onChange: handleChange,
            autoComplete: "tel",
          }}
        />

        <ContactField
          label="Subject"
          name="subject"
          placeholder="Your enquiry"
          required
          icon={<SubjectIcon className="h-4 w-4" />}
          inputProps={{
            value: formData.subject,
            onChange: handleChange,
          }}
        />

        <ContactField
          label="Message"
          name="message"
          placeholder="Tell us what you're looking for..."
          required
          textarea
          className="sm:col-span-2"
          icon={''}
          inputProps={{
            value: formData.message,
            onChange: handleChange,
          }}
        />
      </div>

      {/* Footer */}
      <div
        className="
          mt-7
          flex
          flex-col
          gap-4
          pt-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p
          className="
            font-[var(--font-manrope)]
            text-[10px]
            leading-4
            text-[#999]
          "
        >
          We&apos;ll get back to you shortly.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-3
            rounded-full
            bg-[#0F6B65]
            px-6
            py-3
            font-[var(--font-manrope)]
            text-[12px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#0B5753]
            hover:shadow-[0_8px_24px_rgba(15,107,101,0.16)]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <span>
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </span>

          <span
            aria-hidden="true"
            className="
              text-base
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}