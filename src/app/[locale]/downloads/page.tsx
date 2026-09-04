import { getTranslations, setRequestLocale } from "next-intl/server";
import ReleaseDownloads from "@/components/ReleaseDownloads";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DownloadsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "DownloadsPage" });

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col px-6 py-16">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
      </div>
      <ReleaseDownloads />
    </div>
  );
}
