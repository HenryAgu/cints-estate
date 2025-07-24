import Banner from "@/components/privacy/banner";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import TermsOfUsePage from "@/components/shared/terms-of-use";
import React from "react";

const PrivacyPage = () => {
	return (
		<main className="min-h-screen container w-full mx-auto font-didot">
			<Header />
			<Navbar />
			<Banner title="Privacy Policy" date="July 10, 2025" />
			<TermsOfUsePage />
		</main>
	);
};

export default PrivacyPage;
