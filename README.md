# Brendan Deevy Signs — Website

A premium, Awwwards-grade marketing site for **Brendan Deevy Signs** — signage,
vehicle graphics and branding, based in Portlaoise, Co. Laois, Ireland.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide**.
Fully static, SEO-optimised, responsive, and animated.

## Signature interactions

- **Inertia smooth scrolling** (Lenis) with smooth in-page anchor navigation.
- **Custom cursor** — a dot + lagging ring that grows over interactive elements
  and shows a contextual label (e.g. "View" over project cards). Desktop fine
  pointers only.
- **Cinematic film grain** overlay for a premium, textured finish.
- **Animated project filtering** — category tabs with a sliding pill and
  layout-animated masonry grid.
- **Magnetic CTAs**, scroll-reveal stagger, parallax hero, animated counters and
  a scroll-progress bar.
- **`prefers-reduced-motion` aware** — smooth scroll and the custom cursor are
  disabled automatically for users who request reduced motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm start        # serve the production build
```

## Design system

The entire palette and geometry are extracted from the faceted **"dv"** logo:

| Token        | Value     | Use                          |
| ------------ | --------- | ---------------------------- |
| `crimson`    | `#C2182B` | Primary brand colour         |
| `charcoal`   | `#121212` | Dark sections / text         |
| `warmgrey`   | `#EAEAEA` | Soft section backgrounds     |
| white        | `#FFFFFF` | Base background              |

- **Type:** Poppins (400–900), massive bold display headings.
- **Geometry:** angular `clip-path` facets, diagonal shapes, crimson gradients,
  glassmorphism panels (see `app/globals.css`).
- **Logo:** recreated as a crisp, theme-aware SVG in `components/ui/Logo.tsx`
  (works on light and dark backgrounds). The original raster lives at
  `public/logo.jpg` and is used for favicon / Open Graph.

## Structure

```
app/
  layout.tsx        Fonts, metadata, Open Graph, LocalBusiness JSON-LD schema
  page.tsx          Section composition
  globals.css       Design system (glass, facets, gradients, utilities)
  robots.ts         /robots.txt
  sitemap.ts        /sitemap.xml
components/
  sections/         Navbar, Hero, Marquee, Services, Projects, Stats,
                    Process, Testimonials, Contact, Footer
  ui/               Logo, MagneticButton, Reveal, Counter, SectionHeading,
                    ScrollProgress
lib/
  data.ts           All site content (services, projects, testimonials, …)
  utils.ts          cn() class helper
```

## Content status

**Real / confirmed:**

- **Logo** — `public/logo.jpg`, shown via `components/ui/Logo.tsx`.
- **Contact** — phone **086 860 0265** (`tel:` + WhatsApp `wa.me/353868600265`)
  and email **dvsigns1@gmail.com**, in `CONTACT` (`lib/data.ts`) and the JSON-LD
  schema in `app/layout.tsx`.
- **WhatsApp** — floating button (`components/ui/WhatsAppButton.tsx`), a
  Contact-section CTA, and a footer link, all pre-filling a quote message.
- **Projects** — real client photography in `public/wraps/` and `public/signs/`
  (DPD, Tadhg Óg's, Fort Financial, SDES, JW Roofing, Plan B, Laois Heating,
  SpeedFlex), defined in `PROJECTS` (`lib/data.ts`).

**⚠️ Still to finalise before launch** (edit `lib/data.ts`):

- **Testimonials** — `TESTIMONIALS` are sample reviews. Replace with genuine
  client quotes.
- **Stats** — 20+ years / 1000+ projects / 32 counties: confirm the figures.
- **Domain** — `SITE_URL` is `https://www.deevysigns.com` in `app/layout.tsx`,
  `app/robots.ts` and `app/sitemap.ts`. Update if different.
- **Contact form** — the form shows a success state but is front-end only.
  Wire `handleSubmit` in `components/sections/Contact.tsx` to a real endpoint
  (e.g. a Next.js Route Handler + Resend, or Formspree). Note WhatsApp/phone/
  email already give visitors working ways to make contact.

## SEO

- Per-page metadata + Open Graph + Twitter cards (`app/layout.tsx`).
- `LocalBusiness` JSON-LD structured data (address, hours, services, area served).
- `robots.txt` and `sitemap.xml` generated automatically.
- Targeted keywords: Signs Portlaoise, Vehicle Graphics Laois, Shop Front Signs
  Ireland, Van Wrapping Ireland, Commercial Signage Ireland, Vehicle Branding Ireland.
