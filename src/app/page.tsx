import Header from "@/components/shared/header";
import KeyService from "@/components/shared/key-service";
import Hero from "@/components/home/hero";
import Properties from "@/components/home/properties";
import MakeRequest from "@/components/home/make-request";

export default function Home() {
	return (
		<main className="font-didot min-h-screen">
			<Header />
			<Hero />
			<Properties />
			<MakeRequest />
			<KeyService />
		</main>
	);
}
