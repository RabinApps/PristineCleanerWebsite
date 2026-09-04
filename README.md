# PristineCleaner Website

The marketing site for [PristineCleaner](https://github.com/RabinApps/PristineCleaner), a free, open-source desktop cleaning utility for macOS, Windows, and Linux.

**Live site:** [pristinecleaner.app](https://pristinecleaner.app)

Built with Next.js (App Router) as a static export, translated into 8 languages via `next-intl`, and deployed to GitHub Pages.

## Tech Stack

- Next.js 16 — static export (`output: "export"`)
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — this redirects to `/en`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run Next.js in development mode |
| `npm run build` | Build the static site into `out/` |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/
    page.tsx                    Root page; redirects "/" to "/en"
    [locale]/
      layout.tsx                 Localized root layout, metadata, RTL handling
      page.tsx                   Homepage (hero, features, screenshots)
      downloads/page.tsx         Downloads page shell
  components/
    Navbar.tsx                   Site navigation and donation links
    Footer.tsx                   Footer
    DownloadCard.tsx              Per-platform download card
    ReleaseDownloads.tsx         Client-side fetch of the latest GitHub release
    ScreenshotsCarousel.tsx      Homepage screenshots carousel
    Markdown.tsx                 Renders release notes markdown
  i18n/
    routing.ts                   Supported locales and default locale
    request.ts                   Request-scoped locale/message loading
    navigation.ts                Locale-aware Link/router wrappers
messages/                        Locale message catalogs (en, es, it, fr, el, he, ja, zh)
public/                          Static assets (icons, screenshots) and CNAME
```

## Localization

Routes are locale-prefixed via `next-intl`.

- Default locale: `en`
- Supported locales: `en`, `es`, `it`, `fr`, `el`, `he`, `ja`, `zh`
- Example routes: `/en`, `/es`, `/ja/downloads`

To add or update a locale:

1. Update `src/i18n/routing.ts`.
2. Add or edit `messages/<locale>.json`, keeping the same key structure as `messages/en.json`.

## Downloads Page

`ReleaseDownloads` fetches the latest release client-side, in the visitor's browser, from:

```
https://api.github.com/repos/RabinApps/PristineCleaner/releases/latest
```

No API token is needed since the repo is public, and each visitor's request counts against their own IP's rate limit rather than the site's.

## Deployment

Pushing to `main` triggers `.github/workflows/pages-deploy.yml`, which builds the static export and publishes it to GitHub Pages. The custom domain is set via `public/CNAME`.

Repo Settings → Pages must have "Build and deployment → Source" set to **GitHub Actions**.
