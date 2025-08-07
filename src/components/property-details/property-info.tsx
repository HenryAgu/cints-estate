import React from "react";
import PropertyHeader from "./property-header";
import KeyFeatures from "./key-features";
import PropertyDescription from "./property-description";
import LeaseHold from "./lease-hold";
import SpaciousLiving from "./spacious-living";
import OutdoorOasis from "./outdoor-oasis";
import { ApartmentResponse } from "../type";

const PropertyInfo = ({apartment}:ApartmentResponse) => {
	return (
		<section className="flex flex-col">
			<PropertyHeader apartment={apartment}/>
			<KeyFeatures apartment={apartment}/>
			<PropertyDescription apartment={apartment}/>
			<LeaseHold apartment={apartment}/>
			<SpaciousLiving apartment={apartment}/>
			<OutdoorOasis apartment={apartment}/>
		</section>
	);
};

export default PropertyInfo;
