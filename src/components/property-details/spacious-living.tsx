import localFont from "next/font/local";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const SpaciousLiving = () => {
  return (
    <div
      className={`${HelveticaNeue.className} flex flex-col gap-y-3 max-w-[793px] mt-10`}
    >
      <p className={`text-[#121212] font-semibold text-[23px] leading-[140%]`}>
        Spacious Living
      </p>
      <p className="text-[#121212] font-normal text-lg leading-[160%]">
        Boasting over 2,400 square feet of thoughtfully designed living space,
        this home offers an airy, open-plan layout filled with natural light.
        Perfect for both entertaining and everyday living, it provides generous
        room for families of all sizes.
      </p>
    </div>
  );
};

export default SpaciousLiving;
