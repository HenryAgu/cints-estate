"use client";
import PropertyDetailsText from "@/components/property-details/property-details-text";
import PropertyImageGrid from "@/components/property-details/property-image-grid";
import RecentListing from "@/components/property-details/recent-listing";
import { fetchApartmentBySlug } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Head from "next/head";
import React from "react";
import PropetiesDetailsSkeleton from "@/components/property-details/propeties-details-skeleton";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: apartment,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cars", id],
    queryFn: () => fetchApartmentBySlug(id as string),
    enabled: !!id,
  });

  if (isLoading) return <PropetiesDetailsSkeleton />;
  if (error) return <div>Something went wrong.</div>;
  if (!apartment) return <div>Apartment not found.</div>;

  return (
    <>
      <Head>
        <title>{apartment.title} | Cints estate</title>
        <meta
          name="description"
          content={apartment.subtitle ?? "Apartment details"}
        />
      </Head>

      <main className="min-h-screen w-full font-didot mb-12 lg:mb-24">
        <PropertyImageGrid apartment={apartment} />
        <PropertyDetailsText apartment={apartment} />
        <RecentListing />
      </main>
    </>
  );
};

export default PropertyDetailsPage;
