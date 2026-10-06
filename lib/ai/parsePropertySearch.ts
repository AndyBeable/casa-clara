import "server-only";

import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";

import {
  propertySearchSchema,
  type ParsedPropertySearch,
} from "@/lib/ai/propertySearchSchema";

export async function parsePropertySearch(
  searchText: string,
): Promise<ParsedPropertySearch> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.responses.parse({
    model: "gpt-6-luna",
    reasoning: {
      effort: "none",
    },
    input: [
      {
        role: "system",
        content: `
You convert natural-language property searches into structured filters.

Rules:
- query is a property title, city or area explicitly mentioned by the user.
- Normalize apartments, houses and villas to their singular property type.
- minBedrooms represents "at least" the requested number of bedrooms.
- maxPrice represents the user's maximum budget in euros.
- Use only the maximum-price values permitted by the schema.
- If a filter is not mentioned, return null.
- Do not infer filters the user did not request.
        `.trim(),
      },
      {
        role: "user",
        content: searchText,
      },
    ],
    text: {
      format: zodTextFormat(propertySearchSchema, "property_search"),
    },
  });

  if (!response.output_parsed) {
    throw new Error("The property search could not be interpreted.");
  }

  return response.output_parsed;
}
