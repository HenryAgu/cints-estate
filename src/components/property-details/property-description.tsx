import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { ApartmentResponse } from "../type";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const PropertyDescription = ({ apartment }: ApartmentResponse) => {
  const accessibilityTitles: Record<string, string> = {
    wheelchair: "Wheelchair Accessible",
    step_free: "Step-Free Access",
    elevator: "Elevator",
    ground_floor: "Ground Floor",
  };
  return (
    <div
      className={`${HelveticaNeue.className} flex flex-col gap-y-1.5 lg:gap-y-3 max-w-[793px]`}
    >
      <p
        className={`text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
      >
        Property Description
      </p>
      <p className="text-[#121212] font-normal text-base lg:text-lg leading-[160%] capitalize">
        {apartment?.description ?? "N/A"}
      </p>
      <div
        className={`${HelveticaNeue.className} grid grid-cols-2 gap-8 lg:flex justify-between w-full bg-white border border-[#E1E0E0] rounded-3xl p-5 mt-5 capitalize`}
      >
        {/* Council Tax */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Council Tax
            </p>
            <Image
              src="/icons/info.svg"
              alt="info_icon"
              width={18}
              height={18}
              className="aspect-square"
            />
          </div>
          <p className="text-[#414141] font-normal text-base lg:text-lg leading-[140%] capitalize">
            Band {apartment?.councilTax ?? "Ask Agent"}
          </p>
        </div>

        {/* Parking */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Parking
            </p>
            <Image
              src="/icons/info.svg"
              alt="info_icon"
              width={18}
              height={18}
              className="aspect-square"
            />
          </div>
          <p className="text-[#414141] font-normal text-base lg:text-lg leading-[140%] capitalize">
            {apartment?.parking ?? "Ask Agent"}
          </p>
        </div>

        {/* Garden */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Garden
            </p>
            <Image
              src="/icons/info.svg"
              alt="info_icon"
              width={18}
              height={18}
              className="aspect-square"
            />
          </div>
          <p className="text-[#414141] font-normal text-base lg:text-lg leading-[140%] capitalize">
            {apartment?.garden ?? "Ask Agent"}
          </p>
        </div>

        {/* Accessibility */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Accessibility
            </p>
            <Image
              src="/icons/info.svg"
              alt="info_icon"
              width={18}
              height={18}
              className="aspect-square"
            />
          </div>
          <p className="text-[#414141] font-normal text-base lg:text-lg leading-[140%]">
            {apartment?.accessibility?.[0]
              ? (accessibilityTitles[apartment.accessibility[0]] ?? "Ask Agent")
              : "Ask Agent"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
