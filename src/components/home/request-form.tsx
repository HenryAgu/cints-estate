"use client";

import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import localFont from "next/font/local";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

// Zod schema
const requestFormSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Subject is required"),
  budget: z.string().min(1, "Budget is required"),
  inquiry: z.string().optional(),
});

// Infer the schema type
type RequestFormData = z.infer<typeof requestFormSchema>;

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestFormSchema),
  });

  const onSubmit = (data: RequestFormData) => {
    console.log("Submitted Data:", data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:basis-[55%] bg-white rounded-[28px] px-5 py-10 lg:p-10 flex flex-col gap-y-5 lg:gap-y-8"
    >
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
            {...register("name")}
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
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
            {...register("email")}
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
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
            {...register("location")}
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
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
            type="string"
            id="budget"
            placeholder="What is your budget?"
            {...register("budget")}
            className="border-0 border-b rounded-none text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%]"
          />
          {errors.budget && (
            <p className="text-red-500 text-sm">{errors.budget.message}</p>
          )}
        </div>
      </div>

      {/* Detailed inquiry */}
      <div
        className={`${HelveticaNeue.className} w-full flex flex-col gap-y-3`}
      >
        <Label
          htmlFor="inquiry"
          className="text-black text-base lg:text-lg font-semibold leading-[140%]"
        >
          Detailed inquiry
        </Label>
        <Textarea
          placeholder="Enter your inquiry"
          id="inquiry"
          {...register("inquiry")}
          className="resize-none h-[103px] w-full border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 px-3.5"
        />
        {errors.inquiry && (
          <p className="text-red-500 text-sm">{errors.inquiry.message}</p>
        )}
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
