"use client";
import PropertyDetailsText from "@/components/property-details/property-details-text";
import PropertyImageGrid from "@/components/property-details/property-image-grid";
import RecentListing from "@/components/property-details/recent-listing";
import { useParams } from "next/navigation";
import React from "react";

const PropertyDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	console.log(id);
	return (
		<main className="min-h-screen w-full font-didot mb-12 lg:mb-24">
			<PropertyImageGrid />
			<PropertyDetailsText />
			<RecentListing />
		</main>
	);
};

export default PropertyDetailsPage;
