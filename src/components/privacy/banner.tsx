import localFont from "next/font/local";
import React from "react";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface BannerProps {
	title: string;
	date?: string;
	text?: string;
}

const Banner = ({ title, date, text }: BannerProps) => {
	return (
		<section className="mx-4 lg:mx-10 xl:mx-14 2xl:mx-20 my-5 bg-brand-secondary-600 h-[250px] lg:h-[348px] rounded-2xl text-white flex flex-col gap-y-4 items-center justify-center border border-[#C4B49C]">
			<h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
			{date && (
				<p
					className={`${HelveticaNeue.className} text-base lg:text-lg font-normal leading-[150%]`}
				>
					Last Updated: {date}
				</p>
			)}
			<p
				className={`${HelveticaNeue.className} text-base text-center lg:text-lg font-normal leading-[140%] max-w-[320px] lg:max-w-[379px]`}
			>
				{text}
			</p>
		</section>
	);
};

export default Banner;
