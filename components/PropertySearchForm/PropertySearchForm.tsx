import type { PropertyType } from "@/types/property";
import Link from "next/link";

type PropertySearchFormProps = {
  query: string;
  propertyType?: PropertyType;
  minBedrooms?: number;
  maxPrice?: number;
};

const controlClassName =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

const searchClassName =
  "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const clearFiltersClassName =
  "rounded-sm text-sm font-semibold text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function PropertySearchForm({
  query,
  propertyType,
  minBedrooms,
  maxPrice,
}: PropertySearchFormProps) {
  const href = "/properties";
  const hasActiveFilters = Boolean(
    query.trim() || propertyType || minBedrooms || maxPrice,
  );

  return (
    <form
      action="/properties"
      method="get"
      role="search"
      aria-label="Property filters"
      className="mb-8 rounded-2xl border border-border bg-surface p-4 sm:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="query"
            className="text-sm font-medium text-foreground"
          >
            Search by location or property name
          </label>

          <input
            id="query"
            name="query"
            type="search"
            defaultValue={query}
            className={controlClassName}
            placeholder="Try Sitges or Casa Llum"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="propertyType"
            className="text-sm font-medium text-foreground"
          >
            Property type
          </label>

          <select
            id="propertyType"
            name="propertyType"
            defaultValue={propertyType ?? ""}
            className={controlClassName}
          >
            <option value="">All property types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="minBedrooms"
            className="text-sm font-medium text-foreground"
          >
            Minimum bedrooms
          </label>

          <select
            id="minBedrooms"
            name="minBedrooms"
            defaultValue={minBedrooms?.toString() ?? ""}
            className={controlClassName}
          >
            <option value="">Any number</option>
            <option value="1">1+ bedroom</option>
            <option value="2">2+ bedrooms</option>
            <option value="3">3+ bedrooms</option>
            <option value="4">4+ bedrooms</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="maxPrice"
            className="text-sm font-medium text-foreground"
          >
            Max price
          </label>

          <select
            id="maxPrice"
            name="maxPrice"
            defaultValue={maxPrice?.toString() ?? ""}
            className={controlClassName}
          >
            <option value="">Any price</option>
            <option value="750000">Up to €750,000</option>
            <option value="1000000">Up to €1,000,000</option>
            <option value="1500000">Up to €1,500,000</option>
            <option value="2000000">Up to €2,000,000</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" className={searchClassName}>
          Search
        </button>
        {hasActiveFilters && (
          <Link href={href} className={clearFiltersClassName}>
            Clear filters
          </Link>
        )}
      </div>
    </form>
  );
}
