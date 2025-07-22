import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import localFont from "next/font/local";
import { Button } from "../ui/button";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const RequestForm = () => {
  return (
    <form className="basis-[55%] bg-white rounded-[28px] p-10 flex flex-col gap-y-8">
      <div className={`flex ${HelveticaNeue.className}`}>
        {/* Name */}
        <div className="w-full">
          <Label
            htmlFor="name"
            className="text-black text-lg font-normal leading-[140%]"
          >
            Your Name
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="Enter your full name"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-lg font-normal leading-[140%]"
          />
        </div>
        {/* Subject */}
        <div className="w-full">
          <Label
            htmlFor="subject"
            className="text-black text-lg font-normal leading-[140%]"
          >
            Subject
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="What do you want?"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-lg font-normal leading-[140%]"
          />
        </div>
      </div>

      <div className={`flex ${HelveticaNeue.className}`}>
        {/* Location */}
        <div className="w-full">
          <Label
            htmlFor="location"
            className="text-black text-lg font-normal leading-[140%]"
          >
            Your preferred Location
          </Label>
          <Input
            type="location"
            id="location"
            placeholder="Enter your preferred Location"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-lg font-normal leading-[140%]"
          />
        </div>
        {/* budget */}
        <div className="w-full">
          <Label
            htmlFor="budget"
            className="text-black text-lg font-normal leading-[140%]"
          >
            What is your Budget?
          </Label>
          <Input
            type="number"
            id="budget"
            step="0.01"
            min="0"
            placeholder="What is your budget?"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-lg font-normal leading-[140%]"
          />
        </div>
      </div>

      <div className={`flex ${HelveticaNeue.className}`}>
        {/* Name */}
        <div className="w-full">
          <Label
            htmlFor="name"
            className="text-black text-lg font-normal leading-[140%]"
          >
            Your Name
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="Enter your full name"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-lg font-normal leading-[140%]"
          />
        </div>
        {/* Subject */}
        <div className="w-full">
          <Label
            htmlFor="subject"
            className="text-black text-lg font-normal leading-[140%]"
          >
            Subject
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="What do you want?"
            className="border-0 border-b rounded-none text-brand-secondary-600 text-lg font-normal leading-[140%]"
          />
        </div>
      </div>
      <Button
        className={`${HelveticaNeue.className} p-5 mt-5 cursor-pointer w-fit bg-brand-secondary-500 rounded-[60px] font-medium text-lg leading-[140%]`}
      >
        Make Request
      </Button>
    </form>
  );
};

export default RequestForm;
