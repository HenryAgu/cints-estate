import React from "react";
import ContactCard from "./contact-card";
import Location from "../shared/location";
import PropertyInfo from "./property-info";

const PropertyDetailsText = () => {
	return (
		<section className="mx-4 lg:mx-20 mb-20 ">
			<div className="flex lg:flex-row flex-col gap-10">
				<div className="basis-full lg:basis-[70%]">
					<PropertyInfo />
				</div>
				<div className="basis-full lg:basis-[30%]">
					<ContactCard />
				</div>
			</div>
			<Location />
		</section>
	);
};

export default PropertyDetailsText;
