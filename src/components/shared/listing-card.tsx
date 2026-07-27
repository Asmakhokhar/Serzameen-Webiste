import type { Listing } from "@/types/listing";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="overflow-hidden border-slate-200 shadow-sm">
      <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-100" />
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-xl">{listing.title}</CardTitle>
          <Badge variant="secondary">{listing.type}</Badge>
        </div>
        <CardDescription>{listing.location}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-600">
        <p>{listing.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-900">{listing.price}</span>
          <span>{listing.bedrooms} beds • {listing.bathrooms} baths</span>
        </div>
      </CardContent>
    </Card>
  );
}
