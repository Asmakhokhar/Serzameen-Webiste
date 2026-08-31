import Image from "next/image";

interface LogoProps {
  colored?: boolean;
}

export default function Logo({ colored = false }: LogoProps) {
  return (
    <div className="flex items-end">
      <Image
        src= "/nav.png"
        alt="Serzameen Estate"
        width={60}
        height={60}
        priority
      />

      <div className="leading-none mb-2">
        <p
          className={`text-[18px] tracking-[0.19em]
          text-white`}
        >
          Serzameen
        </p>

      </div>
    </div>
  );
}