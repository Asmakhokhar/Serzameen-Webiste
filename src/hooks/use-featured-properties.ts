import { useQuery } from "@tanstack/react-query";

import { featuredProperties } from "@/data/featured-properties";

export function useFeaturedProperties() {
  return useQuery({
    queryKey: ["featured-properties"],
    queryFn: () => featuredProperties,
    staleTime: Infinity,
  });
}