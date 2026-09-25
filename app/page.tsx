import PropertyGrid from "@/components/PropertyGrid/PropertyGrid";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Homes selected by Casa Clara
          </p>

          <h1 className="mt-3 font-display text-4xl leading-tight font-medium sm:text-5xl">
            Distinctive homes, filled with light
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Explore a considered collection of apartments, houses and villas
            across Barcelona and the Mediterranean coast.
          </p>
        </header>

        <PropertyGrid properties={properties} />
      </div>
    </main>
  );
}
