import type { PropertyType } from "@/types/property";

type PropertySearchFormProps = {
  query: string;
  propertyType?: PropertyType;
  minBedrooms?: number;
  maxPrice?: number;
};

export default function PropertySearchForm({
  query,
  propertyType,
  minBedrooms,
  maxPrice,
}: PropertySearchFormProps) {
  return (
    <form action="/properties" method="get" className="mb-8">
      <label htmlFor="query">Search by location or property name</label>

      <input id="query" name="query" type="search" defaultValue={query} />

      <label htmlFor="propertyType">Property type</label>

      <select
        id="propertyType"
        name="propertyType"
        defaultValue={propertyType ?? ""}
      >
        <option value="">All property types</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="villa">Villa</option>
      </select>

      <label htmlFor="minBedrooms">Minimum bedrooms</label>

      <select
        id="minBedrooms"
        name="minBedrooms"
        defaultValue={minBedrooms?.toString() ?? ""}
      >
        <option value="">Any number</option>
        <option value="1">1+ bedroom</option>
        <option value="2">2+ bedrooms</option>
        <option value="3">3+ bedrooms</option>
        <option value="4">4+ bedrooms</option>
      </select>

      <label htmlFor="maxPrice">Max price</label>

      <select
        id="maxPrice"
        name="maxPrice"
        defaultValue={maxPrice?.toString() ?? ""}
      >
        <option value="">Any price</option>
        <option value="750000">Up to €750,000</option>
        <option value="1000000">Up to €1,000,000</option>
        <option value="1500000">Up to €1,500,000</option>
        <option value="2000000">Up to €2,000,000</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
}
