import PropertyDetailsText from "@/components/property-details/property-details-text";
import PropertyImageGrid from "@/components/property-details/property-image-grid";
import RecentListing from "@/components/property-details/recent-listing";
import { fetchApartmentBySlug, fetchAllApartmentSlugs } from "@/sanity/lib/fetch-apartment";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await fetchAllApartmentSlugs();

  return slugs.map((slug: string) => ({
    id: slug,
  }));
}

export default async function PropertyDetailsPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;

  const apartment = await fetchApartmentBySlug(params.id);

  if (!apartment) return notFound();

  return (
    <main className="min-h-screen w-full font-didot mb-12 lg:mb-24">
      <PropertyImageGrid apartment={apartment} />
      <PropertyDetailsText apartment={apartment} />
      <RecentListing />
    </main>
  );
}