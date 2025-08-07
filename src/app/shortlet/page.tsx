import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import ShortletProperties from "@/components/shortlet/shortletProperties";
import React from "react";

export const metadata = {
  title: "Shortlet | Cints Estate | Premium Real Estate",
  description: "Explore our courses",
};

const ShortletPage = () => {
	return (
		<main className="min-h-screen  w-full mx-auto font-didot">
			<Header />
			<Navbar />
			<ShortletProperties />
		</main>
	);
};

export default ShortletPage;
