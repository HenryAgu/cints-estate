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
    <div className="grid grid-col-1 lg:grid-cols-3 gap-x-5 gap-y-8 mt-14">
      {properties.map((item, index) => (
        <div className="border border-[#E4DCD1] rounded-[20px] p-5 flex flex-col gap-y-5">
          <Image
            src="/images/property.png"
            alt="property"
            width={374}
            height={340}
            className="w-full h-[340px] aspect-[374/340] rounded-[20px]"
          />
          <div className="flex flex-col gap-y-3 items-center">
            <span
              className={`${HelveticaNeue.className} text-lg text-brand-secondary-500 font-normal`}
            >
              For Sale
            </span>
            <p className="text-[26px] text-black font-bold leading-[140%]">
              The Crestwood Estate
            </p>
            <div className="flex items-center gap-x-0.5">
              <Image
                src="/icons/location.svg"
                alt="location"
                width={24}
                height={24}
                className="aspect-square"
              />
              <p
                className={`${HelveticaNeue.className} text-brand-neutral-300 text-lg font-normal leading-[140%]`}
              >
                Surrey Hills, Surrey
              </p>
            </div>
            <p className="text-[23px] font-bold leading-[140%] text-brand-secondary-500">
              £25,000/month
            </p>
            <div
              className={`${HelveticaNeue.className} flex items-center justify-between mt-2 w-full`}
            >
              <div className="flex flex-col items-center gap-y-2">
                <Image
                  src="/icons/material-symbols-light_zoom-in-map.svg"
                  width={24}
                  height={24}
                  className="aspect-square"
                  alt="icon"
                />
                <p className="text-black text-lg font-normal">1,800 sq. ft.</p>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <Image
                  src="/icons/famicons_bed-outline.svg"
                  width={24}
                  height={24}
                  className="aspect-square"
                  alt="icon"
                />
                <p>4 Beds</p>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <Image
                  src="/icons/iconoir_bathroom.svg"
                  width={24}
                  height={24}
                  className="aspect-square"
                  alt="icon"
                />
                <p>2 Baths</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
