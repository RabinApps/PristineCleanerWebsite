# PristineCleaner Website

Marketing website for [PristineCleaner](https://github.com/RabinApps/PristineCleaner), built with Next.js (App Router) and deployed to Cloudflare using OpenNext.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- OpenNext for Cloudflare Workers

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
- `npm run build` - Build the app for production.
- `npm run start` - Start the production server (Node runtime).
- `npm run lint` - Run ESLint.
- `npm run preview` - Build with OpenNext and preview on the Cloudflare runtime locally.
- `npm run deploy` - Build and deploy to Cloudflare.
- `npm run upload` - Build and upload assets/bundle using OpenNext.
- `npm run cf-typegen` - Regenerate Cloudflare environment types in `cloudflare-env.d.ts`.

## Project Structure

- `src/app/page.tsx` - Homepage (hero, features, screenshots section).
- `src/app/downloads/page.tsx` - Downloads page; fetches latest GitHub release and maps assets by platform.
- `src/components/Navbar.tsx` - Site navigation and donation links.
- `src/components/DownloadCard.tsx` - Per-platform download UI card.
- `src/app/globals.css` - Global styles and design tokens.
- `public/` - Static assets (icons, images, screenshots).

## Release Download Data Source

The downloads page reads release data from:

- https://api.github.com/repos/RabinApps/PristineCleaner/releases/latest

Response data is revalidated every hour.

## Deployment Notes

This project is configured for Cloudflare deployment via OpenNext.

- Cloudflare config: `wrangler.jsonc`
- OpenNext config: `open-next.config.ts`

For platform-specific setup and environment details, see:

- https://opennext.js.org/cloudflare
