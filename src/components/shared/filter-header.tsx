"use client";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface FilterNav {
  title: string;
  path: string;
}

const filterNav: FilterNav[] = [
  {
    title: "All Properties",
    path: "/properties",
  },
  {
    title: "Shortlet",
    path: "/properties/shortlet",
  },
  {
    title: "Buy",
    path: "/properties/buy",
  },
];

interface FilterHeaderProps {
  apartmentTypes?: string[];
}

const FilterHeader = ({ apartmentTypes }: FilterHeaderProps) => {
  const pathname = usePathname();
  return (
    <section
      className={`${HelveticaNeue.className} relative bottom-10 lg:bottom-6 bg-white mx-4 lg:mx-10 xl:mx-14 2xl:mx-20 border border-[#E7E7E7] rounded-[12px] p-5 flex flex-col gap-y-8`}
    >
      <nav className="flex items-baseline gap-x-1">
        {filterNav.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              href={item.path}
              key={item.title}
              className={`px-2 border-b-2 ${
                isActive
                  ? "border-b-[#283E31] font-semibold"
                  : "border-b-white hover:border-b-[#283E31]"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className={`flex  lg:flex-row flex-col lg:items-center gap-2`}>
        <div className="basis-full lg:basis-[50%] flex lg:flex-row flex-col items-center gap-2">
          <Input className="p-5" placeholder="Where do you want to live?" />
          <Input className="p-5" placeholder="Number of Bedrooms" />
        </div>
        <div className="basis-full lg:basis-[50%] flex lg:flex-row flex-col items-center gap-2">
          <Select>
            <SelectTrigger className="w-full p-5">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House Type</SelectLabel>
                {apartmentTypes?.map((item) => (
                  <SelectItem value={item} key={item}>{item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full p-5">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            className={`bg-brand-secondary-500 rounded-[60px] p-5 cursor-pointer w-full md:w-fit`}
          >
            <Image
              src="/icons/search.svg"
              alt="search_icon"
              width={20}
              height={20}
              className="w-5 h-5 aspect-square"
            />
            <span className="text-base text-white font-medium">Search</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FilterHeader;
