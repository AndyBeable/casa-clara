export function toggleSavedPropertyId(
  savedPropertyIds: string[],
  propertyId: string,
): string[] {
  const isSaved = savedPropertyIds.includes(propertyId);

  return isSaved
    ? savedPropertyIds.filter((savedId) => savedId !== propertyId)
    : [...savedPropertyIds, propertyId];
}
