interface ContactIconProps {
  className?: string;
}

interface IconProps extends ContactIconProps {
  children: React.ReactNode;
}

function Icon({ className = "", children }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 ${className}`}
    >
      {children}
    </svg>
  );
}

export function MailIcon({ className }: ContactIconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

export function PhoneIcon({ className }: ContactIconProps) {
  return (
    <Icon className={className}>
      <path d="M6.5 3.5h2l1.5 4-2 1.5a15 15 0 0 0 7 7l1.5-2 4 1.5v2a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 6a2 2 0 0 1 2-2.5Z" />
    </Icon>
  );
}

export function LocationIcon({ className }: ContactIconProps) {
  return (
    <Icon className={className}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function UserIcon({ className }: ContactIconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c.7-3.3 3.1-5 7-5s6.3 1.7 7 5" />
    </Icon>
  );
}

export function SubjectIcon({ className }: ContactIconProps) {
  return (
    <Icon className={className}>
      <path d="M4 5.5h16v13H4z" />
      <path d="M8 9h8M8 13h5" />
    </Icon>
  );
}

export function MessageIcon({ className }: ContactIconProps) {
  return (
    <Icon className={className}>
      <path d="M5 5h14v10H9l-4 4V5Z" />
    </Icon>
  );
}