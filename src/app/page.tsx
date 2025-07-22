import Header from "@/components/shared/header";
import KeyService from "@/components/shared/keyService";
import Hero from "@/components/home/hero";
import Properties from "@/components/home/properties";
import MakeRequest from "@/components/home/makeRequest";


export default function Home() {
  return (
    <main className="font-didot min-h-screen">
      <Header />
      <Hero />
      <Properties />
      <MakeRequest/>
      <KeyService />
    </main>
  );
}
