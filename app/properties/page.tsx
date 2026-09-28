import { properties } from "@/data/properties";
import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";
import PropertySearchForm from "@/components/PropertySearchForm/PropertySearchForm";
import { filterProperties } from "@/lib/properties/filterProperties";

export default async function PropertiesPage({
  searchParams,
}: PageProps<"/properties">) {
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

  const filteredProperties = filterProperties(properties, {
    query: searchQuery,
    propertyType: selectedPropertyType,
    minBedrooms: selectedMinBedrooms,
    maxPrice: selectedMaxPrice,
  });

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Casa Clara collection
          </p>

          <h1 className="mt-3 font-display text-4xl leading-tight font-medium sm:text-5xl">
            Find your place in the sun
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Explore distinctive homes across Barcelona and the Mediterranean
            coast.
          </p>
        </header>
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
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center">
            <h2 className="font-display text-2xl font-medium">
              No homes found
            </h2>

            <p className="mt-2 text-muted">
              Try changing or clearing some of your search filters.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
