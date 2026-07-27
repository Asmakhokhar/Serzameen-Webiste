import type { Listing } from "@/types/listing";

export const listings: Listing[] = [
  {
    id: 1,
    title: "Ocean View Residence",
    type: "Villa",
    location: "Beverly Hills, CA",
    price: "$1.2M",
    bedrooms: 4,
    bathrooms: 3,
    description: "A bright, contemporary villa with private terraces and premium finishes.",
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    type: "Apartment",
    location: "Downtown, Chicago",
    price: "$890K",
    bedrooms: 3,
    bathrooms: 2,
    description: "Panoramic city views, concierge service, and a chef-ready kitchen.",
  },
  {
    id: 3,
    title: "Garden Townhouse",
    type: "Townhouse",
    location: "Austin, TX",
    price: "$640K",
    bedrooms: 3,
    bathrooms: 2,
    description: "A welcoming family home with a landscaped courtyard and smart features.",
  },
];
