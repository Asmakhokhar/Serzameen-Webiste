import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  colored?: boolean;
}

export default function Logo({ colored = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={colored ? "/logo2.png" : "/logo2.png"}
        alt="Serzameen Estate"
        width={52}
        height={52}
        priority
      />

      <div className="leading-none">
        <h2
          className={`text-[24px] font-semibold tracking-[0.18em]
          ${colored ? "text-[#0D3B4A]" : "text-white"}`}
        >
          SERZAMEEN
        </h2>

        <p
          className={`text-[11px] tracking-[0.35em] mt-1
          ${colored ? "text-[#A88A4B]" : "text-white/80"}`}
        >
          ESTATE
        </p>
      </div>
    </Link>
  );
}