import localFont from "next/font/local";
import React from "react";
import { ApartmentResponse } from "../type";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const KeyFeatures = ({ apartment }: ApartmentResponse) => {
  const keyFeatures = apartment?.keyFeatures ?? [];

  if (keyFeatures.length === 0) {
    return (
      <section className="mb-10">
        <p
          className={`${HelveticaNeue.className} text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
        >
          Key Features
        </p>
        <p className={`${HelveticaNeue.className} mt-2 text-gray-500`}>
          No features available for this property.
        </p>
      </section>
    );
  }

  const leftFeatures = keyFeatures.slice(0, 5);
  const rightFeatures = keyFeatures.slice(5);
  return (
    <section className="mb-10">
      <p
        className={`${HelveticaNeue.className} text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
      >
        Key Features
      </p>
      <div className={`${HelveticaNeue.className} flex gap-x-15`}>
        <ul className="flex flex-col gap-y-1 lg:gap-y-2 mt-2.5 lg:mt-5 list-disc ml-5">
          {leftFeatures.map((item, index) => (
            <li
              className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-y-1 lg:gap-y-2 mt-2.5 lg:mt-5 list-disc ml-5">
          {rightFeatures.map((item, index) => (
            <li
              className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyFeatures;
