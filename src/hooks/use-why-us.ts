import { useQuery } from "@tanstack/react-query";

import { whyUsItems } from "@/data/why-us";

export function useWhyUs() {
  return useQuery({
    queryKey: ["why-us"],
    queryFn: () => whyUsItems,
    staleTime: Infinity,
  });
}