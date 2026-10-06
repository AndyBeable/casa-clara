import { describe, expect, it } from "vitest";
import { buildPropertySearchParams } from "./buildPropertySearchParams";
import { type ParsedPropertySearch } from "@/lib/ai/propertySearchSchema";

describe("buildPropertySearchParams", () => {
  it("adds the query parameter when query is provided", () => {
    const filters = {
      query: "swimming pool",
      propertyType: null,
      minBedrooms: null,
      maxPrice: null,
    };

    const params = buildPropertySearchParams(filters);

    expect(params.get("query")).toBe("swimming pool");
  });

  it("adds the property type parameter when propertyType is provided", () => {
    const filters: ParsedPropertySearch = {
      query: null,
      propertyType: "villa",
      minBedrooms: null,
      maxPrice: null,
    };

    const params = buildPropertySearchParams(filters);

    expect(params.get("propertyType")).toBe("villa");
  });

  it("adds the min bedroom parameter when minBedrooms is provided", () => {
    const filters: ParsedPropertySearch = {
      query: null,
      propertyType: null,
      minBedrooms: 3,
      maxPrice: null,
    };

    const params = buildPropertySearchParams(filters);

    expect(params.get("minBedrooms")).toBe("3");
  });

  it("adds the max price parameter when maxPrice is provided", () => {
    const filters: ParsedPropertySearch = {
      query: null,
      propertyType: null,
      minBedrooms: null,
      maxPrice: 750000,
    };

    const params = buildPropertySearchParams(filters);

    expect(params.get("maxPrice")).toBe("750000");
  });

  it("adds nothing to the url if no filters are provided", () => {
    const filters: ParsedPropertySearch = {
      query: null,
      propertyType: null,
      minBedrooms: null,
      maxPrice: null,
    };

    const params = buildPropertySearchParams(filters);

    expect(params.toString()).toBe("");
  });

  it("adds multiple parameters when multiple filters are provided", () => {
    const filters: ParsedPropertySearch = {
      query: "swimming pool",
      propertyType: "house",
      minBedrooms: 3,
      maxPrice: 1500000,
    };

    const params = buildPropertySearchParams(filters);

    expect(params.toString()).toBe(
      "query=swimming+pool&propertyType=house&minBedrooms=3&maxPrice=1500000",
    );
  });
});
