import React from "react";
import PropertyHeader from "./property-header";
import KeyFeatures from "./key-features";
import PropertyDescription from "./property-description";
import LeaseHold from "./lease-hold";

const PropertyInfo = () => {
  return (
    <section className="flex flex-col">
      <PropertyHeader />
      <KeyFeatures/>
      <PropertyDescription/>
      <LeaseHold/>
    </section>
  );
};

export default PropertyInfo;
