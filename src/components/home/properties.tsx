import localFont from "next/font/local";
import React from "react";
import PropertyCard from "./property-card";
import Link from "next/link";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

export interface Property {
  id: string;
  image: string;
  title: string;
  address: string;
  status: "For Sale" | "Forthcoming Development" | "Completed Development";
  type: string;
  price: string;
  landSize: string;
  noOfBeds: number;
  noOfBaths: number;
}

const properties: Property[] = [
  {
    id: crypto.randomUUID(),
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    status: "For Sale",
    type: "Duplex",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
  {
    id: crypto.randomUUID(),
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    status: "For Sale",
    type: "Duplex",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
  {
    id: crypto.randomUUID(),
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    status: "For Sale",
    type: "Duplex",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
];

const Properties = () => {
  return (
    <section className="container-1 w-full mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-20 xl:py-24">
      <div className="flex flex-col items-center text-center">
        <p
          className={`${HelveticaNeue.className} text-brand-neutral-500 font-normal text-lg lg:text-xl`}
        >
          Properties
        </p>
        <p className="text-3xl lg:text-[40px] font-bold leading-[130%]">
          Curated Luxury by Cints Estate
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-10 mt-14">
        {properties.map((item, index) => (
          <PropertyCard item={item} key={index} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/properties"
          className={`${HelveticaNeue.className} bg-brand-primary-500 text-white py-2.5 px-5 rounded-[60px] text-base lg:text-lg font-medium leading-[140%]`}
        >
          View More properties
        </Link>
      </div>
    </section>
  );
};

export default Properties;
