import type { ParsedPropertySearch } from "@/lib/ai/propertySearchSchema";

export function buildPropertySearchParams(filters: ParsedPropertySearch) {
  const params = new URLSearchParams();

  if (filters.query) {
    params.set("query", filters.query);
  }

  if (filters.propertyType) {
    params.set("propertyType", filters.propertyType);
  }

  if (filters.minBedrooms) {
    params.set("minBedrooms", filters.minBedrooms.toString());
  }

  if (filters.maxPrice) {
    params.set("maxPrice", filters.maxPrice.toString());
  }

  return params;
}
