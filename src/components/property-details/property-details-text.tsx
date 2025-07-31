import React from "react";
import ContactCard from "./contact-card";

const PropertyDetailsText = () => {
  return (
    <section className="mx-4 lg:mx-20 mb-20 flex gap-x-10">
      <div className="basis-[70%]">1</div>
      <div className="basis-[30%]">
        <ContactCard />
      </div>
    </section>
  );
};

export default PropertyDetailsText;
