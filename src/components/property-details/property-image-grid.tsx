import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PropertyModal from "../property-modal";
import { ApartmentResponse } from "../type";

const PropertyImageGrid = ({ apartment }: ApartmentResponse) => {
	const gridImages = apartment?.images;
  return (
    <section className="relative lg:mb-10 my-5 md:mt-5 mx-4 lg:mx-20 flex md:flex-row flex-col gap-4 lg:gap-5 h-full">
      <div className="w-full basis-[50%]">
        <Image
          src={gridImages?.[0]?.asset?.url}
          alt="grid-image"
          width={630}
          height={592}
          className="aspect-[630/592] w-full h-full rounded-3xl"
        />
      </div>
      <div className="w-full basis-[50%] grid grid-cols-2 gap-4 lg:gap-5">
        {gridImages.slice(1,).map((image, index) => (
          <Image
            key={index}
            src={image.asset.url}
            alt="images"
            width={309}
            height={288}
            className="aspect-square w-full h-full rounded-3xl"
          />
        ))}
      </div>
      <div className="absolute bottom-4 right-4">
        <Dialog>
          <DialogTrigger>
            <div className="cursor-pointer flex items-center gap-x-2.5 p-2.5 bg-white rounded-[10px]">
              <Image
                src="/icons/camera.svg"
                width={24}
                height={24}
                alt="camera_icon"
                className="w-6 h-6 aspect-square"
              />
              <span>1/7</span>
            </div>
          </DialogTrigger>
          <PropertyModal />
        </Dialog>
      </div>
    </section>
  );
};

export default PropertyImageGrid;
