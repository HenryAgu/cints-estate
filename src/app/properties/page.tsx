"use client";
import DevelopmentProperties from "@/components/development/development-properties";
import React from "react";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";
import PropertiesSkeleton from "@/components/shared/properties-skeleton";
import { notFound } from "next/navigation";

const PropertiesPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });
  if (isLoading) {
    return (
      <div className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20 mb-10">
        <PropertiesSkeleton />;
      </div>
    );
  }
  if (error) {
    return notFound();
  }
  return (
    <main className="min-h-screen w-full mx-auto font-didot">
      <DevelopmentProperties properties={data ?? []} />
    </main>
  );
};

export default PropertiesPage;
