import PropertyCard from "@/components/PropertyCard/PropertyCard";
import type { Property } from "@/types/property";

type PropertyGridProps = {
  properties: Property[];
  eagerLoadFirstImage?: boolean;
};

export default function PropertyGrid({
  properties,
  eagerLoadFirstImage,
}: PropertyGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard
          key={property.id}
          property={property}
          eagerLoadImage={eagerLoadFirstImage && index === 0}
        />
      ))}
    </div>
  );
}
