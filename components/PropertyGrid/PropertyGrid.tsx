import PropertyCard from "@/components/PropertyCard/PropertyCard";
import type { Property } from "@/types/property";

type PropertyGridProps = {
  properties: Property[];
};

export default function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
