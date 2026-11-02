# FreshDay — Next.js / React / Tailwind CSS

Complete source for the five-page FreshDay home-delivery website, including the original blue branding, original milk packaging photo, premium concept packaging for the other six products, all images, and locally hosted Lato fonts.

## Start locally

Install **Node.js 20.9 or newer** (Node.js 22 or 24 recommended). Open a terminal inside this `website` folder:

```sh
npm ci
npm run dev
```

Open **http://localhost:3000**. This is a Next.js application; do not open the JSX files by double-clicking them.

## Production

```sh
npm run build
npm start
```

To create a static export for ordinary static hosting:

```sh
npm run build:static
```

Upload the contents of the generated `out` folder. The static export has trailing-slash routes; use a static server that serves directory index files. For deployment to Vercel or a Node.js host, use the normal `npm run build` flow instead. No API keys or environment variables are needed for this frontend.

## Pages

| Route       | Content                                                                     |
| ----------- | --------------------------------------------------------------------------- |
| `/`         | Home delivery, four-slide full-width hero, dairy range, gallery and enquiry |
| `/dairy`    | Seven products, filters, product details and routine preview                |
| `/our-way`  | Farm story, original milk packaging and brand information                   |
| `/goodness` | General dairy nutrition, recipe inspiration and delivery enquiry            |
| `/app`      | Coming-soon app preview: ordering, delivery tracking and subscriptions      |

## Included interactions

- React-controlled hero crossfades with matching text, pause/play and manual slide selection.
- Product filtering, details dialogs, saved selection, remove/clear controls and cross-tab synchronization.
- Six-digit PIN validation and a WhatsApp enquiry draft. **Coverage is confirmed by the team, not by an automated serviceability API.** Opening WhatsApp does not send a message automatically.
- App feature tabs, recipe tabs, routine planning preview and FAQ accordions.
- Responsive mobile navigation; phone, tablet and desktop layouts.
- Scroll reveals, image movement, hover effects, fixed-background storytelling, page reading progress and reduced-motion support.

## Project structure

```text
app/                 Next.js App Router pages and global Tailwind/CSS styles
components/          Reusable React interactive components
components/pages/    Server-rendered page sections and per-page hero slides
public/assets/       All local images, original brand artwork and fonts
lib/                 PIN validation, enquiry link and stored-selection helpers
data/products.json   Names, prices, units, descriptions and image paths
tests/               Node test-runner validation
scripts/             Cross-platform static-build helper
```

## Edit the site

- **Products and prices:** `data/products.json`.
- **Hero images and messages:** `slides` in `components/pages/*Content.jsx`.
- **Contact number for WhatsApp:** `lib/delivery.mjs`. Phone links and farm details also appear in `Header`, `Footer` and `DeliveryEnquiry`; update them together when branding changes.
- **Colours, typography and motion:** `app/globals.css`. Tailwind v4 is configured through `@theme` and `@tailwindcss/postcss`; no Tailwind v3 config is required.
- **Page text and photography:** the corresponding page component and `public/assets`.

Tailwind utilities are compiled locally. The approved brand layout is retained in CSS, with native CSS scroll animations and React-controlled interactions. Tailwind preflight is intentionally omitted to preserve the approved design.

## Product rates supplied by the brand

A2 Milk ₹110/L; Paneer ₹450/kg; Chhach ₹50/L; Dahi ₹350/L; White Butter ₹1,550/kg; Desi Ghee ₹2,850/kg; Khoya ₹650/kg. These are rates per listed unit, not guaranteed pack sizes.

## Scope and launch status

This is a complete frontend source package. Live checkout, payments, customer accounts, order storage, real delivery tracking and live subscriptions are **not connected**. The app UI and non-milk packaging are design concepts; the app remains marked **Coming Soon**. Selection is stored only in the current browser. Delivery enquiries use the supplied farm contact number. Confirm delivery zones, actual product labels, final pack sizes and policies before enabling real orders.

Brand identity and the original milk photograph were supplied by the client. Other lifestyle and packaging images are AI-created concepts. Lato font files are included with their SIL Open Font License in `public/assets/fonts/OFL.txt`.

## Validation

```sh
npm run check
npm run build
```

The tests cover PIN validation, enquiry encoding, malformed saved data, and the supplied catalogue rates. Generated caches, dependencies and build output are intentionally excluded from the ZIP; `npm ci` reproduces the locked dependencies.
