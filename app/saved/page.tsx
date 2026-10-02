import { getContentfulProperties } from "@/lib/contentful/properties";
import type { Metadata } from "next";
import SavedPropertiesGrid from "@/components/SavedPropertiesGrid/SavedPropertiesGrid";
import PageIntro from "@/components/PageIntro/PageIntro";

export const metadata: Metadata = {
  title: "Saved properties",
  description: "View the Casa Clara properties you have saved.",
};

export default async function SavedPropertiesPage() {
  const properties = await getContentfulProperties();

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageIntro
          eyebrow="Casa Clara collection"
          title="Saved properties"
          description="Keep track of the homes that have caught your eye."
        />
        <SavedPropertiesGrid properties={properties} />
      </div>
    </main>
  );
}
