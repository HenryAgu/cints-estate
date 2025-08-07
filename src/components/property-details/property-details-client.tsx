"use client";

import { fetchApartmentBySlug } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";
import PropertyImageGrid from "./property-image-grid";
import PropertyDetailsText from "./property-details-text";
import RecentListing from "./recent-listing";

type Props = {
  id: string;
};

const PropertyDetailsClient = ({ id }: Props) => {
  const {
    data: apartment,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["apartment", id],
    queryFn: () => fetchApartmentBySlug(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !apartment) return <div>Something went wrong.</div>;

  return (
    <main className="min-h-screen w-full font-didot mb-12 lg:mb-24">
      <PropertyImageGrid apartment={apartment} />
      <PropertyDetailsText apartment={apartment} />
      <RecentListing />
    </main>
  );
};

export default PropertyDetailsClient;
