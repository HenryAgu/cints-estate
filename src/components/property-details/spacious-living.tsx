import localFont from "next/font/local";
import React from "react";
import { ApartmentResponse } from "../type";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const SpaciousLiving = ({ apartment }: ApartmentResponse) => {
  return (
    <div
      className={`${HelveticaNeue.className} flex flex-col gap-y-1.5 lg:gap-y-3 max-w-full lg:max-w-[793px] mt-10`}
    >
      <p
        className={`text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
      >
        Spacious Living
      </p>
      <p className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]">
        {apartment?.spaciousLiving ?? "N/A"}
      </p>
    </div>
  );
};

export default SpaciousLiving;
