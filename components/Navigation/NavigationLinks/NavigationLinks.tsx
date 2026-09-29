"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkClassName =
  "inline-flex h-11 items-center rounded-sm border-b-2 text-xs font-medium tracking-[0.14em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function NavigationLinks() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isPropertiesActive =
    pathname === "/properties" || pathname.startsWith("/properties/");
  const isSavedActive = pathname === "/saved" || pathname.startsWith("/saved/");

  return (
    <nav
      aria-label="Primary navigation"
      className="flex items-center gap-4 sm:gap-6"
    >
      <Link
        href="/"
        className={`${navLinkClassName} ${
          isHomeActive
            ? "border-accent text-accent"
            : "border-transparent text-foreground hover:text-accent"
        }`}
        aria-current={isHomeActive ? "page" : undefined}
      >
        Home
      </Link>
      <Link
        href="/properties"
        className={`${navLinkClassName} ${
          isPropertiesActive
            ? "border-accent text-accent"
            : "border-transparent text-foreground hover:text-accent"
        }`}
        aria-current={isPropertiesActive ? "page" : undefined}
      >
        Properties
      </Link>
      <Link
        href="/saved"
        className={`${navLinkClassName} ${
          isSavedActive
            ? "border-accent text-accent"
            : "border-transparent text-foreground hover:text-accent"
        }`}
        aria-current={isSavedActive ? "page" : undefined}
      >
        Saved
      </Link>
    </nav>
  );
}
