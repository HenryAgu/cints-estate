"use client";
import Hero from "@/components/about/hero";
import DevelopmentProperties from "@/components/development/development-properties";
import Header from "@/components/shared/header";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DevelopmentPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });
  return (
    <main className="min-h-screen  w-full mx-auto font-didot">
      <Header />
      <Hero title="Development" />
      <div className="mt-10">
        <DevelopmentProperties properties={data ?? []} />
      </div>
    </main>
  );
};

export default DevelopmentPage;
