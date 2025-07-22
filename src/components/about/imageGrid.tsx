import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <section className="lg:my-18 my-12 mx-4 lg:mx-20 flex lg:flex-row flex-col gap-4  h-full">
      <div className="w-full basis-[48%]">
        <Image src="/images/grid1.png" alt="grid-image" width={630} height={592} className="aspect-[630/592] w-full h-full"/>
      </div>
      <div className="w-full basis-[50%] grid grid-cols-2 gap-5">
        <Image src="/images/grid2.png" alt="grid-image" width={309} height={288} className="aspect-[309/288] w-full h-full"/>
        <Image src="/images/grid3.png" alt="grid-image" width={309} height={288} className="aspect-[309/288] w-full h-full"/>
        <Image src="/images/grid4.png" alt="grid-image" width={309} height={288} className="aspect-[309/288] w-full h-full"/>
        <Image src="/images/grid5.png" alt="grid-image" width={309} height={288} className="aspect-[309/288] w-full h-full"/>
      </div>
    </section>
  );
};

export default ImageGrid;
