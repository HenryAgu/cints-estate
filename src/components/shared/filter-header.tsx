"use client";

import React, { useState } from "react";
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchApartmentType,
  fetchSearchResults,
} from "@/sanity/lib/fetch-apartment";
import PropertyCard from "../home/property-card";

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

const FilterHeader = () => {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const [address, setAddress] = useState("");
  const [noOfBedrooms, setNoOfBedrooms] = useState<number | "">("");
  const [selectedApartmentType, setSelectedApartmentType] = useState("");

  // Fetch apartment types once
  const {
    data: apartmentTypes = [],
    isLoading: loadingTypes,
    error: typeError,
  } = useQuery({
    queryKey: ["apartmentTypes"],
    queryFn: fetchApartmentType,
  });

  // Search properties on demand
  const {
    data: searchResults,
    refetch,
    isFetching: searching,
  } = useQuery({
    queryKey: ["search", address, noOfBedrooms, selectedApartmentType],
    queryFn: () =>
      fetchSearchResults(address, noOfBedrooms, selectedApartmentType),
    enabled: false, // Don't fetch on mount
  });

  console.log(searchResults)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

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

      <form
        className="flex lg:flex-row flex-col lg:items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div className="basis-full lg:basis-[50%] flex lg:flex-row flex-col items-center gap-2">
          <Input
            className="p-5"
            placeholder="Where do you want to live?"
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Input
            className="p-5"
            placeholder="Number of Bedrooms"
            type="number"
            value={noOfBedrooms}
            onChange={(e) =>
              setNoOfBedrooms(e.target.value ? Number(e.target.value) : "")
            }
            required
          />
        </div>

        <div className="basis-full lg:basis-[50%] flex lg:flex-row flex-col items-center gap-2">
          <Select
            value={selectedApartmentType}
            onValueChange={setSelectedApartmentType}
            required
          >
            <SelectTrigger className="w-full p-5">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House Type</SelectLabel>
                {apartmentTypes.map((type: string) => (
                  <SelectItem value={type} key={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            className="bg-brand-secondary-500 rounded-[60px] p-5 cursor-pointer w-full md:w-fit"
          >
            <Image
              src="/icons/search.svg"
              alt="search_icon"
              width={20}
              height={20}
              className="w-5 h-5 aspect-square"
            />
            <span className="text-base text-white font-medium">
              {searching ? "Searching..." : "Search"}
            </span>
          </Button>
        </div>
      </form>

      {/* Example of displaying results */}
      {searchResults && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Search Results:</h2>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-10 mt-14">
            {searchResults.map((item: any, i: number) => (
              <PropertyCard item={item} key={item}/>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FilterHeader;
