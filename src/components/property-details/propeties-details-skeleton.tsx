import React from "react";
import { Skeleton } from "../ui/skeleton";

const PropetiesDetailsSkeleton = () => {
  return (
    <div className=" lg:mb-10 my-5 md:mt-5 mx-4 lg:mx-20 flex flex-col gap-y-5 lg:gap-y-10">
      <ImageGridSkeleton />
      <PropertiesTextSkeleton/>
    </div>
  );
};

const ImageGridSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 lg:gap-5">
      <Skeleton className="h-[592px] basis-[50%]" />
      <div className="basis-[50%] grid grid-cols-2 gap-4 lg:gap-5">
        <Skeleton className="h-[288px] " />
        <Skeleton className="h-[288px] " />
        <Skeleton className="h-[288px] " />
        <Skeleton className="h-[288px] " />
      </div>
    </div>
  );
};

const PropertiesTextSkeleton = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10">
      <Skeleton className="basis-full lg:basis-[70%] h-[500px]" />
      <Skeleton className="basis-full lg:basis-[30%] h-[274px]" />
    </div>
  );
};

export default PropetiesDetailsSkeleton;
