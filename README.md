# PristineCleaner Website

Marketing website for [PristineCleaner](https://github.com/RabinApps/PristineCleaner), built with Next.js (App Router) as a static export and deployed to GitHub Pages.

## Tech Stack

- Next.js 16 (static export, `output: "export"`)
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - Run Next.js in development mode.
- `npm run build` - Build the static site into `out/`.
- `npm run lint` - Run ESLint.

## Project Structure

- `messages/` - Locale message catalogs.
- `src/app/page.tsx` - Root page; redirects `/` to `/en`.
- `src/app/[locale]/layout.tsx` - Localized root layout with `NextIntlClientProvider`, metadata, and RTL handling for Hebrew.
- `src/app/[locale]/page.tsx` - Localized homepage (hero, features, screenshots section).
- `src/app/[locale]/downloads/page.tsx` - Localized downloads page shell; renders `ReleaseDownloads`.
- `src/i18n/routing.ts` - Supported locales and default locale.
- `src/i18n/request.ts` - Request-scoped locale and message loading for `next-intl`.
- `src/i18n/navigation.ts` - Locale-aware navigation wrappers.
- `src/components/Navbar.tsx` - Site navigation and donation links.
- `src/components/DownloadCard.tsx` - Per-platform download UI card.
- `src/components/ReleaseDownloads.tsx` - Client-side fetch of the latest GitHub release and asset mapping by platform.
- `src/app/globals.css` - Global styles and design tokens.
- `public/` - Static assets (icons, images, screenshots) and the `CNAME` file for the custom domain.

## Localization

This project uses `next-intl` with locale-prefixed routes.

- Default locale: `en`
- Supported locales: `en`, `es`, `it`, `fr`, `el`, `he`, `ja`, `zh`
- Example routes: `/en`, `/es`, `/ja/downloads`

### Adding or updating locales

1. Update locales in `src/i18n/routing.ts`.
2. Add a matching message file in `messages/<locale>.json`.
3. Ensure all locale files share the same key structure as `messages/en.json`.

## Release Download Data Source

The downloads page fetches release data client-side (in the browser) from:

- https://api.github.com/repos/RabinApps/PristineCleaner/releases/latest

No token is required since the repo is public; each visitor's browser makes its own request.

## Deployment

This project builds as a static export and deploys to GitHub Pages via `.github/workflows/pages-deploy.yml` on every push to `main`. The custom domain (`pristinecleaner.app`) is set via `public/CNAME`.

Repo Settings → Pages must have "Build and deployment → Source" set to **GitHub Actions**.
