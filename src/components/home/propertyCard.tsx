import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface Property {
  image: string;
  title: string;
  address: string;
  price: string;
  landSize: string;
  noOfBeds: number;
  noOfBaths: number;
}

const properties: Property[] = [
  {
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
  {
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
  {
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
];

const PropertyCard = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 gap-x-5 gap-y-10 mt-14 px-5">
      {properties.map((item, index) => (
        <div
          className="border border-[#E4DCD1] rounded-[20px] p-5 flex flex-col gap-y-5"
          key={index}
        >
          <Image
            src={item.image}
            alt="property"
            width={374}
            height={340}
            className="w-full h-[340px] aspect-[374/340] rounded-[20px]"
          />
          <div className="flex flex-col gap-y-2 lg:gap-y-3 items-center">
            <span
              className={`${HelveticaNeue.className} text-base lg:text-lg text-brand-secondary-500 font-normal`}
            >
              For Sale
            </span>
            <p className="text-xl lg:text-[26px] text-black font-bold lg:leading-[140%]">
              {item.title}
            </p>
            <div className="flex items-center gap-x-0.5">
              <Image
                src="/icons/location.svg"
                alt="location"
                width={24}
                height={24}
                className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
              />
              <p
                className={`${HelveticaNeue.className} text-brand-neutral-300 text-base lg:text-lg font-normal lg:leading-[140%]`}
              >
                {item.address}
              </p>
            </div>
            <p className="text-xl lg:text-[23px] font-bold lg:leading-[140%] text-brand-secondary-500">
              £{item.price}/month
            </p>
            <div
              className={`${HelveticaNeue.className} flex items-center justify-between mt-2 w-full`}
            >
              <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
                <Image
                  src="/icons/material-symbols-light_zoom-in-map.svg"
                  width={24}
                  height={24}
                  className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
                  alt="icon"
                />
                <p className="text-black text-base lg:text-lg font-normal">
                  {item.landSize} sq. ft.
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
                <Image
                  src="/icons/famicons_bed-outline.svg"
                  width={24}
                  height={24}
                  className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
                  alt="icon"
                />
                <p className="text-black text-base lg:text-lg font-normal">
                  {item.noOfBeds} Beds
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
                <Image
                  src="/icons/iconoir_bathroom.svg"
                  width={24}
                  height={24}
                  className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
                  alt="icon"
                />
                <p className="text-black text-base lg:text-lg font-normal">
                  {item.noOfBaths} Baths
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
