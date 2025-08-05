import localFont from "next/font/local";
import React from "react";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

const SecureParking = () => {
	return (
		<div
			className={`${HelveticaNeue.className} flex flex-col gap-y-3 max-w-[793px] mt-10`}
		>
			<p className={`text-[#121212] font-semibold text-[23px] leading-[140%]`}>
				Secure Parking
			</p>
			<p className="text-[#121212] font-normal text-lg leading-[160%]">
				The property includes a spacious two-car garage, offering both
				protection for your vehicles and additional storage space for bikes,
				tools, or seasonal décor.
			</p>
		</div>
	);
};

export default SecureParking;
