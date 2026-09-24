import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types/property";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const { area, city } = property.location;

  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  const propertyUrl = `/properties/${property.slug}`;

  return (
    <article className="group flex flex-col gap-2.5 overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-lg">
      <Link
        href={propertyUrl}
        aria-label={`View ${property.title}`}
        className="relative block aspect-[191/144] overflow-hidden"
      >
        <Image
          src={property.image.src}
          alt={property.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-4 left-4 rounded-full bg-surface px-3 py-1 text-xs leading-4 font-semibold tracking-[0.18em] text-foreground uppercase">
          {property.propertyType}
        </span>
      </Link>

      <div className="p-5">
        <p className="text-xs leading-4 font-semibold tracking-[0.18em] text-accent uppercase">
          {area} · {city}
        </p>

        <h2 className="mt-1.5 font-display text-2xl leading-[30px] font-medium">
          <Link
            href={propertyUrl}
            className="transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {property.title}
          </Link>
        </h2>

        <p className="mt-3 text-lg leading-8 font-normal">{formattedPrice}</p>

        <ul
          aria-label="Property details"
          className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-2 text-base leading-6 text-muted"
        >
          <li>
            {property.bedrooms}{" "}
            {property.bedrooms === 1 ? "bedroom" : "bedrooms"}
          </li>

          <li aria-hidden="true">·</li>

          <li>
            {property.bathrooms}{" "}
            {property.bathrooms === 1 ? "bathroom" : "bathrooms"}
          </li>

          <li aria-hidden="true">·</li>

          <li>{property.areaM2} m²</li>
        </ul>
      </div>
    </article>
  );
}
