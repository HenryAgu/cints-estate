"use client"
import { useParams } from "next/navigation";
import React from "react";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <main className="min-h-screen container w-full mx-auto font-didot mx-4 lg:mx-10 xl:mx-14 2xl:mx-20">
      Property Details Page: {id}
    </main>
  );
};

export default PropertyDetailsPage;
