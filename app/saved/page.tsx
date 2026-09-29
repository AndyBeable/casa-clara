import { properties } from "@/data/properties";
import type { Metadata } from "next";
import SavedPropertiesGrid from "@/components/SavedPropertiesGrid/SavedPropertiesGrid";

export const metadata: Metadata = {
  title: "Saved properties",
  description: "View the Casa Clara properties you have saved.",
};

export default function SavedPropertiesPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Casa Clara collection
          </p>

          <h1 className="mt-3 font-display text-4xl leading-tight font-medium sm:text-5xl">
            Saved properties
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Keep track of the homes that have caught your eye.
          </p>
        </header>
        <SavedPropertiesGrid properties={properties} />
      </div>
    </main>
  );
}
