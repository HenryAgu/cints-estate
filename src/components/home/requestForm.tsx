import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import localFont from "next/font/local";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const RequestForm = () => {
  return (
    <form className="basis-[55%] bg-white rounded-[28px] px-5 py-10 lg:p-10 flex flex-col gap-y-5 lg:gap-y-8">
      <div
        className={`flex lg:flex-row gap-x-1.5 flex-col gap-y-5 ${HelveticaNeue.className}`}
      >
        {/* Name */}
        <div className="w-full">
          <Label
            htmlFor="name"
            className="text-black text-base lg:text-lg font-semibold leading-[140%]"
          >
            Your Name
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="Enter your full name"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
        </div>
        {/* Email */}
        <div className="w-full">
          <Label
            htmlFor="email"
            className="text-black text-base lg:text-lg font-semibold leading-[140%]"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
        </div>
      </div>

      <div
        className={`flex lg:flex-row gap-x-1.5 flex-col gap-y-5 ${HelveticaNeue.className}`}
      >
        {/* Location */}
        <div className="w-full">
          <Label
            htmlFor="location"
            className="text-black text-base lg:text-lg font-semibold leading-[140%]"
          >
            Your preferred Location
          </Label>
          <Input
            type="location"
            id="location"
            placeholder="Enter your preferred Location"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
        </div>
        {/* budget */}
        <div className="w-full">
          <Label
            htmlFor="budget"
            className="text-black text-base lg:text-lg font-semibold leading-[140%]"
          >
            What is your Budget?
          </Label>
          <Input
            type="number"
            id="budget"
            step="0.01"
            min="0"
            placeholder="What is your budget?"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
        </div>
      </div>

      {/* Detailed inquiry */}
      <div className={`${HelveticaNeue.className} w-full flex flex-col gap-y-3`}>
        <Label
          htmlFor="inquiry"
          className="text-black text-base lg:text-lg font-semibold leading-[140%]"
        >
          Detailed inquiry
        </Label>
        <Textarea
          placeholder="Enter your inquiry"
          id="inquiry"
          className="resize-none h-[103px] w-full border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 px-3.5"
        />
      </div>
      <Button
        className={`${HelveticaNeue.className} p-5 mt-2.5 cursor-pointer w-full lg:w-fit bg-brand-secondary-500 rounded-[60px] font-medium text-lg leading-[140%]`}
      >
        Make Request
      </Button>
    </form>
  );
};

export default RequestForm;
