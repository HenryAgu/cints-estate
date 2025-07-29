import React from "react";
import PropertyCard from "../home/property-card";
import { Property } from "../home/properties";
import Properties from "../shared/properties";
import { ApartmentType } from "@/sanity/lib/fetch-apartment";

interface PropertiesResponse {
	properties: ApartmentType[];
}

const DevelopmentProperties = ({ properties }: PropertiesResponse) => {
	return (
		<section className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20 mb-10">
			<h1 className="text-brand-neutral-500 font-bold text-[28px] lg:text-[32px] lg:leading-[130%]">
				Recent Listings
			</h1>
			<Properties properties={properties} />
		</section>
	);
};

export default DevelopmentProperties;
