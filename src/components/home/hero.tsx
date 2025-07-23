import React from "react";
import Navbar from "../shared/navbar";
import localFont from "next/font/local";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

function Hero() {
  return (
    <div className="relative bg-[url(/images/background.png)] bg-no-repeat bg-cover container w-full mx-auto">
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10 min-h-[850px] md:min-h-[550px] lg:min-h-[824px] flex flex-col">
        <Navbar color="#988261" />
        <div className="flex-1 flex flex-col justify-center gap-y-5 items-center text-center text-brand-secondary-600">
          <h1 className="text-5xl lg:text-[64px] font-bold">Premium Real Estate</h1>
          <p className={`${HelveticaNeue.className} text-base lg:text-xl font-light`}>
            Exceptional homes, curated for those who expect more <br />
            Elegance begins with a single click.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
