"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs leading-relaxed">
            <a
              href="https://pristinecleaner.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-foreground hover:underline"
            >
              {t("brand")}
            </a>
            <span>{t("copyrightBy", { year: new Date().getFullYear() })}</span>
            <a
              href="https://www.rabinapps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-foreground hover:underline"
            >
              {t("company")}
            </a>
            <span>{t("licensedUnder")}</span>
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-foreground hover:underline"
            >
              {t("license")}
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
              alt={t("creativeCommonsAlt")}
              style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
              alt={t("attributionAlt")}
              style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
              alt={t("nonCommercialAlt")}
              style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
            />
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/RabinApps/PristineCleaner"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {t("links.github")}
            </a>
            <Link
              href="/downloads"
              className="transition-colors hover:text-foreground"
            >
              {t("links.downloads")}
            </Link>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=YEJ37WF4Q3HPC"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {t("links.paypal")}
            </a>
            <a
              href="https://buymeacoffee.com/rabinapps"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {t("links.coffee")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
