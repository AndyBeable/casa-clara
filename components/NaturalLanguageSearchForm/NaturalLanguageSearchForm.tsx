"use client";

import { useActionState } from "react";

import {
  searchPropertiesWithNaturalLanguage,
  type NaturalLanguageSearchState,
} from "@/app/properties/actions";

const initialState: NaturalLanguageSearchState = {
  status: "idle",
  message: "",
};

export default function NaturalLanguageSearchForm() {
  const [state, formAction, isPending] = useActionState(
    searchPropertiesWithNaturalLanguage,
    initialState,
  );

  return (
    <form
      action={formAction}
      aria-label="Natural-language property search"
      className="mb-8 rounded-2xl border border-border bg-surface p-5 sm:p-6"
    >
      <div className="mb-5 max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          AI-assisted search
        </p>

        <h2 className="mt-2 font-display text-2xl font-medium">
          Describe your ideal home
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted">
          Search in everyday language and we’ll translate it into property
          filters.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
        <label htmlFor="searchText" className="sr-only">
          Describe the home you’re looking for
        </label>

        <input
          id="searchText"
          name="searchText"
          type="text"
          required
          maxLength={200}
          aria-invalid={state.status === "error"}
          aria-describedby={
            state.status === "error"
              ? "natural-language-search-error"
              : undefined
          }
          className="h-12 w-full min-w-0 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 sm:flex-1"
          placeholder="A villa near Sitges with 3 bedrooms under €1.5 million"
        />

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Understanding…" : "Search with AI"}
        </button>
      </div>

      {state.status === "error" && (
        <p
          id="natural-language-search-error"
          role="alert"
          className="mt-3 text-sm text-red-700"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
