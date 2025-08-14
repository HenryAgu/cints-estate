import React from "react";
import Navbar from "../shared/navbar";
import localFont from "next/font/local";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface HeroProps {
	title: string;
	subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
	return (
		<section className="relative bg-[url(/images/background.webp)] bg-no-repeat bg-cover  w-full mx-auto">
			<div className="absolute inset-0 bg-black/75"></div>
			<div className="relative z-10 min-h-[300px] lg:min-h-[443px] flex flex-col">
				<Navbar />
				<div className="flex-1 flex flex-col justify-center gap-y-5 items-center text-center text-white p-5">
					<h1 className="text-5xl lg:text-[64px] font-bold">{title}</h1>
					<p
						className={`${HelveticaNeue.className} text-base lg:text-xl font-light max-w-[517px]`}
					>
						{subtitle}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
