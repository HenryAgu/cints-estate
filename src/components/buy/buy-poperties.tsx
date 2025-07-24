import React from "react";
import PropertyCard from "../home/property-card";
import { Property } from "../home/properties";
import Properties from "../shared/properties";

const properties: Property[] = [
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
	{
		image: "/images/property.png",
		title: "The Crestwood Estate",
		address: "Surrey Hills, Surrey",
		type: "For Sale",
		price: "25,000",
		landSize: "1,800",
		noOfBeds: 4,
		noOfBaths: 2,
	},
];

const BuyProperties = () => {
	return (
		<section className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20">
			<h1 className="text-brand-neutral-500 font-bold text-[28px] lg:text-[32px] lg:leading-[130%]">
				Buy Properties
			</h1>
			<Properties properties={properties} />
		</section>
	);
};

export default BuyProperties;
