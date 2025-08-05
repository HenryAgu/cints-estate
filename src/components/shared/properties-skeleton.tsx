import React from "react";
import { Skeleton } from "../ui/skeleton";

const PropertiesSkeleton = () => {
	return (
		<section className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-10 mt-14">
			<Skeleton className="h-[628px] rounded-[20px]" />
			<Skeleton className="h-[628px] rounded-[20px]" />
			<Skeleton className="h-[628px] rounded-[20px]" />
		</section>
	);
};

export default PropertiesSkeleton;
