import { Mail, MapPin } from "lucide-react";
import localFont from "next/font/local";
import TermsLayout from "./terms-layout";

const HelveticaNeue = localFont({
	src: "../../app/fonts/HelveticaNeueThin.otf",
});

const termsSections = [
	{
		id: "introduction",
		title: "1. Introduction",
		content:
			"Welcome to Cints Estate. By accessing or using our platform, you agree to be bound by these Terms of Use. If you do not agree, please refrain from using the website or services.",
	},
	{
		id: "acceptance",
		title: "2. Acceptance of Terms",
		content:
			"These Terms govern your access to and use of our services. By using the platform, you confirm that you are at least 18 years old and legally capable of entering into contracts.",
	},
	{
		id: "use",
		title: "3. Use of the Platform",
		content:
			"You agree to use Cints Estate only for lawful purposes. You may not misuse the platform, interfere with its functionality, or attempt to gain unauthorized access.",
	},
	{
		id: "responsibilities",
		title: "4. User Responsibilities",
		content:
			"You're responsible for the accuracy of any information you provide and for maintaining the confidentiality of your account credentials.",
	},
	{
		id: "listings",
		title: "5. Property Listings",
		content:
			"We verify listings to the best of our ability, but we do not guarantee the accuracy of third-party content. Always conduct your own due diligence.",
	},
	{
		id: "intellectual",
		title: "6. Intellectual Property",
		content:
			"All content, trademarks, and logos on this site are the property of Cints Estate or its licensors. You may not copy, distribute, or reproduce any part without permission.",
	},
	{
		id: "termination",
		title: "7. Termination",
		content:
			"We reserve the right to suspend or terminate your access to the platform if you violate these Terms.",
	},
	{
		id: "law",
		title: "8. Governing Law",
		content: "These Terms are governed by the laws of England and Wales.",
	},
];

export default function TermsOfUsePage() {
	return (
		<div>
			<TermsLayout
				sections={termsSections}
				fontClassName={HelveticaNeue.className}
			/>
		</div>
	);
}
