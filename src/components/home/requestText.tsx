import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const RequestText = () => {
  return (
    <div className="basis-[45%] flex flex-col gap-y-3">
      <p className="lg:leading-[130%] font-normal text-3xl lg:text-[40px]">
        Let’s Find Your <br /> Perfect Property
      </p>
      <p
        className={`max-w-full lg:max-w-[465px] ${HelveticaNeue.className} text-base lg:text-lg font-light lg:leading-[140%]`}
      >
        Whether you're buying your first home or searching for an investment,
        we’re here to match you with a property that fits your life and goals.
      </p>
      <div className="flex lg:flex-row flex-col gap-y-10 gap-x-10 mt-10">
        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <Image
            src="/icons/chat.svg"
            alt="chat_icon"
            width={64}
            height={64}
            className="aspect-square w-10 h-10 lg:w-16 lg:h-w-16"
          />
          <div className="flex flex-col gap-y-2 lg:gap-y-4">
            <p
              className={`${HelveticaNeue.className} text-lg lg:text-xl lg:leading-[140%] font-medium`}
            >
              Chat Us
            </p>
            <p
              className={`${HelveticaNeue.className} text-lg lg:text-xl lg:leading-[140%] font-medium`}
            >
              Contact@cintsestate.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <Image
            src="/icons/chat.svg"
            alt="chat_icon"
            width={64}
            height={64}
            className="aspect-square w-10 h-10 lg:w-16 lg:h-w-16"
          />
          <div className="flex flex-col gap-y-4">
            <p
              className={`${HelveticaNeue.className} text-lg lg:text-xl lg:leading-[140%] font-medium`}
            >
              Call Us
            </p>
            <p
              className={`${HelveticaNeue.className} text-lg lg:text-xl lg:leading-[140%] font-medium`}
            >
              +234 501-801 9595
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestText;
