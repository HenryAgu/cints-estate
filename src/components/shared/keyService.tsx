import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const KeyService = () => {
  return (
    <section className="relative bg-[url(/images/key-service.png)] bg-no-repeat bg-cover max-h-full lg:max-h-[597px] container w-full mx-auto">
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10 p-20 flex flex-col items-center">
        <div className="text-white text-center flex flex-col gap-y-4">
          <p className={`text-lg lg:text-xl ${HelveticaNeue.className} font-normal`}>
            Key Services
          </p>
          <h3 className="font-semibold text-3xl lg:text-[40px] lg:leading-[130%] lg:max-w-[483px]">
            What We Get to Offer you at Cints Estate
          </h3>
        </div>
        <div className="mt-10 lg:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-24.5">
          <Image
            src="/icons/shortlet.svg"
            alt="icon"
            width={131}
            height={115}
            className="aspect-[131/115]"
          />

          <Image
            src="/icons/buy.svg"
            alt="icon"
            width={179}
            height={115}
            className="aspect-[179/115]"
          />

          <Image
            src="/icons/sell.svg"
            alt="icon"
            width={147}
            height={115}
            className="aspect-[147/115]"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyService;
