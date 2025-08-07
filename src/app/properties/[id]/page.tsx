import { Metadata } from "next";
import PropertyDetailsClient from "@/components/property-details/property-details-client";
import { fetchApartmentBySlug } from "@/sanity/lib/fetch-apartment";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const apartment = await fetchApartmentBySlug(params.id);

  if (!apartment) return { title: "Apartment not found" };

  return {
    title: `${apartment.title} | CandyMan Properties`,
    description: apartment.subtitle ?? "Apartment details",
  };
}

export default function PropertyDetailsPage({ params }: Props) {
  return <PropertyDetailsClient id={params.id} />;
}
