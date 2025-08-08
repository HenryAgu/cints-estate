"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import localFont from "next/font/local";

// Font import
const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  inquiry: z.string().optional(),
});

// Infer the schema type
type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${HelveticaNeue.className} flex flex-col gap-y-5 mt-5`}
    >
      {/* Name */}
      <div className="w-full flex flex-col gap-y-1.5">
        <Label htmlFor="name" className="text-black text-base lg:text-lg font-semibold leading-[140%]">
          Full Name (required)
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Enter your Full Name"
          {...register("name")}
          className="border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 lg:py-6.5 px-3.5"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="w-full flex flex-col gap-y-1.5">
        <Label htmlFor="email" className="text-black text-base lg:text-lg font-semibold leading-[140%]">
          Email Address (required)
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your Email"
          {...register("email")}
          className="border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 lg:py-6.5 px-3.5"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div className="w-full flex flex-col gap-y-1.5">
        <Label htmlFor="subject" className="text-black text-base lg:text-lg font-semibold leading-[140%]">
          Subject (required)
        </Label>
        <Input
          type="text"
          id="subject"
          placeholder="Enter your Subject"
          {...register("subject")}
          className="border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 lg:py-6.5 px-3.5"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      {/* Inquiry */}
      <div className="w-full flex flex-col gap-y-1.5">
        <Label htmlFor="inquiry" className="text-black text-base lg:text-lg font-semibold leading-[140%]">
          Detailed Inquiry
        </Label>
        <Textarea
          id="inquiry"
          placeholder="Enter your inquiry"
          {...register("inquiry")}
          className="resize-none h-[257px] w-full border border-[#D4D4D4] rounded-[10px] text-brand-secondary-600 text-base lg:text-lg font-normal leading-[140%] py-4.5 px-3.5"
        />
        {errors.inquiry && <p className="text-red-500 text-sm">{errors.inquiry.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="p-5 mt-2.5 lg:mt-5 cursor-pointer w-full lg:w-fit bg-brand-secondary-500 rounded-[60px] font-medium text-lg leading-[140%]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
