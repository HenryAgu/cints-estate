import localFont from "next/font/local";
import React from "react";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

const OutdoorOasis = () => {
	return (
		<div
			className={`${HelveticaNeue.className} flex flex-col gap-y-1.5 lg:gap-y-3 max-w-full lg:max-w-[793px] mt-10`}
		>
			<p
				className={`text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}
			>
				Outdoor Oasis
			</p>
			<p className="text-[#121212] font-normal text-base lg:text-lg leading-[160%]">
				Set on a generous 6,500 sq ft lot, the beautifully landscaped backyard
				is perfect for weekend barbecues, quiet morning coffees, or space for
				kids and pets to play. Enjoy the outdoors in your own private green
				escape.
			</p>
		</div>
	);
};

export default OutdoorOasis;
