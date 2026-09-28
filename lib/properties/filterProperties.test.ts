import { describe, expect, it } from "vitest";
import { properties } from "../../data/properties";
import { filterProperties } from "./filterProperties";

describe("filterProperties", () => {
  it("returns every property when no filters are active", () => {
    const result = filterProperties(properties, {});

    expect(result).toEqual(properties);
  });

  it("returns only properties matching the selected property type", () => {
    const propertyType = "villa";
    const result = filterProperties(properties, { propertyType });

    const everyPropertyMatches = result.every(
      (property) => property.propertyType === propertyType,
    );

    expect(result.length).toBeGreaterThan(0);
    expect(everyPropertyMatches).toBe(true);
  });

  it("returns only properties meeting the minimum bedroom requirement", () => {
    const minBedrooms = 3;
    const result = filterProperties(properties, { minBedrooms });

    const everyPropertyMatches = result.every(
      (property) => property.bedrooms >= minBedrooms,
    );

    expect(result.length).toBeGreaterThan(0);
    expect(everyPropertyMatches).toBe(true);
  });

  it("returns only properties meeting the maximum price requirement", () => {
    const maxPrice = 1_000_000;
    const result = filterProperties(properties, { maxPrice });

    const everyPropertyMatches = result.every(
      (property) => property.price <= maxPrice,
    );

    expect(result.length).toBeGreaterThan(0);
    expect(everyPropertyMatches).toBe(true);
    expect(result.length).toBeLessThan(properties.length);
  });

  it("returns only properties based on the query", () => {
    const query = "SITGES";
    const normalizedQuery = query.toLowerCase();

    const result = filterProperties(properties, { query });

    const everyPropertyMatches = result.every((property) => {
      const searchableValues = [
        property.title,
        property.location.city,
        property.location.area,
      ];

      return searchableValues.some((value) => {
        return value.toLowerCase().includes(normalizedQuery);
      });
    });

    expect(result.length).toBeGreaterThan(0);
    expect(everyPropertyMatches).toBe(true);
  });
});
