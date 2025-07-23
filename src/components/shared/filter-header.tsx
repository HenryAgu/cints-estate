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

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

const FilterHeader = () => {
  return (
    <section className={`${HelveticaNeue.className} relative bottom-8 bg-white mx-4 lg:mx-10 xl:mx-14 2xl:mx-20 mb-10 border border-[#E7E7E7] rounded-[12px] p-5 flex items-center gap-x-2`}>
      <div className="basis-[50%] flex items-center gap-x-2">
        <Input className="p-5" placeholder="Where do you want to live?"/>
        <Input className="p-5" placeholder="Number of Bedrooms"/>
      </div>
      <div className="basis-[50%] flex items-center gap-x-2">
        <Select>
          <SelectTrigger className="w-full p-5">
            <SelectValue placeholder="Select a fruit" />
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

        <Select>
          <SelectTrigger className="w-full p-5">
            <SelectValue placeholder="Select a fruit" />
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
        <Button className={`bg-brand-secondary-500 rounded-[60px] text-lg text-white font-medium p-5`}><Image src="/icons/search.svg" alt="search_icon" width={20} height={20} className="w-5 h-5 aspect-square"/><span>Search</span></Button>
      </div>
    </section>
  );
};

export default FilterHeader;
