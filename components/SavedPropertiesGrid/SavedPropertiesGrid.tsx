"use client";

import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";
import { useSavedPropertyIds } from "@/hooks/useSavedProperties";
import type { Property } from "@/types/property";
import Link from "next/link";

type SavedPropertiesGridProps = {
  properties: Property[];
};

const explorePropertiesClassName =
  "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function SavedPropertiesGrid({
  properties,
}: SavedPropertiesGridProps) {
  const savedPropertyIds = useSavedPropertyIds();

  const savedProperties = properties.filter((property) =>
    savedPropertyIds.includes(property.id),
  );

  if (!savedProperties.length) {
    return (
      <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center">
        <h2 className="font-display text-2xl font-medium">
          No saved properties yet
        </h2>

        <p className="mt-2 text-muted">
          Save homes from the property collection and they’ll appear here.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/properties" className={explorePropertiesClassName}>
            Explore properties
          </Link>
        </div>
      </div>
    );
  }

  return <PropertyGrid properties={savedProperties} />;
}
