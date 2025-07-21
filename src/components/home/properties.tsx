import localFont from "next/font/local";
import React from "react";
import PropertyCard from "./propertyCard";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const Properties = () => {
  return (
    <section className="container w-full mx-auto px-4 lg:px-20 py-10 lg:py-24">
      <div className="flex flex-col items-center text-center">
        <p
          className={`${HelveticaNeue.className} text-brand-neutral-500 font-normal text-xl`}
        >
          Properties
        </p>
        <p className="text-[40px] font-bold leading-[130%]">
          Curated Luxury by Cints Estate
        </p>
      </div>
      <PropertyCard />
    </section>
  );
};

export default Properties;
