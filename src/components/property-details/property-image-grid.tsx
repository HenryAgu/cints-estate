import Image from "next/image";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import PropertyModal from "../property-modal";

const gridImages: { src: string; alt: string }[] = [
	{ src: "/images/grid2.png", alt: "grid2" },
	{ src: "/images/grid3.png", alt: "grid3" },
	{ src: "/images/grid4.png", alt: "grid4" },
	{ src: "/images/grid5.png", alt: "grid5" },
];

const PropertyImageGrid = () => {
	return (
		<section className="relative lg:mb-10 my-5 md:mt-5 mx-4 lg:mx-20 flex md:flex-row flex-col gap-4 lg:gap-5 h-full">
			<div className="w-full basis-[50%]">
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
						className="aspect-square w-full h-full"
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
