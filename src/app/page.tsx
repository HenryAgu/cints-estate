import Header from "@/components/shared/header";
import localFont from 'next/font/local'
import Navbar from "@/components/shared/navbar";
import KeyService from "@/components/shared/keyService";

const HelveticaNeue = localFont({
  src: '../app/fonts/HelveticaNeueThin.otf'
})

export default function Home() {
  return (
    <main className="font-didot">
      <Header />
      <Navbar />
      <p className={`min-h-screen ${HelveticaNeue.className}  container mx-auto w-full`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, facilis
        aliquam expedita praesentium eius deserunt vero blanditiis doloremque
        quas assumenda harum error aliquid quos est quisquam maxime laboriosam
        quia voluptates.
      </p>
      <KeyService/>
    </main>
  );
}
