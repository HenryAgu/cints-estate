"use client";

import React from "react";
import PropertiesSkeleton from "../shared/properties-skeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchApartment } from "@/sanity/lib/fetch-apartment";
import PropertyCard from "../home/property-card";
import localFont from "next/font/local";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const RecentListing = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", ""], // use a dynamic key if using filters
    queryFn: () => fetchApartment(""), // pass default values
  });

  if (isLoading) {
    return (
      <div className=" w-full mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-20 xl:py-24">
        <div className="flex flex-col items-center text-center">
          <p
            className={`${HelveticaNeue.className} text-brand-neutral-500 font-normal text-lg lg:text-xl`}
          >
            Properties
          </p>
          <p className="text-3xl lg:text-[40px] font-bold leading-[130%]">
            Curated Luxury by Cints Estate
          </p>
        </div>
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
    <div className="px-4 lg:px-20 py-10 lg:py-20 bg-[#F6F4F0]">
      <p className="text-brand-neutral-500 font-bold text-[28px] lg:text-[32px] lg:leading-[130%]">
        Recent Listings
      </p>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-10 mt-14">
        {data?.slice(0, 3)?.map((item, index) => (
          <PropertyCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
