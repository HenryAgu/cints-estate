import Hero from "@/components/about/hero";
import DevelopmentProperties from "@/components/development/development-properties";
import { Property } from "@/components/home/properties";
import Header from "@/components/shared/header";
import React from "react";

const properties: Property[] = [
  {
    id: crypto.randomUUID(),
    image: "/images/property.png",
    title: "The Crestwood Estate",
    address: "Surrey Hills, Surrey",
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
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
    status: "Forthcoming Development",
    type: "Duplex",
    price: "25,000",
    landSize: "1,800",
    noOfBeds: 4,
    noOfBaths: 2,
  },
];

const DevelopmentPage = () => {
  return (
    <main className="min-h-screen container-1 w-full mx-auto font-didot">
      <Header />
      <Hero title="Development" />
      <div className="mt-10">
        <DevelopmentProperties properties={properties} />
      </div>
    </main>
  );
};

export default DevelopmentPage;
