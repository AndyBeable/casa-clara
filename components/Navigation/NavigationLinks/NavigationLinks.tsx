"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkClassName =
  "rounded-sm text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function NavigationLinks() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isPropertiesActive =
    pathname === "/properties" || pathname.startsWith("/properties/");

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-6">
      <Link
        href="/"
        className={`${navLinkClassName} ${
          isHomeActive ? "text-accent" : "text-foreground hover:text-accent"
        }`}
        aria-current={isHomeActive ? "page" : undefined}
      >
        Home
      </Link>
      <Link
        href="/properties"
        className={`${navLinkClassName} ${
          isPropertiesActive
            ? "text-accent"
            : "text-foreground hover:text-accent"
        }`}
      >
        Properties
      </Link>
    </nav>
  );
}
