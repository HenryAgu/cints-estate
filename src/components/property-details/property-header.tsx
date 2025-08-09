import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import PropertyCard from "./property-card";
import { ApartmentResponse } from "../type";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const PropertyHeader = ({ apartment }: ApartmentResponse) => {
  return (
    <div className="flex flex-col gap-y-2.5 lg:gap-y-5 mb-10">
      {/* Location */}
      <div className="flex items-center gap-x-3">
        <Image
          src="/icons/location.svg"
          alt="location_icon"
          width={32}
          height={32}
          className="aspect-square"
        />
        <span
          className={`${HelveticaNeue.className} text-[#606060] text-lg lg:text-[23px] capitalize`}
        >
          {apartment?.location ?? "N/A"}
        </span>
      </div>
      <p className="text-black font-bold text-3xl lg:text-[40px] leading-[130%] capitalize" >
        {apartment?.title ?? "N/A"}
      </p>
      {/* Description */}
      <p
        className={`${HelveticaNeue.className} max-w-full lg:max-w-[630px] text-lg lg:text-xl font-light leading-[140%] capitalize`}
      >
        {apartment?.subtitle ?? "N/A"}
      </p>
      {/* Price */}
      <p className="text-brand-secondary-500 font-bold text-3xl lg:text-4xl leading-[140%]">
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(apartment?.price || 0)}
        /month
      </p>
      {/* Property card */}
      <PropertyCard apartment={apartment}/>
    </div>
  );
};

export default PropertyHeader;
