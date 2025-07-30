"use client";
import DevelopmentProperties from "@/components/development/development-properties";
import React from "react";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";


const PropertiesPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });
  return (
    <main className="min-h-screen w-full mx-auto font-didot">
      <DevelopmentProperties properties={data ?? []} />
    </main>
  );
};

export default PropertiesPage;
