import Hero from "@/components/about/hero";
import ImageGrid from "@/components/about/image-grid";
import MissionVision from "@/components/about/mission-vision";
import Testimonial from "@/components/about/testimonial";
import MakeRequest from "@/components/home/make-request";
import Header from "@/components/shared/header";
import KeyService from "@/components/shared/key-service";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "Explore our courses",
};

const AboutPage = () => {
	return (
		<main className="min-h-screen  w-full mx-auto font-didot">
			<Header />
			<Hero
				title="About Us"
				subtitle="We&rsquo;re more than just a property platform, we are your real
            estate partner."
			/>
			<Testimonial />
			<MissionVision />
			<ImageGrid />
			<KeyService />
			<MakeRequest />
		</main>
	);
};

export default AboutPage;
