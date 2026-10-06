import { Suspense } from "react";
import { getContentfulProperties } from "@/lib/contentful/properties";
import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";
import PageIntro from "@/components/PageIntro/PageIntro";
import PropertySearchForm from "@/components/PropertySearchForm/PropertySearchForm";
import EmptyState from "@/components/EmptyState/EmptyState";
import { filterProperties } from "@/lib/properties/filterProperties";
import NaturalLanguageSearchForm from "@/components/NaturalLanguageSearchForm/NaturalLanguageSearchForm";

type PropertiesSearchParams = PageProps<"/properties">["searchParams"];

export default function PropertiesPage({
  searchParams,
}: PageProps<"/properties">) {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageIntro
          eyebrow="Casa Clara collection"
          title="Find your place in the sun"
          description="Explore distinctive homes across Barcelona and the Mediterranean coast."
        />

        <NaturalLanguageSearchForm />

        <Suspense fallback={<p className="text-muted">Loading properties…</p>}>
          <PropertiesContent searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

async function PropertiesContent({
  searchParams,
}: {
  searchParams: PropertiesSearchParams;
}) {
  const { query, propertyType, minBedrooms, maxPrice } = await searchParams;

  const searchQuery = typeof query === "string" ? query : "";

  const selectedPropertyType =
    propertyType === "apartment" ||
    propertyType === "house" ||
    propertyType === "villa"
      ? propertyType
      : undefined;

  const parsedMinBedrooms =
    typeof minBedrooms === "string" ? Number(minBedrooms) : NaN;

  const selectedMinBedrooms =
    Number.isInteger(parsedMinBedrooms) && parsedMinBedrooms > 0
      ? parsedMinBedrooms
      : undefined;

  const parsedMaxPrice = typeof maxPrice === "string" ? Number(maxPrice) : NaN;

  const selectedMaxPrice =
    Number.isInteger(parsedMaxPrice) && parsedMaxPrice > 0
      ? parsedMaxPrice
      : undefined;

  const properties = await getContentfulProperties();

  const filteredProperties = filterProperties(properties, {
    query: searchQuery,
    propertyType: selectedPropertyType,
    minBedrooms: selectedMinBedrooms,
    maxPrice: selectedMaxPrice,
  });

  return (
    <>
      <PropertySearchForm
        query={searchQuery}
        propertyType={selectedPropertyType}
        minBedrooms={selectedMinBedrooms}
        maxPrice={selectedMaxPrice}
      />
      <div className="mb-6">
        <p className="text-sm text-muted">
          {filteredProperties.length}{" "}
          {filteredProperties.length === 1 ? "home" : "homes"} found
        </p>
      </div>

      {filteredProperties.length > 0 ? (
        <PropertyGrid properties={filteredProperties} eagerLoadFirstImage />
      ) : (
        <EmptyState
          title="No homes found"
          description="Try changing or clearing some of your search filters."
        />
      )}
    </>
  );
}
