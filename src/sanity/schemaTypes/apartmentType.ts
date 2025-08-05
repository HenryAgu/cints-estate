import { defineArrayMember, defineField, defineType } from "sanity";

export const apartmentType = defineType({
	name: "apartment",
	title: "Apartment",
	type: "document",

	fields: [
		// House Title
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			description: "Enter a short, descriptive title for the apartment",
			placeholder: "e.g., 3 Bedroom Duplex in Lekki Phase 1",
		}),

		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: () => crypto.randomUUID(),
			},
		}),

		// House Type
		defineField({
			name: "house",
			title: "House Type",
			type: "array",
			of: [defineArrayMember({ type: "reference", to: { type: "house" } })],
			description: "Select the category of house this apartment belongs to",
		}),

		// Status
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			description: "Select the current state of the apartment",
			placeholder: "e.g., For Sale, Completed, In Development",
		}),

		// Location
		defineField({
			name: "location",
			title: "Location",
			type: "string",
			description: "Enter the full address or neighborhood of the apartment",
			placeholder: "e.g., Banana Island, Ikoyi, Lagos",
		}),

		// Price
		defineField({
			name: "price",
			title: "Price",
			type: "number",
			description: "Enter the selling price of the apartment",
			placeholder: "e.g., 85000000",
		}),

		// Land size
		defineField({
			name: "landSize",
			title: "Land Size (sq ft)",
			type: "string",
			description: "Enter the land area in square feet",
			placeholder: "e.g., 1200",
		}),

		// No of beds
		defineField({
			name: "noOfBeds",
			title: "No of Bedrooms",
			type: "number",
			description: "Specify how many bedrooms the apartment has",
			placeholder: "e.g., 4",
		}),

		// No of baths
		defineField({
			name: "noOfBaths",
			title: "No of Bathrooms",
			type: "number",
			description: "Specify how many bathrooms the apartment has",
			placeholder: "e.g., 3",
		}),

		// Image
		defineField({
			name: "image",
			title: "House Display Image",
			type: "image",
			description: "Upload the primary image to represent the apartment",
			options: {
				hotspot: true,
			},
		}),

		// Gallery
		defineField({
			name: "images",
			title: "Gallery Images",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
			description: "Upload additional images to showcase the apartment",
		}),
	],

	preview: {
		select: {
			title: "title",
			subtitle: "status",
			media: "image",
		},
	},
});
