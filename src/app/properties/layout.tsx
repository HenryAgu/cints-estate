"use client";
import Hero from "@/components/about/hero";
import FilterHeader from "@/components/shared/filter-header";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import { usePathname } from "next/navigation";
import React from "react";

const PropertiesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDetailPage =
    /^\/properties\/[^/]+$/.test(pathname) &&
    !["/properties/shortlet", "/properties/buy"].includes(pathname);

  return (
    <main className="min-h-screen  max-w-4xl w-full mx-auto font-didot">
      <Header />
      {isDetailPage && <Navbar />}
      {!isDetailPage && <Hero title="Properties" />}
      {!isDetailPage && <FilterHeader />}
      <section>{children}</section>
    </main>
  );
};

export default PropertiesLayout;
