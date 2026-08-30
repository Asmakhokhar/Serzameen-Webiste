"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import PropertyCard from "../shared/property-card";
import { useFeaturedProperties } from "@/hooks/use-featured-properties";

function FeaturedPropertiesContent() {
  const { data: featuredProperties = [] } = useFeaturedProperties();

  return (
    <section className="relative overflow-hidden bg-[#FCFBF8] py-24 md:py-28">
      <div className="mx-auto max-w-312.5 px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-162.5">
            <div className="space-y-2">
              <h2 className="text-[42px] leading-[1.05] font-light tracking-[-1.5px] text-[#1E1E1E] md:text-[48px] lg:text-[50px]">
                Featured
              </h2>

              <div className="flex items-center gap-5">
                <span className="block h-px w-14.5 bg-[#CBAF78]" />

                <span className="font-serif italic text-[58px] leading-[0.9] text-[#1E1E1E] md:text-[64px] lg:text-[70px]">
                  properties
                </span>
              </div>
            </div>
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
