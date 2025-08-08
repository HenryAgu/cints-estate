"use client";
import Hero from "@/components/about/hero";
import DevelopmentProperties from "@/components/development/development-properties";
import Header from "@/components/shared/header";
import PropertiesSkeleton from "@/components/shared/properties-skeleton";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import React from "react";

const DevelopmentPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });
  if (isLoading) {
    return <PropertiesSkeleton />;
  }
  if (error) {
    return notFound();
  }
  return (
    <main className="min-h-screen font-didot">
      <Header />
      <Hero title="Development" />
      <div className="mt-10">
        <DevelopmentProperties properties={data ?? []} />
      </div>
    </main>
  );
};

export default DevelopmentPage;
