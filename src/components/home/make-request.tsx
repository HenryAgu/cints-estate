import React from "react";
import RequestText from "./request-text";
import RequestForm from "./request-form";

const MakeRequest = () => {
	return (
		<section className="relative bg-[url(/images/background2.png)] bg-no-repeat bg-cover max-h-full container w-full mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-14 lg:pt-24 lg:pb-14">
			<div className="absolute inset-0 bg-black/70"></div>
			<div className="flex md:flex-row flex-col gap-y-10 md:gap-x-5 lg:gap-x-10 text-white relative z-10">
				<RequestText />
				<RequestForm />
			</div>
		</section>
	);
};

export default MakeRequest;
