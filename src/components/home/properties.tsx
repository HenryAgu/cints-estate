import localFont from "next/font/local";
import React from "react";
import PropertyCard from "./property-card";
import Link from "next/link";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

export interface Property {
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

const Properties = () => {
  return (
    <section className="container w-full mx-auto px-4 lg:px-20 py-10 lg:py-24">
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
      <div className="grid grid-col-1 lg:grid-cols-3 gap-x-5 gap-y-10 mt-14">
        {properties.map((item, index) => (
          <PropertyCard item={item} key={index}/>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/buy"
          className={`${HelveticaNeue.className} bg-brand-primary-500 text-white py-2.5 px-5 rounded-[60px] text-base lg:text-lg font-medium leading-[140%]`}
        >
          View More properties
        </Link>
      </div>
    </section>
  );
};

export default Properties;
