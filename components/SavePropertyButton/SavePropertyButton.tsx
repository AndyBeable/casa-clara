"use client";

import {
  savePropertyIds,
  useSavedPropertyIds,
} from "@/hooks/useSavedProperties";
import { toggleSavedPropertyId } from "@/lib/saved-properties/toggleSavedPropertyId";

type SavePropertyButtonProps = {
  propertyId: string;
  propertyTitle: string;
};

export default function SavePropertyButton({
  propertyId,
  propertyTitle,
}: SavePropertyButtonProps) {
  const savedPropertyIds = useSavedPropertyIds();

  const isSaved = savedPropertyIds.includes(propertyId);

  function handleSaveToggle() {
    const nextSavedPropertyIds = toggleSavedPropertyId(
      savedPropertyIds,
      propertyId,
    );

    savePropertyIds(nextSavedPropertyIds);
  }

  return (
    <button
      type="button"
      onClick={handleSaveToggle}
      aria-pressed={isSaved}
      aria-label={
        isSaved
          ? `Remove ${propertyTitle} from saved properties`
          : `Save ${propertyTitle}`
      }
      className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-surface text-accent shadow-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5"
        fill={isSaved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
        />
      </svg>
    </button>
  );
}
