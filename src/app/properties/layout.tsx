"use client";
import Hero from "@/components/about/hero";
import FilterHeader from "@/components/shared/filter-header";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import { fetchApartmentType } from "@/sanity/lib/fetch-apartment";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React from "react";

const PropertiesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDetailPage =
    /^\/properties\/[^/]+$/.test(pathname) &&
    !["/properties/shortlet", "/properties/buy"].includes(pathname);

  const { data:apartmentTypes, isLoading, error } = useQuery({
    queryKey: ["house"],
    queryFn: fetchApartmentType,
  });
  console.log(apartmentTypes)

  return (
    <main className="min-h-screen font-didot">
      <Header />
      {isDetailPage && <Navbar />}
      {!isDetailPage && <Hero title="Properties" />}
      {!isDetailPage && <FilterHeader apartmentTypes={apartmentTypes}/>}
      <section>{children}</section>
    </main>
  );
};

export default PropertiesLayout;
