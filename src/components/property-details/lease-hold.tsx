import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const LeaseHold = () => {
  return (
    <div
      className={`${HelveticaNeue.className} flex flex-col gap-y-1.5 lg:gap-y-3 max-w-[793px] mt-10`}
    >
      <p className={`text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}>
        Lease hold
      </p>
      <p className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]">
        Secure long-term rights to use and enjoy the property, while ownership
        of the land remains with the freeholder.
      </p>
      <div
        className={`${HelveticaNeue.className} grid grid-cols-1 gap-8 lg:flex justify-between w-full bg-white border border-[#E1E0E0] rounded-3xl p-5 mt-5`}
      >
        {/* Ground Rent */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Ground Rent
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
            Band A
          </p>
        </div>

        {/* Annual Service Charge */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Annual Service Charge
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
            Off street
          </p>
        </div>

        {/* Length of Lease */}
        <div className="flex flex-col gap-y-1.5 lg:gap-y-3">
          <div className="flex items-center gap-x-2">
            <p className="text-[#121212] font-semibold text-base lg:text-lg leading-[140%]">
              Length of Lease
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
            Ask Agent
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaseHold;
