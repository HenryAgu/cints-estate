import localFont from "next/font/local";
import React from "react";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

type PropertyFeature = {
	feature: string;
	detail: string;
};

const keyFeatures: PropertyFeature[] = [
	{ feature: "Leasehold Term", detail: "125 years from 25/03/1983" },
	{ feature: "Family Bathroom", detail: "Yes" },
	{ feature: "Three Balconies", detail: "Yes" },
	{ feature: "Allocated Underground Parking", detail: "Yes" },
	{ feature: "Two Double Bedroom", detail: "Yes" },
	{ feature: "Guest WC", detail: "Yes" },
	{ feature: "Secure Portered Building", detail: "Yes" },
];

const KeyFeatures = () => {
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
					{leftFeatures.map((item) => (
						<li
							className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]"
							key={item.feature}
						>
							{item.feature}
						</li>
					))}
				</ul>
				<ul className="flex flex-col gap-y-1 lg:gap-y-2 mt-2.5 lg:mt-5 list-disc ml-5">
					{rightFeatures.map((item) => (
						<li
							className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]"
							key={item.feature}
						>
							{item.feature}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default KeyFeatures;
