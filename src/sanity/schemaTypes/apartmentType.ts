import { defineArrayMember, defineField, defineType } from "sanity";

export const apartmentType = defineType({
  name: "apartment",
  title: "Apartment",
  type: "document",

  fieldsets: [
    {
      name: "basicInfo",
      title: "Basic Information",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "details",
      title: "Apartment Details",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "media",
      title: "Images",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "agentInfo",
      title: "Agent Information",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    // Basic Info
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "basicInfo",
      description: "Enter a short, descriptive title for the apartment",
      placeholder: "e.g., 3 Bedroom Duplex in Lekki Phase 1",
      validation: (Rule) => Rule.required().min(5).error("Title is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      fieldset: "basicInfo",
      options: {
        source: () => crypto.randomUUID(),
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      fieldset: "basicInfo",
      description: "Select the current state of the apartment",
      placeholder: "e.g., For Sale, Completed, In Development",
      validation: (Rule) => Rule.required().error("Status is required"),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      fieldset: "basicInfo",
      description: "Enter the full address or neighborhood of the apartment",
      placeholder: "e.g., Banana Island, Ikoyi, Lagos",
      validation: (Rule) => Rule.required().error("Location is required"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      fieldset: "basicInfo",
      description: "Enter the selling price of the apartment",
      placeholder: "e.g., 85000000",
      validation: (Rule) =>
        Rule.required().positive().error("Price is required"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      fieldset: "basicInfo",
      description: "Provide a short subtitle of the apartment",
      rows: 5,
    }),

    // Apartment Details
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      fieldset: "details",
      description: "Provide a detailed description of the apartment",
      rows: 5,
      validation: (Rule) =>
        Rule.required().min(20).error("Description is required"),
    }),
    defineField({
      name: "house",
      title: "House Type",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "house" } })],
      fieldset: "details",
      description: "Select the category of house this apartment belongs to",
      validation: (Rule) =>
        Rule.required().min(1).error("At least one house type is required"),
    }),

    defineField({
      name: "tenure",
      title: "Tenure",
      type: "string",
      fieldset: "details", // or "basicInfo" if preferred
      description: "Select the tenure type for this apartment",
      validation: (Rule) => Rule.required().error("Tenure is required"),
    }),

    defineField({
      name: "councilTax",
      title: "Council Tax Band",
      type: "string",
      fieldset: "details",
      description: "Select the council tax band for this apartment",
      options: {
        list: [
          { title: "Band A", value: "A" },
          { title: "Band B", value: "B" },
          { title: "Band C", value: "C" },
          { title: "Band D", value: "D" },
          { title: "Band E", value: "E" },
          { title: "Band F", value: "F" },
          { title: "Band G", value: "G" },
          { title: "Band H", value: "H" },
        ],
        layout: "dropdown", // or "radio"
      },
      validation: (Rule) =>
        Rule.required().error("Council tax band is required"),
    }),

    defineField({
      name: "parking",
      title: "Parking Type",
      type: "string",
      fieldset: "details",
      description: "Select the parking availability/type",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Street Parking", value: "street" },
          { title: "Garage", value: "garage" },
          { title: "Private Parking", value: "private" },
          { title: "Public Parking Nearby", value: "public" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Please specify parking type"),
    }),

    defineField({
      name: "garden",
      title: "Garden",
      type: "string",
      fieldset: "details",
      options: {
        list: [
          { title: "No Garden", value: "none" },
          { title: "Private Garden", value: "private" },
          { title: "Shared Garden", value: "shared" },
          { title: "Front and Back Garden", value: "front_back" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("Please select garden type"),
    }),

    defineField({
      name: "accessibility",
      title: "Accessibility",
      type: "array",
      fieldset: "details",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Wheelchair Accessible", value: "wheelchair" },
          { title: "Step-Free Access", value: "step_free" },
          { title: "Elevator", value: "elevator" },
          { title: "Ground Floor", value: "ground_floor" },
        ],
      },
    }),

    defineField({
      name: "ownershipType",
      title: "Ownership Type",
      type: "string",
      fieldset: "details",
      options: {
        list: [
          { title: "Leasehold", value: "leasehold" },
          { title: "Freehold", value: "freehold" },
          { title: "Share of Freehold", value: "share_of_freehold" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Ownership type is required"),
    }),

    defineField({
      name: "groundRent",
      title: "Ground Rent (£ per year)",
      type: "number",
      fieldset: "details",
      description: "Annual ground rent in pounds",
      validation: (Rule) => Rule.min(0).error("Ground rent cannot be negative"),
    }),

    defineField({
      name: "annualServiceCharge",
      title: "Annual Service Charge (£)",
      type: "number",
      fieldset: "details",
      description: "Annual service charge in pounds",
      validation: (Rule) =>
        Rule.min(0).error("Service charge cannot be negative"),
    }),

    defineField({
      name: "lengthOfLease",
      title: "Length of Lease (Years Remaining)",
      type: "number",
      fieldset: "details",
      description: "Number of years remaining on the lease",
      validation: (Rule) =>
        Rule.min(1).max(999).error("Please enter a valid lease length"),
    }),

    defineField({
      name: "spaciousLiving",
      title: "Spacious Living",
      type: "string",
      fieldset: "details",
      description: "Describe the spacious living area (if any).",
      validation: (Rule) =>
        Rule.required().error(
          "Please provide details about the spacious living area."
        ),
    }),

    defineField({
      name: "outdoorOasis",
      title: "Outdoor Oasis",
      type: "string",
      fieldset: "details",
      description: "What is the outdoor oasis",
    }),

    defineField({
      name: "landSize",
      title: "Land Size (sq ft)",
      type: "string",
      fieldset: "details",
      description: "Enter the land area in square feet",
      placeholder: "e.g., 1200",
    }),

    defineField({
      name: "noOfBeds",
      title: "No of Bedrooms",
      type: "number",
      fieldset: "details",
      description: "Specify how many bedrooms the apartment has",
      placeholder: "e.g., 4",
      validation: (Rule) =>
        Rule.required().min(1).error("Number of bedrooms is required"),
    }),

    defineField({
      name: "noOfBaths",
      title: "No of Bathrooms",
      type: "number",
      fieldset: "details",
      description: "Specify how many bathrooms the apartment has",
      placeholder: "e.g., 3",
      validation: (Rule) =>
        Rule.required().min(1).error("Number of bathrooms is required"),
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      fieldset: "details",
      of: [{ type: "string" }],
      description: "Enter the main features of the apartment (one per line)",
      validation: (Rule) =>
        Rule.required().min(1).error("At least one key feature is required"),
    }),

    // Media
    defineField({
      name: "image",
      title: "House Display Image",
      type: "image",
      fieldset: "media",
      description: "Upload the primary image to represent the apartment",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Display image is required"),
    }),
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
      fieldset: "media",
      description: "Upload additional images to showcase the apartment (Minimum of 5)",
    }),

    // Agent Information
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      fieldset: "agentInfo",
      description: "Enter agent's phone number",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .error("Phone number must be at least 10 digits"),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      fieldset: "agentInfo",
      description: "Enter agent's email address",
      validation: (Rule) =>
        Rule.required().email().error("Please enter a valid email address"),
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
