import { client } from "@/sanity/lib/client";

export type ApartmentType = {
	type: string;
	slug: {
		_type: "slug";
		current: string;
	};
	title: string;
	house: Array<{
		title: string;
	}>;
	status: string;
	price: string;
	noOfBaths: number;
	noOfBeds: number;
	landSize: string;
	location: string;
	image: {
		asset: {
			url: string;
		};
		alt?: string;
	};
	images: {
		asset: {
			url: string;
		};
		alt?: string;
	}[];
};

export const fetchApartment = async (
	searchQuery: string,
): Promise<ApartmentType[]> => {
	const searchFilter = searchQuery
		? `&& (title match "*${searchQuery}*" || location match "*${searchQuery}*")`
		: "";

	const query = `*[_type == "apartment" ${searchFilter}] 
    | order(_createdAt desc) { 
      type,
      slug,
      title,
      house[] {
        title
      },
      status,
      price,
      noOfBaths,
      noOfBeds,
      landSize,
      location,
      image {
        asset->{
          url
        },
        alt
      },
      images[] {
        asset->{
          url
        },
        alt
      }
    }`;

	return await client.fetch(query);
};
