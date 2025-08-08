"use client";
import React from "react";
import Properties from "../shared/properties";
import { useQuery } from "@tanstack/react-query";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import PropertiesSkeleton from "../shared/properties-skeleton";

const ShortletProperties = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });

  if (isLoading) {
    return (
      <div className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20">
        <h1 className="text-brand-neutral-500 font-bold text-[28px] lg:text-[32px] lg:leading-[130%]">
          Shortlet Properties
        </h1>
        <PropertiesSkeleton />
      </div>
    );
  }
  if (error) {
    return (
      <section className="flex items-center justify-center py-10 lg:py-20 xl:py-24">
        <p>Error</p>
      </section>
    );
  }
  return (
    <section className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20">
      <h1 className="text-brand-neutral-500 font-bold text-[28px] lg:text-[32px] lg:leading-[130%]">
        Shortlet Properties
      </h1>
      <Properties properties={data ?? []} />
    </section>
  );
};

export default ShortletProperties;
