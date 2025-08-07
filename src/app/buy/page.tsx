import BuyProperties from "@/components/buy/buy-poperties";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import React from "react";

export const metadata = {
  title: "Buy | Cints Estate | Premium Real Estate",
  description: "Explore our courses",
};

const BuyPage = () => {
	return (
		<main className="min-h-screen font-didot">
			<Header />
			<Navbar />
			<BuyProperties />
		</main>
	);
};

export default BuyPage;
