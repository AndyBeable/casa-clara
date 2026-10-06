import Image from "next/image";
import Link from "next/link";

const heroLinkClass =
  "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function HomeHero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <Image
        src="/images/home-hero.avif"
        alt="Mediterranean villa overlooking the Costa Brava coastline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/35 via-45% to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl mb-6">
            <span className="block">Find your</span>
            <span className="block">place in</span>
            <span className="block">the sun.</span>
          </h1>
          <p className="mb-6 max-w-sm text-base leading-relaxed text-foreground">
            Exceptional homes across Barcelona and the Mediterranean coast.
          </p>
          <Link href="/properties" className={heroLinkClass}>
            View properties
          </Link>
        </div>
      </div>
    </section>
  );
}
