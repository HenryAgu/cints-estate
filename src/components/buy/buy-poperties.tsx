"use client";
import React from "react";
import Properties from "../shared/properties";
import { useQuery } from "@tanstack/react-query";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import PropertiesSkeleton from "../shared/properties-skeleton";
import { notFound } from "next/navigation";

const BuyProperties = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });
  if (isLoading) {
    return (
      <div className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20">
        <PropertiesSkeleton />;
      </div>
    );
  }
  if (error) {
    return notFound();
  }
  return (
    <section className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20">
      <h1 className="text-brand-neutral-500 font-bold text-[28px] lg:text-[32px] lg:leading-[130%]">
        Buy Properties
      </h1>
      <Properties properties={data ?? []} />
    </section>
  );
};

export default BuyProperties;
