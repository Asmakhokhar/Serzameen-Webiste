import Image from "next/image";
import Link from "next/link";

import SectionButton from "./section-button";

export interface PropertyCardProps {
  id: string;
  image: string;
  category: string;
  title: string;
  location: string;
  description: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
}

interface PropertyStatProps {
  label: string;
  value: string;
  bordered?: boolean;
}

function PropertyStat({ label, value, bordered = false }: PropertyStatProps) {
  return (
    <div className={bordered ? "border-l border-[#ECE7DE] pl-4" : ""}>
      <span className="block text-[10px] uppercase tracking-[2px] text-[#999]">
        {label}
      </span>
      <span className="mt-1 block text-sm font-medium text-[#333]">{value}</span>
    </div>
  );
}

export default function PropertyCard({
  id,
  image,
  category,
  title,
  location,
  description,
  beds,
  baths,
  area,
  price,
}: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[18px] border border-[#E8E0D2] bg-white shadow-[0_10px_40px_rgba(15,107,101,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,107,101,0.12)]">
      <Link href={`/properties/${id}`} className="relative block h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[3px] text-white">
            <span className="h-px w-7 bg-[#D7C08A]" />
            {category}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-[#777]">
          <span className="text-[#0F6B65]">⌖</span>
          <span>{location}</span>
        </div>

        <h3 className="line-clamp-1 font-[family-name:var(--font-heading)] text-[25px] leading-tight text-[#202020]">
          {title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#666]">
          {description}
        </p>

        <div className="mt-6 grid grid-cols-3 border-y border-[#ECE7DE] py-4">
          <PropertyStat label="Beds" value={beds.toString()} />
          <PropertyStat label="Baths" value={baths.toString()} bordered />
          <PropertyStat label="Area" value={area} bordered />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <span className="block text-xs uppercase tracking-[2px] text-[#999]">
              Price
            </span>
            <span className="mt-1 block text-xl font-medium text-[#0F6B65]">
              {price}
            </span>
          </div>

          <SectionButton
            href={`/properties/${id}`}
            className="rounded-full border-[#D7C08A] px-5 py-3 text-sm text-[#333] hover:border-[#0F6B65] hover:bg-[#0F6B65] hover:text-white"
          >
            View Property
          </SectionButton>
        </div>
      </div>
    </article>
  );
}
