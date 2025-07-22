import localFont from "next/font/local";
import React from "react";
import ContactForm from "./contactForm";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const ContactSection = () => {
  return (
    <div className="border border-[#ECECEC] w-full lg:w-[60%] rounded-[28px] bg-[#F8F8F8] p-5 lg:p-10">
      <div className="flex flex-col gap-y-4">
        <p className="lg:text-[28px] font-bold lg:leading-[130%] text-xl">
          Your Dream Home Is Just a Click Away.
        </p>
        <p
          className={`${HelveticaNeue.className} max-w-full lg:max-w-[517px] text-sm lg:text-base font-light lg:leading-[140%]`}
        >
          Contact us today to discuss your property needs and choose the right
          plan. We’re here to guide you through every step of the process.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
