---
name: new-page
description: Scaffold a routed smart page with separate .ts/.html/.css and register it in app.routes.ts
---

# Create a page

Read `docs/naming-conventions.md` first. Example: `features/home/pages/home-page/`.

## Steps

1. Folder `src/app/features/<feature>/pages/<name>-page/` with:
   - `<name>-page.component.ts` — standalone, `selector: 'app-<name>-page'`,
     `templateUrl` + `styleUrl`, `inject()` (no constructor DI), route inputs with `input<string>()`.
   - `<name>-page.component.html` — full extracted template (no inline `` template: ` `` ``).
   - `<name>-page.component.css` — only its BEM classes; tokens via `var(--token)`.
2. The page injects stores (never `HttpClient` directly, never `environment`).
3. Register in `src/app/app.routes.ts` (`withComponentInputBinding` is already on for `:params`).
4. Dumb components from another feature (e.g. `app-news-card`) are imported via that feature's barrel.
5. Identifiers in English; Spanish only in user-visible text.
6. Verify: `npm run lint && npm run build`, and review visually with `npm start`.
