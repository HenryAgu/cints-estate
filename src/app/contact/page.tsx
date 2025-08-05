import ContactSection from "@/components/contact/contact-section";
import Banner from "@/components/privacy/banner";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import React from "react";

const ContactPage = () => {
	return (
		<main className="min-h-screen font-didot">
			<Header />
			<Navbar />
			<Banner
				title="Call Us"
				text="Have questions about buying, selling, or investing in property? Our expert team is just a phone call away."
			/>
			<div className="md:bg-[url(/images/contact-background.png)] bg-no-repeat bg-cover max-h-full mx-4 md:my-14 xl:m-14 2xl:m-20 rounded-[28px]">
				<div className="lg:px-14 2xl:px-20 md:p-10 lg:py-15 flex justify-end">
					<ContactSection />
				</div>
			</div>
		</main>
	);
};

export default ContactPage;
