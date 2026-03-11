# Kopano Intelligence

Production-ready Next.js website and strategy folder for a Johannesburg-based solo analytics consultancy positioned around operational intelligence, KPI clarity, and business-facing reporting.

## Brand

Implemented brand: `Kopano Intelligence`

Supporting line: `Operational Intelligence for Growing Organisations`

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/`: App Router pages and global styling
- `components/`: Shared UI components
- `lib/site-content.ts`: Central content model used across pages
- `strategy/`: Business plan, white paper, service packages, outreach plan, content plan, and brand positioning
- `public/`: Static assets

## Notes

- The contact form is wired as a client-side demo interaction for local use. For production, connect it to a route handler, email provider, or form backend.
- The copy is intentionally business-facing and consulting-oriented rather than portfolio-style or startup-style.
