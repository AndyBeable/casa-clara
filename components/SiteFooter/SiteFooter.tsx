import Link from "next/link";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";

  cacheLife("max");

  return new Date().getFullYear();
}

const navLinkClassName =
  "rounded-sm text-xs font-medium tracking-[0.14em] text-background/70 uppercase transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default async function SiteFooter() {
  const copyrightYear = await getCurrentYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="max-w-md">
            <Link
              href="/"
              className="rounded-sm font-display text-3xl font-medium text-background transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Casa Clara
            </Link>

            <p className="mt-3 text-sm leading-6 text-background/70">
              Distinctive homes across Barcelona and the Mediterranean coast.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Link href="/properties" className={navLinkClassName}>
              Properties
            </Link>

            <Link href="/saved" className={navLinkClassName}>
              Saved
            </Link>
          </nav>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6">
          <p className="text-xs text-background/60">
            © {copyrightYear} Casa Clara
          </p>
        </div>
      </div>
    </footer>
  );
}
