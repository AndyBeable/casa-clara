import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPropertyBySlug, properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/properties/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property not found",
    };
  }
  return {
    title: property.title,
    description: property.description,
  };
}

export default async function PropertyPage({
  params,
}: PageProps<"/properties/[slug]">) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const propertyLocation = `${property.location.area}, ${property.location.city}`;

  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  const propertyDetails = [
    {
      label: "Bedrooms",
      value: property.bedrooms,
    },
    {
      label: "Bathrooms",
      value: property.bathrooms,
    },
    {
      label: "Area",
      value: `${property.areaM2} m²`,
    },
  ];

  return (
    <main className="px-6 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-6 inline-flex text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          ← Back to properties
        </Link>

        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl sm:aspect-[16/9]">
          <Image
            src={property.image.src}
            alt={property.image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1216px, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div>
            <header>
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {property.propertyType} · {propertyLocation}
              </p>

              <h1 className="mt-3 font-display text-5xl leading-tight font-medium sm:text-6xl">
                {property.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {property.description}
              </p>
            </header>

            <section
              className="mt-10 border-t border-border pt-8"
              aria-labelledby="property-features"
            >
              <h2
                id="property-features"
                className="font-display text-3xl font-medium"
              >
                Property features
              </h2>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-accent">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-8">
            <p className="text-sm text-muted">Asking price</p>

            <p className="mt-1 font-display text-4xl leading-tight font-medium">
              {formattedPrice}
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-5">
              {propertyDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs text-muted">{detail.label}</dt>
                  <dd className="mt-1 font-medium">{detail.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href={`/enquire?property=${property.slug}`}
              className="mt-6 flex w-full justify-center rounded-full bg-accent px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Enquire about this property
            </Link>

            <p className="mt-4 text-center text-xs text-muted">
              Property reference: {property.id}
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
