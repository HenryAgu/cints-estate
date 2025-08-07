import React from "react";
import { DialogClose, DialogContent, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import localFont from "next/font/local";
import PropertiesCarousel from "./property-details/properties-carousel";
import { ApartmentResponse } from "./type";

const HelveticaNeue = localFont({
  src: "../app/fonts/HelveticaNeueThin.otf",
});

const PropertyModal = ({ apartment }: ApartmentResponse) => {
  return (
    <DialogContent className="w-full mx-auto max-w-full [@media(min-width:1920px)]:max-w-[1440px] p-4 lg:p-0">
      <DialogTitle className="flex items-center justify-between">
        <div className="flex flex-col gap-y-3.5">
          <p className="font-didot text-white font-bold text-[28px] leading-[130%]">
            The Ashford Haven
          </p>
          <div className="flex items-center gap-x-2.5">
            <span className={`${HelveticaNeue.className} text-white`}>
              Surrey Hills, Surrey
            </span>
          </div>
        </div>
        <DialogClose asChild className="cursor-pointer">
          <Image
            src="/icons/circle-close.svg"
            alt="close_icon"
            width={48}
            height={48}
            className="aspect-square w-10 h-10 lg:w-12 lg:h-12"
          />
        </DialogClose>
      </DialogTitle>
      <PropertiesCarousel apartment={apartment}/>
    </DialogContent>
  );
};

export default PropertyModal;
