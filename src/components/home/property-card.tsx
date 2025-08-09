import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ApartmentType } from "@/sanity/lib/fetch-apartment";

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

interface PropertyCardResponse {
  item: ApartmentType;
}

const PropertyCard = ({ item }: PropertyCardResponse) => {
  return (
    <Link
      href={`/properties/${item.slug.current}`}
      className="border border-[#E4DCD1] rounded-[20px] p-3 xl:p-5 flex flex-col gap-y-5"
    >
      <Image
        src={item.image?.asset?.url}
        alt="property"
        width={374}
        height={340}
        priority
        className="w-full xl:h-[340px] lg:h-[250px] lg:aspect-[374/300] xl:aspect-[374/340] rounded-[20px] object-cover"
      />
      <div className="flex flex-col gap-y-2 xl:gap-y-3 items-center">
        <span
          className={`${HelveticaNeue.className} text-base lg:text-lg text-brand-secondary-500 font-medium capitalize`}
        >
          {item.status ?? "N/A"}
        </span>
        <p className="text-xl lg:text-[26px] text-black font-bold lg:leading-[140%] capitalize">
          {item.title ?? "N/A"}
        </p>
        <div className="flex items-center gap-x-0.5">
          <Image
            src="/icons/location.svg"
            alt="location"
            width={24}
            height={24}
            className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
          />
          <p
            className={`${HelveticaNeue.className} capitalize text-brand-neutral-300 text-base lg:text-lg font-normal lg:leading-[140%]`}
          >
            {item.location ?? "N/A"}
          </p>
        </div>
        <p className="text-xl lg:text-[23px] font-bold lg:leading-[140%] text-brand-secondary-500">
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(item?.price || 0)}
          /month
        </p>
        <div
          className={`${HelveticaNeue.className} flex items-center justify-between mt-2 w-full`}
        >
          <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
            <Image
              src="/icons/material-symbols-light_zoom-in-map.svg"
              width={24}
              height={24}
              className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
              alt="icon"
            />
            <p className="text-black text-base lg:text-lg font-normal">
              {item.landSize ?? "N/A"} sq. ft.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
            <Image
              src="/icons/famicons_bed-outline.svg"
              width={24}
              height={24}
              className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
              alt="icon"
            />
            <p className="text-black text-base lg:text-lg font-normal">
              {item.noOfBeds ?? "N/A"} Beds
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-1 lg:gap-y-2">
            <Image
              src="/icons/iconoir_bathroom.svg"
              width={24}
              height={24}
              className="aspect-square lg:w-6 lg:h-6 w-4 h-4"
              alt="icon"
            />
            <p className="text-black text-base lg:text-lg font-normal">
              {item.noOfBaths ?? "N/A"} Baths
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
