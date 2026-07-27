import type { Listing } from "@/types/listing";
import { ListingCard } from "@/components/shared/listing-card";

interface ListingsGridProps {
  listings: Listing[];
}

export function ListingsGrid({ listings }: ListingsGridProps) {
  return (
    <section id="listings" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Featured deals</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Handpicked properties for every lifestyle</h2>
        </div>
        <p className="max-w-xl text-slate-600">Each listing is carefully reviewed to balance value, location, and long-term potential.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
