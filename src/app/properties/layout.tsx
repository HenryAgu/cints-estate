import Hero from "@/components/about/hero";
import FilterHeader from "@/components/shared/filter-header";
import Header from "@/components/shared/header";
import React from "react";

const PropertiesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      <Hero title="Properties" />
      <FilterHeader />
      <section>{children}</section>
    </main>
  );
};

export default PropertiesLayout;
