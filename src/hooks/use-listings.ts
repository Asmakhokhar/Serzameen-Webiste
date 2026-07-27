import { useQuery } from "@tanstack/react-query";
import { listings } from "@/data/listings";

export function useListings() {
  return useQuery({
    queryKey: ["listings"],
    queryFn: async () => listings,
  });
}
