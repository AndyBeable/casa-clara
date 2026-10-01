import type { Property } from "@/types/property";
import PropertyGrid from "../PropertyGrid/PropertyGrid";

type RelatedPropertiesProps = {
  properties: Property[];
};

export default function RelatedProperties({
  properties,
}: RelatedPropertiesProps) {
  return (
    <section
      aria-labelledby="related-properties-heading"
      className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
    >
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Continue exploring
        </p>

        <h2
          id="related-properties-heading"
          className="mt-2 font-display text-3xl leading-tight font-medium sm:text-4xl"
        >
          You may also like
        </h2>
      </header>

      <PropertyGrid properties={properties} />
    </section>
  );
}
