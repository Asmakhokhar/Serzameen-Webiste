"use client";

import { FormEvent, useState } from "react";

import ContactField from "./contac-field";
import {
  MailIcon,
  MessageIcon,
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
        max-w-[560px]
        rounded-[18px]
        border
        border-[#E5DED2]
        bg-white
        p-6
        shadow-[0_18px_45px_rgba(15,107,101,0.055)]
        md:p-7
      "
    >
      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#CBAF78]" />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[3px]
              text-[#0F6B65]
            "
          >
            Your Details
          </span>
        </div>

        <h3
          className="
            mt-3
            font-serif
            text-[29px]
            leading-[1.1]
            tracking-[-0.5px]
            text-[#1E1E1E]
          "
        >
          Let&apos;s start a{" "}
          <span className="italic text-[#0F6B65]">
            conversation.
          </span>
        </h3>
      </div>

      {/* Fields */}
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">

        <ContactField
          label="Name"
          name="name"
          placeholder="Your name"
          required
          icon={<UserIcon className="h-[17px] w-[17px]" />}
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
          icon={<MailIcon className="h-[17px] w-[17px]" />}
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
          icon={<PhoneIcon className="h-[17px] w-[17px]" />}
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
          icon={<SubjectIcon className="h-[17px] w-[17px]" />}
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
          icon={<MessageIcon className="h-[17px] w-[17px]" />}
          inputProps={{
            value: formData.message,
            onChange: handleChange,
          }}
        />
      </div>

      {/* Footer */}
      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="hidden text-[10px] leading-4 text-[#999] sm:block">
          We&apos;ll get back to you shortly.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            group
            ml-auto
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#0F6B65]
            px-6
            py-3
            text-[12px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-[#0B5753]
            hover:shadow-[0_8px_24px_rgba(15,107,101,0.18)]
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