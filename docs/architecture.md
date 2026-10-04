# Architecture: Core / Shared / Features

Angular 19+, standalone components, Signals. These rules are enforced by
ESLint (`npm run lint`); whatever ESLint cannot check is reviewed in PRs.

## Layers

| Folder             | Contents                                                                           | Examples in this repo                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `core/`            | Singleton infrastructure (loaded once): config, tokens, HTTP, layout, global state | `tokens/`, `services/api-client.service.ts`, `layout/`, `state/`, `models/`, `data/` (transitional mocks) |
| `shared/`          | Generic UI and utilities **with no business logic**                                | `pipes/`, `styles/_variables.css`                                                                         |
| `features/<name>/` | Domain: `pages/` (smart, routed), `components/` (dumb), `models/`, `data-access/`  | `home/`, `news/`, `articles/`, `categories/`                                                              |
| `environments/`    | `apiBaseUrl` per environment                                                       | `environment.ts` (dev), `environment.prod.ts` (prod)                                                      |

## Dependency directions (RULEs enforced by ESLint)

```
features ──imports──▶ core, shared
core ──────imports──▶ core, shared, environments (app.config.ts only)
shared ────imports──▶ shared (nothing else)
environments ───────▶ app.config.ts only
```

| #   | Rule                                                                                                               | ESLint                                         |
| --- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 1   | `shared/` never imports from `core/` or `features/`                                                                | `no-restricted-imports` in `src/app/shared/**` |
| 2   | `core/` never imports from `features/`                                                                             | `no-restricted-imports` in `src/app/core/**`   |
| 3   | `environment` is only imported in `app.config.ts`                                                                  | global `no-restricted-imports` with exception  |
| 4   | Cross-feature only via barrel (`features/<name>/index.ts`), never deep paths into another feature's `data-access/` | PR review                                      |
| 5   | Components are always standalone; templates and styles in separate files (`.html` / `.css`)                        | `@angular-eslint/prefer-standalone` + review   |

## HTTP and configuration

- No service imports `environment` or concatenates URLs (rule 3).
- `API_BASE_URL` (`core/tokens/api-url.token.ts`) is provided once in `app.config.ts` from `environment.apiBaseUrl`.
- Every relative request goes through `ApiClientService` (`core/services/api-client.service.ts`): it joins base + path (`v1/categories`) and leaves absolute URLs untouched.
- Only `GET` exists today. When POST/PUT/DELETE are needed, extend `ApiClientService` — not each feature.
- `fileReplacements` in `angular.json`: `environment.ts` → `environment.prod.ts` in production.

## State with Signals

- Global shell state (e.g. the categories menu) → `core/state/`:
  `services/<x>-api.service.ts` (pure HTTP, RxJS) + `store/<x>.store.ts` (signals).
- The store exposes **read-only** signals (`asReadonly()`); writes are private and only happen via methods (`load()`).
- Per-slice pattern: `categories` (data), `loading`, `error`. No invented fields such as `state: 'A'`: the model is whatever the API returns.
- `News.category` and mocks reuse the canonical model (`core/models/category.model.ts`); single source of truth.
- Never promote feature state to global "for consistency": only when two or more features coordinate it.

## Styles

- Tokens in `shared/styles/_variables.css`, imported once from `src/styles.css`.
- `src/styles.css` holds only: reset + base + `.container`. Each component owns its `.component.css` block (extracted from the original monolith).
- BEM classes (`block__element--modifier`): `.news-card__title`, `.top-fold-grid__column--left`.

## Routes (eager by current decision)

`app.routes.ts` maps `''`, `':category'`, `':category/:slug'` to feature pages.
Moving to lazy `*.routes.ts` per feature is a future evolution (requires careful reordering because of the params).
