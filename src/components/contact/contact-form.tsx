import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import localFont from "next/font/local";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const ContactForm = () => {
  return (
    <form
      action=""
      className={`${HelveticaNeue.className} flex flex-col gap-y-5 mt-5`}
    >
      {/* Name */}
      <div className="w-full flex flex-col gap-y-3">
        <Label
          htmlFor="name"
          className="text-black text-base lg:text-lg font-semibold leading-[140%]"
        >
          Full Name (required)
        </Label>
        <Input
          type="name"
          id="name"
          placeholder="Enter your Full Name"
          className="border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 lg:py-6.5 px-3.5"
        />
      </div>

      {/* Email */}
      <div className="w-full flex flex-col gap-y-3">
        <Label
          htmlFor="email"
          className="text-black text-base lg:text-lg font-semibold leading-[140%]"
        >
          Email Address (required)
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 lg:py-6.5 px-3.5"
        />
      </div>

      {/* Subject */}
      <div className="w-full flex flex-col gap-y-3">
        <Label
          htmlFor="subject"
          className="text-black text-base lg:text-lg font-semibold leading-[140%]"
        >
          Subject (required)
        </Label>
        <Input
          type="text"
          id="subject"
          placeholder="Enter your Email"
          className="border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 lg:py-6.5 px-3.5"
        />
      </div>

      {/* Detailed inquiry */}
      <div className="w-full flex flex-col gap-y-3">
        <Label
          htmlFor="inquiry"
          className="text-black text-base lg:text-lg font-semibold leading-[140%]"
        >
          Detailed inquiry
        </Label>
        <Textarea
          placeholder="Enter your inquiry"
          id="inquiry"
          className="resize-none h-[257px] w-full border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 px-3.5"
        />
      </div>
      <Button
        className={`${HelveticaNeue.className} p-5 mt-2.5 lg:mt-5 cursor-pointer w-full lg:w-fit bg-brand-secondary-500 rounded-[60px] font-medium text-lg leading-[140%]`}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
