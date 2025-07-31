import React from "react";
import PropertyHeader from "./property-header";
import KeyFeatures from "./key-features";

const PropertyInfo = () => {
  return (
    <section className="flex flex-col">
      <PropertyHeader />
      <KeyFeatures/>
    </section>
  );
};

export default PropertyInfo;
