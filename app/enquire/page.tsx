import { getContentfulPropertyBySlug } from "@/lib/contentful/properties";
import { notFound } from "next/navigation";
import EnquiryForm from "@/components/EnquiryForm/EnquiryForm";

export default async function EnquiryPage({
  searchParams,
}: PageProps<"/enquire">) {
  const { property } = await searchParams;

  const propertySlug = typeof property === "string" ? property : "";

  const selectedProperty = await getContentfulPropertyBySlug(propertySlug);

  if (!selectedProperty) {
    notFound();
  }

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <h1 className="font-display text-4xl leading-tight font-medium sm:text-5xl">
            Property enquiry
          </h1>

          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            You are enquiring about{" "}
            <span className="font-medium text-foreground">
              {selectedProperty.title}
            </span>{" "}
            in {selectedProperty.location.area},{" "}
            {selectedProperty.location.city}.
          </p>
        </header>

        <EnquiryForm propertySlug={selectedProperty.slug} />
      </div>
    </main>
  );
}
