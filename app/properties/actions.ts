"use server";

import { parsePropertySearch } from "@/lib/ai/parsePropertySearch";
import type { ParsedPropertySearch } from "@/lib/ai/propertySearchSchema";
import { redirect } from "next/navigation";
import { buildPropertySearchParams } from "@/lib/properties/buildPropertySearchParams";

export type NaturalLanguageSearchState = {
  status: "idle" | "error";
  message: string;
};

export async function searchPropertiesWithNaturalLanguage(
  previousState: NaturalLanguageSearchState,
  formData: FormData,
): Promise<NaturalLanguageSearchState> {
  const searchText = formData.get("searchText");

  if (
    typeof searchText !== "string" ||
    !searchText.trim() ||
    searchText.length > 200
  ) {
    return {
      status: "error",
      message: "Describe the kind of property you’re looking for.",
    };
  }

  let parsedFilters: ParsedPropertySearch;

  try {
    parsedFilters = await parsePropertySearch(searchText.trim());
  } catch (error) {
    console.error("Natural-language property search failed:", error);

    return {
      status: "error",
      message:
        "We couldn’t understand your search right now. Please try again or use the filters below.",
    };
  }

  const params = buildPropertySearchParams(parsedFilters);

  const queryString = params.toString();

  redirect(queryString ? `/properties?${queryString}` : "/properties");
}
