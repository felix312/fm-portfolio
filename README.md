# Felix Mwenda — Portfolio

Next.js 16 + Tailwind v4 + Framer Motion rebuild of the e-portfolio, configured
for static export so it can be hosted on GitHub Pages now and pointed at
Cloudflare later.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build a static export

```bash
npm run build
```

Output goes to `out/` — this is a fully static site (no Node server needed).

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `fm-portfolio`).
2. In the repo, go to **Settings -> Pages -> Build and deployment -> Source**,
   select **GitHub Actions**.
3. The included workflow at `.github/workflows/deploy.yml` builds and deploys
   automatically on every push to `main`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   (GitHub Pages URLs are always `.github.io`, not `.github.com`).

## Point Cloudflare at it later

Once you're ready to move off the `.github.io` URL:
- **Cloudflare Pages** (recommended, replaces GitHub Pages entirely): connect
  this same GitHub repo to Cloudflare Pages, build command `npm run build`,
  output directory `out`.
- **Keep GitHub Pages, add a Cloudflare domain in front**: add a `CNAME` file
  in `public/` with your custom domain, set it in repo Settings -> Pages, then
  point your domain's DNS through Cloudflare per GitHub's custom-domain docs.

## Project notes

- All brand colors live as CSS variables in `src/app/globals.css` -- update
  once there to change the whole site.
- Content (case studies, skills, education, contact info) lives in
  `src/data/portfolio.ts` -- edit that file to update copy without touching
  any component.
- Cybersecurity-themed parallax backgrounds are pure SVG/CSS
  (`src/components/ParallaxCyber.tsx`) -- no raster images, so they stay fast.
- Fonts (Space Grotesk / Inter / JetBrains Mono) load via `<link>` tags in
  `src/app/layout.tsx` from Google Fonts at runtime.
