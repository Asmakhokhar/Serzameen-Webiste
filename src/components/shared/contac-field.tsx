import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

interface BaseFieldProps {
  label: string;
  name: string;
  required?: boolean;
  icon: ReactNode;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps {
  textarea?: false;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "name" | "required" | "placeholder"
  >;
}

interface TextareaFieldProps extends BaseFieldProps {
  textarea: true;
  placeholder?: string;
  inputProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "name" | "required" | "placeholder"
  >;
}

type ContactFieldProps = InputFieldProps | TextareaFieldProps;

export default function ContactField({
  label,
  name,
  required = false,
  icon,
  placeholder,
  className = "",
  ...props
}: ContactFieldProps) {
  return (
    <div className={`group ${className}`}>
      <label
        htmlFor={name}
        className="
          mb-2
          flex
          items-center
          gap-2
          text-[10px]
          font-medium
          uppercase
          tracking-[2px]
          text-[#6A6A6A]
        "
      >
        {label}

        {required && (
          <span className="text-[#CBAF78]" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-[#DED7CB]
          transition-colors
          duration-300
          group-focus-within:border-[#0F6B65]
        "
      >
        <span
          className="
            shrink-0
            text-[#CBAF78]
            transition-colors
            duration-300
            group-focus-within:text-[#0F6B65]
          "
        >
          {icon}
        </span>

        {props.textarea ? (
          <textarea
            id={name}
            name={name}
            required={required}
            placeholder={placeholder}
            rows={3}
            {...props.inputProps}
            className="
              min-h-[82px]
              w-full
              resize-none
              border-0
              bg-transparent
              px-0
              py-2.5
              text-[13px]
              leading-6
              text-[#222]
              outline-none
              placeholder:text-[#A7A7A7]
            "
          />
        ) : (
          <input
            id={name}
            name={name}
            type={props.type ?? "text"}
            required={required}
            placeholder={placeholder}
            {...props.inputProps}
            className="
              h-10
              w-full
              border-0
              bg-transparent
              px-0
              py-2
              text-[13px]
              text-[#222]
              outline-none
              placeholder:text-[#A7A7A7]
            "
          />
        )}
      </div>
    </div>
  );
}