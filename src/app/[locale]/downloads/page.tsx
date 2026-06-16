import { getTranslations, setRequestLocale } from "next-intl/server";
import DownloadCard from "@/components/DownloadCard";
import Markdown from "@/components/Markdown";

export const revalidate = 3600;

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
}

type Props = {
  params: Promise<{ locale: string }>;
};

async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/RabinApps/PristineCleaner/releases/latest",
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_PAT}`,
          "User-Agent": "Pristine-Cleaner-Website",
        },
      },
    );
    if (!res.ok) return null;
    return (await res.json()) as GitHubRelease;
  } catch {
    return null;
  }
}

function findAsset(
  assets: GitHubAsset[],
  ...extensions: string[]
): GitHubAsset | null {
  for (const ext of extensions) {
    const found = assets.find((asset) =>
      asset.name.toLowerCase().endsWith(ext),
    );
    if (found) return found;
  }
  return null;
}

function formatDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default async function DownloadsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "DownloadsPage" });

  const release = await getLatestRelease();
  const releaseNotes = release?.body?.trim() ?? "";

  const macAsset = release ? findAsset(release.assets, ".dmg") : null;
  const winAsset = release ? findAsset(release.assets, ".exe", ".msix") : null;
  const linuxAsset = release ? findAsset(release.assets, ".deb", ".rpm") : null;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col px-6 py-16">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
        {release ? (
          <div className="flex flex-col items-center gap-1">
            <p className="text-muted">
              {t("latestReleaseLabel")}{" "}
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:underline"
              >
                {release.tag_name}
              </a>
            </p>
            <p className="text-sm text-muted">
              {t("publishedOn", {
                date: formatDate(release.published_at, locale),
              })}
            </p>
          </div>
        ) : (
          <p className="text-muted">{t("fallbackSubtitle")}</p>
        )}
      </div>

      {release ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <DownloadCard
              platform="macOS"
              assetName={macAsset?.name ?? null}
              downloadUrl={macAsset?.browser_download_url ?? null}
              fileSizeBytes={macAsset?.size ?? null}
            />
            <DownloadCard
              platform="Windows"
              assetName={winAsset?.name ?? null}
              downloadUrl={winAsset?.browser_download_url ?? null}
              fileSizeBytes={winAsset?.size ?? null}
            />
            <DownloadCard
              platform="Linux"
              assetName={linuxAsset?.name ?? null}
              downloadUrl={linuxAsset?.browser_download_url ?? null}
              fileSizeBytes={linuxAsset?.size ?? null}
            />
          </div>

          {releaseNotes.length > 0 && (
            <section className="mt-12 rounded-xl border border-border bg-surface p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Release notes
              </h2>
              <Markdown>{releaseNotes}</Markdown>
            </section>
          )}

          {release.assets.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {t("allAssetsTitle")}
              </h2>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      <th className="px-4 py-3 text-left font-medium text-muted">
                        {t("table.file")}
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-muted">
                        {t("table.size")}
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-muted">
                        {t("table.download")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {release.assets.map((asset) => (
                      <tr
                        key={asset.name}
                        className="border-b border-border last:border-0 bg-background hover:bg-surface transition-colors"
                      >
                        <td className="px-4 py-3 font-mono text-xs text-foreground">
                          {asset.name}
                        </td>
                        <td className="px-4 py-3 text-right text-muted">
                          {(asset.size / (1024 * 1024)).toFixed(1)} MB
                        </td>
                        <td className="px-4 py-3 text-right">
                          <a
                            href={asset.browser_download_url}
                            className="text-accent hover:underline"
                          >
                            {t("table.download")}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-border bg-surface">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-foreground">
              {t("emptyState.title")}
            </h2>
            <p className="max-w-md text-muted">{t("emptyState.description")}</p>
          </div>
          <a
            href="https://github.com/RabinApps/PristineCleaner/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            {t("emptyState.button")}
          </a>
        </div>
      )}
    </div>
  );
}
