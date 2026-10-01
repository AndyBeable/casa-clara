"use client";

import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";
import EmptyState from "@/components/EmptyState/EmptyState";
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
      <EmptyState
        title="No saved properties yet"
        description="Save homes from the property collection and they’ll appear here."
        action={
          <Link href="/properties" className={explorePropertiesClassName}>
            Explore properties
          </Link>
        }
      />
    );
  }

  return <PropertyGrid properties={savedProperties} />;
}
