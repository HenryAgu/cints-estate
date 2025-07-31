import React from "react";
import PropertyHeader from "./property-header";
import KeyFeatures from "./key-features";
import PropertyDescription from "./property-description";

const PropertyInfo = () => {
  return (
    <section className="flex flex-col">
      <PropertyHeader />
      <KeyFeatures/>
      <PropertyDescription/>
    </section>
  );
};

export default PropertyInfo;
