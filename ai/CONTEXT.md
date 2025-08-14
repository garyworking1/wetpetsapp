# Repo Context

**Stack**
- Next.js 15.4.6 (App Router)
- React 19.1.0
- TypeScript ^5
- Tailwind CSS ^4
- Deployed on Vercel
- Analytics: Plausible (domain: wetpets.app)

**Key folders**
- `src/app/layout.tsx` — global header (logo, nav, + Add a Spot)
- `src/app/page.tsx` — homepage (hero + featured spots)
- `src/app/spots/data.ts` — SINGLE source of truth for spots
- `src/app/spots/[slug]/page.tsx` — spot detail pages
- `src/app/add-spot/page.tsx` — embedded Google Form (or fallback)
- `public/` — images & logo

**Data contract**
```ts
export type Spot = {
  slug: string;         // stable id used in URLs
  name: string;         // display name
  city: string;         // "Austin, TX"
  image: string;        // /photos/... under /public
  alt: string;          // meaningful alt text
  caption: string;      // short, safety-aware blurb
  mapUrl: string;       // Google Maps directions link
};
export const spots: Spot[] = [...]; // named export

Current routes

    / (home)

    /spots (list, currently redirects/anchors from home)

    /spots/[slug] (detail pages for each entry in spots)

    /add-spot (embed Google Form)

Images currently in use

    Hero: /photos/ladybird-misty-solo.jpg (cropped/cleaned Misty)

    Brushy Creek (Hutto): /photos/brushycreek-gracy-misty.jpg

    Chisholm Trail (Round Rock): /photos/chisholmtrail-gracy-misty.jpg (water around the Round Rock)

    Lady Bird Lake card: /photos/ladybird-murphy-misty.jpg

    Bull Creek: /photos/cc/bullcreek-commons.jpg (CC BY)

    Walnut Creek: /photos/cc/walnutcreek-commons.jpg (CC BY)

    Logo: /logo.jpg

Important gotchas / guardrails

    Use next/link for internal nav (ESLint will fail on <a href="/">).

    Use next/image for images (ESLint warns on <img>).

    Homepage MUST import spots from ./spots/data (no duplicate arrays).

    Dynamic page signature for Next 15:

    export default function Page({ params }: { params: { slug: string } }) { ... }
    export function generateStaticParams() { return spots.map(s => ({ slug: s.slug })); }

    Tailwind v4: object-position utilities can be bracketed, e.g. object-[70%_45%].

Analytics: Plausible

    Script already in layout.tsx with domain wetpets.app.

    Outbound link & 404 tracking enabled.
