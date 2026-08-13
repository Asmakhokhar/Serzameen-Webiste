import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseFieldProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}

type ContactFieldProps =
  | (BaseFieldProps & {
      type?: "text" | "email" | "tel";
      textarea?: false;
      placeholder?: string;
      inputProps?: Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "name" | "placeholder" | "required"
      >;
    })
  | (BaseFieldProps & {
      textarea: true;
      placeholder?: string;
      inputProps?: Omit<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        "name" | "placeholder" | "required"
      >;
    });

const FIELD_CLASSES = `
  w-full
  border-0
  border-b
  border-[#D9D1C3]
  bg-transparent
  px-0
  py-3
  text-[15px]
  text-[#1E1E1E]
  outline-none
  placeholder:text-[#A5A5A5]
  transition-colors
  duration-300
  focus:border-[#0F6B65]
`;

export default function ContactField(props: ContactFieldProps) {
  const {
    label,
    name,
    required = false,
    placeholder,
    className = "",
  } = props;

  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-widest text-[#3D3D3D]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#D7C08A]" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {props.textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          {...props.inputProps}
          className={`${FIELD_CLASSES} resize-none leading-6`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={props.type ?? "text"}
          required={required}
          placeholder={placeholder}
          {...props.inputProps}
          className={FIELD_CLASSES}
        />
      )}
    </div>
  );
}
