# AGENTS.md — Bolivian Daily Web

Angular 19 + standalone + Signals. Read `docs/architecture.md` (rules) and
`docs/naming-conventions.md` (names) before touching `src/`.

## Commands

| Action    | Command                                                              |
| --------- | -------------------------------------------------------------------- |
| Dev       | `npm start` → `http://localhost:4200/`                               |
| Build     | `npm run build`                                                      |
| Lint      | `npm run lint` (fails if core/shared/features boundaries are broken) |
| Format    | `npm run format:check` / `npm run format`                            |
| Local API | `GET http://localhost:3000/v1/categories`                            |

## Quick rules

1. Never import `environment` outside `app.config.ts`; relative HTTP only via `ApiClientService`.
2. `shared/` holds no business logic; global state only in `core/state/`; everything else stays in its feature.
3. Standalone components with separate `.html`/`.css`; readonly signals in stores (`asReadonly()`).
4. Alias imports (`@core/`, `@features/`, `@shared/`), cross-feature only via barrel.
5. Model = real API JSON; map in `*.mapper.ts`, never invent fields.
6. Identifiers (variables, methods, classes, files) ALWAYS in English; Spanish only in user-visible text and data values.
7. NEVER use mock data as fallback when the API fails — render loading/error states instead.
8. Reusable skills in `.opencode/skills/` (see each `SKILL.md`).
