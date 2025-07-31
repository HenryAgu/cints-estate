import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const PropertyCard = () => {
  return (
    <div
      className={`${HelveticaNeue.className} flex gap-x-25 bg-white border border-[#E1E0E0] rounded-3xl w-fit p-5 mt-5`}
    >
      {/* Property type */}
      <div className="flex flex-col gap-y-3">
        <p className="text-[#121212] font-semibold text-lg leading-[140%]">
          Property Type
        </p>
        <p className="text-[#414141] font-normal text-lg leading-[140%]">1</p>
      </div>

      {/* Property type */}
      <div className="flex flex-col gap-y-3">
        <p className="text-[#121212] font-semibold text-lg leading-[140%]">
          Bedrooms
        </p>
        <p className="text-[#414141] font-normal text-lg leading-[140%]">1</p>
      </div>
      {/* Property type */}
      <div className="flex flex-col gap-y-3">
        <p className="text-[#121212] font-semibold text-lg leading-[140%]">
          Bathrooms
        </p>
        <p className="text-[#414141] font-normal text-lg leading-[140%]">1</p>
      </div>
      {/* Property type */}
      <div className="flex flex-col gap-y-3">
        <p className="text-[#121212] font-semibold text-lg leading-[140%]">
          Size
        </p>
        <p className="text-[#414141] font-normal text-lg leading-[140%]">1</p>
      </div>
      {/* Property type */}
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <p className="text-[#121212] font-semibold text-lg leading-[140%]">
            Tenure
          </p>
          <Image src="/icons/info.svg" alt="info_icon" width={18} height={18} className="aspect-square"/>
        </div>
        <p className="text-[#414141] font-normal text-lg leading-[140%]">1</p>
      </div>
    </div>
  );
};

export default PropertyCard;
