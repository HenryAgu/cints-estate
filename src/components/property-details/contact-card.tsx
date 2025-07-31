import localFont from "next/font/local";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const ContactCard = () => {
  return (
    <aside
      className={`w-full flex flex-col gap-y-7.5 items-center justify-center text-center p-5 bg-[#EBEDEB] border border-[#C0C6C1] rounded-3xl ${HelveticaNeue.className}`}
    >
      <div className="flex flex-col gap-y-3.5">
        <p className="text-black font-semibold text-2xl lg:text-[26px] leading-[140%]">
          Interested in This Property?
        </p>
        <p className="text-[#414141] font-normal text-base lg:text-lg leading-[140%]">
          Let us help you take the next step
        </p>
      </div>
      <div className="flex flex-col gap-y-2.5">
        <Link
          href="tel:+2345018019595"
          className="py-2.5 lg:px-8 rounded-[60px] flex items-center justify-center gap-x-2 bg-brand-secondary-500"
        >
          <Image
            src="/icons/phone.svg"
            width={24}
            height={24}
            className="aspect-square w-4 h-4 lg:w-6 lg:h-6"
            alt="phone_icon"
          />
          <span className="text-white text-base lg:text-lg font-medium leading-[140%]">
            Call Agent
          </span>
        </Link>
        <Link
          href="mailto:contact@cintsestate.com"
          className="py-2.5 px-8 rounded-[60px] flex items-center justify-center gap-x-2 border border-brand-secondary-600"
        >
          <Image
            src="/icons/mail.svg"
            width={24}
            height={24}
            className="aspect-square w-4 h-4 lg:w-6 lg:h-6"
            alt="mail_icon"
          />
          <span className="text-[#988261] text-base lg:text-lg font-medium leading-[140%]">
            Request Details
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default ContactCard;
