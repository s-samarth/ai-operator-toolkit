# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start Vite dev server on port 8080
bun build        # Production build
bun lint         # ESLint
bun test         # Run Vitest once
bun test:watch   # Vitest in watch mode
npx tsc --noEmit # Typecheck (not in package.json — run manually)
```

## Architecture

**"The Operator's Guide to AI Tools"** — a militaristic-themed React SPA comparing AI coding tools (Claude Code, Google AI Pro, ChatGPT) using a field manual metaphor.

**Stack:** React 18 + TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix UI), Framer Motion, React Router v6, TanStack Query.

**Entry flow:** `main.tsx` → `App.tsx` (QueryClient + routing) → `pages/Index.tsx` → section components.

**Component structure:**
- `src/components/ui/` — shadcn/ui primitives (don't modify unless extending the design system)
- `src/components/*.tsx` — page sections: Hero, Armory, OperatorTiers, ThreeLayers, MissionLoadouts, Doctrine, CarryWeight, FieldOps, EssentialGear, Closing, Footer
- `src/hooks/` — custom hooks (use-mobile, use-toast)
- `src/lib/utils.ts` — `cn()` helper (Tailwind + clsx merging)

**Design system** (defined in `tailwind.config.ts` + `index.css`):
- Background: `#0B0E14` (night-ops dark)
- Primary accent: Copper `#C4835B`
- Tool accents: Claude Blue, Google Green, ChatGPT Amber
- Fonts: Barlow Condensed (headings), Inter (body), JetBrains Mono (code)
- Custom animations: `fade-up`, `float`, `pulse-glow`, `scan`

**TypeScript is intentionally loose** (`strict: false`, `noImplicitAny: false`) — match existing convention.

**Path alias:** `@/` resolves to `src/`.

**Package manager:** bun (use `bun add` for new packages, not npm install).
