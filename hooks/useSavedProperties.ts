"use client";

import { useMemo, useSyncExternalStore } from "react";

const SAVED_PROPERTIES_KEY = "casa-clara:saved-properties";
const SAVED_PROPERTIES_EVENT = "casa-clara:saved-properties-change";
const EMPTY_SAVED_PROPERTIES = "[]";

function getSavedPropertiesSnapshot() {
  return localStorage.getItem(SAVED_PROPERTIES_KEY) ?? EMPTY_SAVED_PROPERTIES;
}

function getSavedPropertiesServerSnapshot() {
  return EMPTY_SAVED_PROPERTIES;
}

function subscribeToSavedProperties(onStoreChange: () => void) {
  function handleChange() {
    onStoreChange();
  }

  window.addEventListener("storage", handleChange);
  window.addEventListener(SAVED_PROPERTIES_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(SAVED_PROPERTIES_EVENT, handleChange);
  };
}

function parseSavedPropertyIds(snapshot: string): string[] {
  try {
    const parsedValue: unknown = JSON.parse(snapshot);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(
      (value): value is string => typeof value === "string",
    );
  } catch {
    return [];
  }
}

export function useSavedPropertyIds() {
  const snapshot = useSyncExternalStore(
    subscribeToSavedProperties,
    getSavedPropertiesSnapshot,
    getSavedPropertiesServerSnapshot,
  );

  return useMemo(() => parseSavedPropertyIds(snapshot), [snapshot]);
}

export function savePropertyIds(propertyIds: string[]) {
  const uniquePropertyIds = [...new Set(propertyIds)];

  localStorage.setItem(SAVED_PROPERTIES_KEY, JSON.stringify(uniquePropertyIds));

  window.dispatchEvent(new Event(SAVED_PROPERTIES_EVENT));
}
