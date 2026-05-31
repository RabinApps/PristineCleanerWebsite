"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon.png"
            alt={t("logoAlt")}
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-lg">{t("brand")}</span>
        </Link>

        {/* Donate buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/downloads"
            className={`rounded-md px-3 py-1.5 transition-colors ${
              pathname === "/downloads"
                ? "bg-surface-elevated text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t("downloads")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
