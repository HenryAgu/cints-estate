import { client } from "@/sanity/lib/client";

export type ApartmentType = {
  type: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  subtitle?: string;
  house: Array<{
    title: string;
  }>;
  status: string;
  price: number;
  location: string;
  description: string;
  tenure: string;
  councilTax: string;
  parking: string;
  garden: string;
  accessibility?: string[];
  ownershipType: string;
  groundRent?: number;
  annualServiceCharge?: number;
  lengthOfLease?: number;
  spaciousLiving: string;
  outdoorOasis?: string;
  landSize?: string;
  noOfBeds: number;
  noOfBaths: number;
  keyFeatures: string[];
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
  phone: string;
  email: string;
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

export const fetchApartmentType = async (): Promise<string[]> => {
  const query = `*[_type == "house"] | order(title asc) {
    title
  }`;

  const types: { title: string }[] = await client.fetch(query);
  return types.map((type) => type.title);
};

export const fetchApartmentBySlug = async (
  slug: string
): Promise<ApartmentType | null> => {
  const query = `
    *[_type == "apartment" && slug.current == $slug][0] {
      type,
      slug,
      title,
      subtitle,
      house[]->{
        title
      },
      status,
      price,
      location,
      description,
      tenure,
      councilTax,
      parking,
      garden,
      accessibility,
      ownershipType,
      groundRent,
      annualServiceCharge,
      lengthOfLease,
      spaciousLiving,
      outdoorOasis,
      landSize,
      noOfBeds,
      noOfBaths,
      keyFeatures,
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
      },
      phone,
      email
    }
  `;

  return await client.fetch(query, { slug });
};