import { describe, expect, it } from "vitest";
import { toggleSavedPropertyId } from "./toggleSavedPropertyId";

describe("toggleSavedPropertyId", () => {
  it("adds a property that is not already saved", () => {
    const savedPropertyIds = ["property-001"];
    const propertyId = "property-002";

    const result = toggleSavedPropertyId(savedPropertyIds, propertyId);

    expect(result).toEqual(["property-001", "property-002"]);
  });

  it("removes a property that is already saved", () => {
    const savedPropertyIds = ["property-001", "property-002"];
    const propertyId = "property-002";

    const result = toggleSavedPropertyId(savedPropertyIds, propertyId);

    expect(result).toEqual(["property-001"]);
  });

  it("does not mutate the original saved properties list", () => {
    const savedPropertyIds = ["property-001"];
    const propertyId = "property-002";

    const result = toggleSavedPropertyId(savedPropertyIds, propertyId);

    expect(savedPropertyIds).toEqual(["property-001"]);
    expect(result).not.toBe(savedPropertyIds);
  });
});
