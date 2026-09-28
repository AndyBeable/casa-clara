import Link from "next/link";
import NavigationLinks from "@/components/Navigation/NavigationLinks/NavigationLinks";

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Casa Clara
        </Link>
        <NavigationLinks />
      </div>
    </header>
  );
}
