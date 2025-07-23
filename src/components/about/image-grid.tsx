import Image from "next/image";
import React from "react";

const gridImages: { src: string; alt: string }[] = [
  { src: "/images/grid2.png", alt: "grid2" },
  { src: "/images/grid3.png", alt: "grid3" },
  { src: "/images/grid4.png", alt: "grid4" },
  { src: "/images/grid5.png", alt: "grid5" },
];
const ImageGrid = () => {
  return (
    <section className="lg:my-18 my-12 md:mt-5 mx-4 lg:mx-20 flex md:flex-row flex-col gap-4 lg:gap-5 h-full">
      <div className="w-full basis-[48%]">
        <Image
          src="/images/grid1.png"
          alt="grid-image"
          width={630}
          height={592}
          className="aspect-[630/592] w-full h-full"
        />
      </div>
      <div className="w-full basis-[50%] grid grid-cols-2 gap-4 lg:gap-5">
        {gridImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={309}
            height={288}
            className="aspect-[309/288] w-full h-full"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
