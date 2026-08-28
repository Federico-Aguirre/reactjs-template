# Context for Claude Code

## Project Context

React 19 SPA template using Vite 8, TypeScript, Tailwind CSS v4, TanStack Query v5, Zustand, React Router v7, and Radix UI components.

## Commands

- Dev Server: `npm run dev`
- Typecheck & Build: `npm run build`
- Unit Tests: `npm run test`
- Linting: `npm run lint`
- Formatting: `npm run format`

## Architecture Rules

- Core UI components belong in `src/components/ui/` using `cn()` from `@/lib/utils`.
- Business modules must be organized under `src/features/[feature_name]/`.
- Absolute imports must always use `@/` alias.
- Handle API data with TanStack Query and local app state with Zustand.
