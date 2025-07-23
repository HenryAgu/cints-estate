import Hero from "@/components/about/hero";
import DevelopmentProperties from "@/components/development/development-properties";
import FilterHeader from "@/components/shared/filter-header";
import Header from "@/components/shared/header";
import React from "react";

const PropertiesPage = () => {
  return (
    <main className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      <Hero title="Properties" />
      <FilterHeader/>
      <DevelopmentProperties/>
    </main>
  );
};

export default PropertiesPage;
