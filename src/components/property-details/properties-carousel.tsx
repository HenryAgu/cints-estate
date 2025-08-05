import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const images: string[] = [
  "/images/background2.png",
  "/images/background.png",
  "/images/background2.png",
  "/images/background.png",
];

const PropertiesCarousel = () => {
  return (
    <Carousel className="w-full 2xl:w-[95%] mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="my-10 ">
            <div className="flex items-center justify-center rounded-xl">
              <Image
                src={image}
                alt={`image ${index + 1}`}
                width={949}
                height={704}
                className="
    w-full lg:h-auto h-[250px] 
     object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:flex">
        <CarouselPrevious/>
        <CarouselNext/>
      </div>
      <div className="flex lg:hidden py-20">
        <CarouselPrevious className="top-80 size-10 left-2" />
        <CarouselNext className="right-2 size-10 top-80" />
      </div>
    </Carousel>
  );
};

export default PropertiesCarousel;
