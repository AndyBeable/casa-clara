import { z } from "zod";

export const propertySearchSchema = z.object({
  query: z
    .string()
    .nullable()
    .describe("A property title, city or area mentioned by the user"),

  propertyType: z
    .enum(["apartment", "house", "villa"])
    .nullable()
    .describe("The requested type of property"),

  minBedrooms: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
    .nullable()
    .describe("The minimum number of bedrooms requested"),

  maxPrice: z
    .union([
      z.literal(750000),
      z.literal(1000000),
      z.literal(1500000),
      z.literal(2000000),
    ])
    .nullable()
    .describe("The maximum price in euros"),
});

export type ParsedPropertySearch = z.infer<typeof propertySearchSchema>;
