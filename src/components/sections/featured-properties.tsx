import PropertyCard from "../shared/property-card";
import { featuredProperties } from "@/data/featured-properties";

export default function FeaturedProperties() {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF8] py-24 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#E8E0D2]"
      />

      <div className="mx-auto max-w-[1250px] px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[650px]">
            <div className="space-y-2">
              <h2 className="text-[42px] leading-[1.05] font-light tracking-[-1.5px] text-[#1E1E1E] md:text-[48px] lg:text-[50px]">
                Featured
              </h2>

              <div className="flex items-center gap-5">
                <span className="block h-[1px] w-[58px] bg-[#CBAF78]" />

                <span className="font-serif italic text-[58px] leading-[0.9] text-[#1E1E1E] md:text-[64px] lg:text-[70px]">
                  properties
                </span>
              </div>
            </div>
          </div>

          <p className="max-w-[360px] text-sm leading-7 text-[#666]">
            Explore a curated collection of distinctive residences selected for
            their character, location and long-term value.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
