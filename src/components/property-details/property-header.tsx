import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import PropertyCard from "./property-card";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

const PropertyHeader = () => {
	return (
		<div className="flex flex-col gap-y-2.5 lg:gap-y-5 mb-10">
			{/* Location */}
			<div className="flex items-center gap-x-3">
				<Image
					src="/icons/location.svg"
					alt="location_icon"
					width={32}
					height={32}
					className="aspect-square"
				/>
				<span
					className={`${HelveticaNeue.className} text-[#606060] text-lg lg:text-[23px]`}
				>
					Surrey Hills, Surrey
				</span>
			</div>
			<p className="text-black font-bold text-3xl lg:text-[40px] leading-[130%]">
				The Ashford Haven
			</p>
			{/* Description */}
			<p
				className={`${HelveticaNeue.className} max-w-full lg:max-w-[630px] text-lg lg:text-xl font-light leading-[140%]`}
			>
				Tucked away in a peaceful corner of Kent, The Ashford Haven is a
				beautifully designed 4-bedroom detached home that blends classic charm
				with modern convenience.
			</p>
			{/* Price */}
			<p className="text-brand-secondary-500 font-bold text-3xl lg:text-4xl leading-[140%]">
				£25,000/month
			</p>
			{/* Property card */}
			<PropertyCard />
		</div>
	);
};

export default PropertyHeader;
