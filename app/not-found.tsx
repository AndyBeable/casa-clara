import EmptyState from "@/components/EmptyState/EmptyState";
import Link from "next/link";

const explorePropertiesClassName =
  "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function NotFound() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <EmptyState
        title="Page not found"
        description="The page you're looking for couldn't be found. Please view our properties page."
        action={
          <Link href="/properties" className={explorePropertiesClassName}>
            Explore properties
          </Link>
        }
      />
    </main>
  );
}
