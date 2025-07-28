"use client";
import Hero from "@/components/about/hero";
import FilterHeader from "@/components/shared/filter-header";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import { usePathname } from "next/navigation";
import React from "react";

const PropertiesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDetailPage = /^\/properties\/[^/]+$/.test(pathname);
  return (
    <main className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      {isDetailPage && <Navbar/>}
      {!isDetailPage && <Hero title="Properties" />}
      {!isDetailPage && <FilterHeader />}
      <section>{children}</section>
    </main>
  );
};

export default PropertiesLayout;
