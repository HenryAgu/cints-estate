import React from "react";
import ContactCard from "./contact-card";
import Location from "../shared/location";
import PropertyInfo from "./property-info";
import { ApartmentType } from "@/sanity/lib/fetch-apartment";
import { ApartmentResponse } from "../type";

const PropertyDetailsText = ({ apartment }: ApartmentResponse) => {
  return (
    <section className="mx-4 lg:mx-20 mb-20 ">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="basis-full lg:basis-[70%]">
          <PropertyInfo apartment={apartment}/>
        </div>
        <div className="basis-full lg:basis-[30%]">
          <ContactCard apartment={apartment}/>
        </div>
      </div>
      <Location apartment={apartment}/>
    </section>
  );
};

export default PropertyDetailsText;
