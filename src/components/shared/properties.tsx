import React from "react";
import PropertyCard from "../home/property-card";
import { ApartmentType } from "@/sanity/lib/fetch-apartment";

interface PropertiesResponse {
	properties: ApartmentType[];
}

const Properties = ({ properties }: PropertiesResponse) => {
	return (
		<section className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10 lg:mb-20 ">
			{properties.map((item, index) => (
				<PropertyCard item={item} key={index} />
			))}
		</section>
	);
};

export default Properties;
