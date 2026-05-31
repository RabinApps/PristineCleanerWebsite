"use client";

import { useTranslations } from "next-intl";

interface DownloadCardProps {
  platform: "macOS" | "Windows" | "Linux";
  assetName: string | null;
  downloadUrl: string | null;
  fileSizeBytes: number | null;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const platformIcons: Record<DownloadCardProps["platform"], React.ReactNode> = {
  macOS: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  Windows: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V5l-9 1.68V12h9zm0 1H12v5.32L21 20V13zm-18 0v5.25l6 1.32V13H2z" />
    </svg>
  ),
  Linux: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  ),
};

export default function DownloadCard({
  platform,
  assetName,
  downloadUrl,
  fileSizeBytes,
}: DownloadCardProps) {
  const t = useTranslations("DownloadCard");
  const available = downloadUrl !== null && assetName !== null;
  const platformDescriptions: Record<DownloadCardProps["platform"], string> = {
    macOS: t("platformDescriptions.macos"),
    Windows: t("platformDescriptions.windows"),
    Linux: t("platformDescriptions.linux"),
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
      <div className="flex items-start gap-4">
        <div className="text-accent">{platformIcons[platform]}</div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-foreground">{platform}</h3>
          <p className="text-sm text-muted">{platformDescriptions[platform]}</p>
        </div>
      </div>

      {available ? (
        <>
          <div className="flex flex-col gap-1 rounded-lg bg-background px-4 py-3">
            <span className="truncate font-mono text-xs text-muted">
              {assetName}
            </span>
            {fileSizeBytes !== null && (
              <span className="text-xs text-muted">
                {formatBytes(fileSizeBytes)}
              </span>
            )}
          </div>
          <a
            href={downloadUrl}
            className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t("downloadFor", { platform })}
          </a>
        </>
      ) : (
        <div className="flex items-center justify-center rounded-lg border border-dashed border-border py-4 text-sm text-muted">
          {t("notAvailable")}
        </div>
      )}
    </div>
  );
}
