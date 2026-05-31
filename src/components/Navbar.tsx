"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon.png"
            alt="PristineCleaner"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-lg">PristineCleaner</span>
        </Link>

        {/* Donate buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/downloads"
            className={`rounded-md px-3 py-1.5 transition-colors ${
              pathname === "/downloads"
                ? "bg-[var(--surface-elevated)] text-[var(--foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            Downloads
          </Link>
        </div>
      </nav>
    </header>
  );
}
