import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "it", "fr", "el", "he", "ja", "zh"],
  defaultLocale: "en",
});
