# IntegraMind AI Landing Page

A modern, responsive marketing site for IntegraMind AI. Built with Next.js App
Router, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Features

- Single-page layout with anchored sections and smooth scroll navigation.
- Responsive header with mobile menu and active section highlighting.
- Data-driven services, products, process, and case studies sections.
- Dynamic case study pages generated from a shared data source.
- Custom theme tokens and reusable UI primitives.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React icons

## Quick start

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the production bundle.
- `npm run start` - Run the production server.
- `npm run lint` - Run ESLint.

## Project structure

```
app/
  case-studies/[slug]/page.tsx   Dynamic case study pages
  globals.css                    Global styles and theme tokens
  layout.tsx                     Root layout with navigation and footer
  page.tsx                       Main landing page
components/
  ui/                            shadcn/ui primitives
  about.tsx
  case-studies.tsx
  contact.tsx
  footer.tsx
  hero.tsx
  navigation.tsx
  process.tsx
  products.tsx
  services.tsx
lib/
  case-studies.ts                Case study data source
  utils.ts                       Utility helpers (cn)
public/
  *.jpg, *.jpeg, *.jfif          Static images
```

## Content and data sources

- Navigation links are defined in `components/navigation.tsx` and map to
  section `id` values (`services`, `products`, `about`, `process`,
  `case-studies`, `contact`).
- Section content is stored as local arrays in:
  - `components/services.tsx`
  - `components/products.tsx`
  - `components/process.tsx`
- Case studies live in `lib/case-studies.ts` and are used by:
  - `components/case-studies.tsx` (listing cards)
  - `app/case-studies/[slug]/page.tsx` (detail pages via
    `generateStaticParams`)
- The contact form currently logs to the console. Wire it to a backend by
  updating `handleSubmit` in `components/contact.tsx`.

## Styling and UI

- Theme tokens are defined in `app/globals.css` using CSS variables.
- Tailwind is configured through `postcss.config.mjs`.
- shadcn/ui config lives in `components.json`.
- Shared utilities like `cn` are in `lib/utils.ts`.

## Adding a case study

1. Add a new object to the array in `lib/case-studies.ts`.
2. Make sure the `slug` is unique.
3. The list and detail pages will update automatically.

## Deployment

Use the standard Next.js flow:

1. `npm run build`
2. `npm run start`

## License

Private and proprietary.
