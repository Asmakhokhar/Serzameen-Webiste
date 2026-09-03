"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import PropertyCard from "../shared/property-card";
import SectionHeading from "../shared/section-heading";
import { useFeaturedProperties } from "@/hooks/use-featured-properties";

function FeaturedPropertiesContent() {
  const { data: featuredProperties = [] } = useFeaturedProperties();

  return (
    <section className="relative overflow-hidden bg-[#FCFBF8] py-24 md:py-28">
      <div className="mx-auto max-w-312.5 px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-162.5">
            <SectionHeading title="Featured" italicTitle="properties" />
          </div>

          <p className="max-w-90 text-sm leading-7 text-[#666]">
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

export default function FeaturedProperties() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <FeaturedPropertiesContent />
    </QueryClientProvider>
  );
}
