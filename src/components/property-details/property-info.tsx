import React from "react";
import PropertyHeader from "./property-header";
import KeyFeatures from "./key-features";
import PropertyDescription from "./property-description";
import LeaseHold from "./lease-hold";
import SpaciousLiving from "./spacious-living";
import OutdoorOasis from "./outdoor-oasis";

const PropertyInfo = () => {
	return (
		<section className="flex flex-col">
			<PropertyHeader />
			<KeyFeatures />
			<PropertyDescription />
			<LeaseHold />
			<SpaciousLiving />
			<OutdoorOasis />
		</section>
	);
};

export default PropertyInfo;
