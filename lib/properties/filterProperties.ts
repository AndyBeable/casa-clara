import type { Property, PropertyType } from "@/types/property";

export type PropertyFilters = {
  query?: string;
  propertyType?: PropertyType;
  minBedrooms?: number;
  maxPrice?: number;
};

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters,
): Property[] {
  const normalizedQuery = filters.query?.trim().toLowerCase() ?? "";

  return properties.filter((property) => {
    const searchableValues = [
      property.title,
      property.location.city,
      property.location.area,
    ];

    const matchesQuery =
      !normalizedQuery ||
      searchableValues.some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      );

    const matchesPropertyType =
      !filters.propertyType || property.propertyType === filters.propertyType;

    const matchesMinBedrooms =
      filters.minBedrooms === undefined ||
      property.bedrooms >= filters.minBedrooms;

    const matchesMaxPrice =
      filters.maxPrice === undefined || property.price <= filters.maxPrice;

    return (
      matchesQuery &&
      matchesPropertyType &&
      matchesMinBedrooms &&
      matchesMaxPrice
    );
  });
}
