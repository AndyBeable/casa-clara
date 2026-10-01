import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";
import PageIntro from "@/components/PageIntro/PageIntro";
import { properties } from "@/data/properties";
import Link from "next/link";

const viewAllPropertiesClassName =
  "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageIntro
          eyebrow="Homes selected by Casa Clara"
          title="Distinctive homes, filled with light"
          description="Explore a considered collection of apartments, houses and villas across Barcelona and the Mediterranean coast."
        />

        <PropertyGrid properties={featuredProperties} />
        <div className="mt-10 flex justify-center">
          <Link href="/properties" className={viewAllPropertiesClassName}>
            View all properties
          </Link>
        </div>
      </div>
    </main>
  );
}
