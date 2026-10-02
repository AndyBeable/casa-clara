import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

type PropertyEntryFields = {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  city: EntryFieldTypes.Symbol;
  area: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Integer;
  bedrooms: EntryFieldTypes.Integer;
  bathrooms: EntryFieldTypes.Integer;
  areaM2: EntryFieldTypes.Integer;
  propertyType: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  features: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  image: EntryFieldTypes.AssetLink;
};

export type PropertyEntrySkeleton = EntrySkeletonType<
  PropertyEntryFields,
  "property"
>;
