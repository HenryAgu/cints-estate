import Header from "@/components/shared/header";
import KeyService from "@/components/shared/keyService";
import Hero from "@/components/home/hero";
import Properties from "@/components/home/properties";


export default function Home() {
  return (
    <main className="font-didot min-h-screen">
      <Header />
      <Hero />
      <Properties />
      <KeyService />
    </main>
  );
}
