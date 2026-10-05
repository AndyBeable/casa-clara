import "server-only";

import { contentfulClient } from "@/lib/contentful/client";
import type { PropertyEntrySkeleton } from "@/lib/contentful/types";
import type { Property, PropertyType } from "@/types/property";
import { cacheLife, cacheTag } from "next/cache";

export const CONTENTFUL_PROPERTIES_CACHE_TAG = "contentful-properties";

async function getRawPropertyEntries() {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<PropertyEntrySkeleton>(
      {
        content_type: "property",
        include: 1,
      },
    );

  return response.items;
}

function isPropertyType(value: string): value is PropertyType {
  return value === "apartment" || value === "house" || value === "villa";
}

export async function getContentfulProperties(): Promise<Property[]> {
  "use cache";

  cacheLife("hours");
  cacheTag(CONTENTFUL_PROPERTIES_CACHE_TAG);

  const entries = await getRawPropertyEntries();

  return entries.map((entry) => {
    const { fields } = entry;

    const propertyType = fields.propertyType;

    if (!isPropertyType(propertyType)) {
      throw new Error(
        `Invalid property type "${propertyType}" for Contentful entry ${entry.sys.id}`,
      );
    }

    const image = fields.image;
    const imageFile = image?.fields.file;
    const imageDescription = image?.fields.description;

    if (!imageFile?.url) {
      throw new Error(`Missing image for Contentful entry ${entry.sys.id}`);
    }

    if (typeof imageDescription !== "string" || !imageDescription.trim()) {
      throw new Error(
        `Missing image description for Contentful entry ${entry.sys.id}`,
      );
    }

    const imageUrl = imageFile.url.startsWith("//")
      ? `https:${imageFile.url}`
      : imageFile.url;

    return {
      id: entry.sys.id,
      slug: fields.slug,
      title: fields.title,
      location: {
        city: fields.city,
        area: fields.area,
      },
      propertyType,
      price: fields.price,
      currency: "EUR",
      bedrooms: fields.bedrooms,
      bathrooms: fields.bathrooms,
      areaM2: fields.areaM2,
      description: fields.description,
      features: fields.features,
      image: {
        src: imageUrl,
        alt: imageDescription.trim(),
      },
    };
  });
}

export async function getContentfulPropertyBySlug(
  slug: string,
): Promise<Property | undefined> {
  const properties = await getContentfulProperties();

  return properties.find((property) => property.slug === slug);
}
