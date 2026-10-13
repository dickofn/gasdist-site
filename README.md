# GasDist site

Landing page and user guide for GasDist, published at <https://dickofn.github.io/gasdist-site/>.
Indonesian at `/`, English at `/en/`. Built with Astro and Starlight.

| Task | Command |
|---|---|
| Install | `pnpm install` |
| Local preview while editing | `pnpm dev` |
| Check and build (what the deploy runs) | `pnpm build` |
| Serve the built site | `pnpm preview` |

Pushing to `main` deploys through `.github/workflows/deploy.yml`.

## Where things live

| Path | What |
|---|---|
| `src/components/Landing.astro` | The landing page, both languages (`src/pages/index.astro`, `src/pages/en/index.astro`) |
| `src/content/docs/panduan/` | Guide pages in Indonesian; `src/content/docs/en/panduan/` mirrors them in English |
| `src/components/Shot.astro` | A screenshot in the page's language with numbered markers |
| `src/components/Roles.astro` | "Who can do this" role badges |
| `src/assets/shots/{id,en}/*.png` + `manifest.json` | Screenshots and marker boxes |

## Screenshots

The screenshots are generated, never edited by hand. They come from `pnpm docs:shots` in the
app repo, which drives a real build of GasDist on fictional data and writes straight into
`src/assets/shots/`. Markers are boxes recorded during capture, so the site draws them in
the right place in both languages.

In a page: `<Shot name="sj-form-filled" alt="..." />` shows markers 1..n,
`marks={[1, null, 2]}` relabels or hides some, `marks={false}` hides them all.
