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
        <p
          className={`text-[20px] tracking-[0.18em]
          ${colored ? "text-[#0E8AA7]" : "text-white"}`}
        >
          SERZAMEEN
        </p>

        {/* <p
          className={`text-[11px] tracking-[0.35em] mt-1
          ${colored ? "text-[#A88A4B]" : "text-white/80"}`}
        >
          ESTATE
        </p> */}
      </div>
    </Link>
  );
}