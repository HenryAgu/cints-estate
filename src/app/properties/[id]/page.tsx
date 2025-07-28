"use client";
import PropertyDetailsText from "@/components/property-details/property-details-text";
import PropertyImageGrid from "@/components/property-details/property-image-grid";
import { useParams } from "next/navigation";
import React from "react";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <main className="min-h-screen container w-full font-didot">
      <PropertyImageGrid />
      <PropertyDetailsText />
    </main>
  );
};

export default PropertyDetailsPage;
