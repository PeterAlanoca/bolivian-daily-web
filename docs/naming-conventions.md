# Naming conventions

Prettier (`npm run format`) fixes formatting; this fixes **names**.

## Language: identifiers ALWAYS in English

Variables, methods, classes, interfaces, files and selectors are named in
**English** (`loadCategories()`, `heroImageUrl`, `-relatedNews`). Spanish is
reserved for **user-visible text and data values** (templates, API data such as
`"NACIONAL"`). Never translate the domain when coding: `category`, not `categoria`.

## Files and folders

| What                 | Convention                                                               | Example                                          |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------ |
| Feature              | kebab-case, domain noun                                                  | `features/categories/`, `features/articles/`     |
| Page (smart, routed) | `<name>-page/` + `<name>-page.component.ts`                              | `home-page/home-page.component.{ts,html,css}`    |
| Dumb component       | kebab-case + `*.component.*`                                             | `news-card/news-card.component.ts`               |
| Store                | `<domain>.store.ts`, class `<Domain>Store`                               | `store/category.store.ts` → `CategoryStore`      |
| API service          | `<domain>-api.service.ts`, class `<Domain>ApiService`                    | `category-api.service.ts` → `CategoryApiService` |
| DTO (API contract)   | `<domain>.dto.ts`, interface `<Domain>ApiDto`                            | `dtos/category.dto.ts` → `CategoryApiDto`        |
| Mapper               | `<domain>.mapper.ts`, functions `map<X>DtoToModel` / `map<X>ListToModel` | `mappers/category.mapper.ts`                     |
| Domain model         | `<domain>.model.ts`, `PascalCase` interface = what the UI uses           | `models/category.model.ts` → `Category`          |
| DI token             | `<name>.token.ts`, `UPPER_SNAKE` const                                   | `tokens/api-url.token.ts` → `API_BASE_URL`       |
| Pipe                 | `<name>.pipe.ts`, `name: 'camelCase'`                                    | `time-ago.pipe.ts` → `'timeAgo'`                 |
| Barrel               | `index.ts` per feature, re-exports its public API                        | `features/categories/index.ts`                   |

Each component lives in its own folder with its 3 files (`.ts` with `templateUrl`/`styleUrl`).

## Code

- Selectors: `app-<kebab>` for pages (`app-home-page`), `app-<kebab>` for dumb components (`app-news-card`, `app-sidebar`).
- Signal inputs: `news = input.required<News>()`; optionals with defaults.
- Stores: private `_x` signals + public `x = this._x.asReadonly()`; `load()` methods, never `.set()` from components.
- Route params in lowercase: `:category`, `:slug`.
- Alias imports, never deep relative paths:
  `@core/state/store/category.store`, `@features/news`, `@shared/pipes/time-ago.pipe`, `@environments/environment`.
- CSS: BEM. Always use `var(--token)` from `_variables.css`, no hardcoded hex in components.

## API and backend

- Resource as `resource = 'v1/categories'` (no leading `/`, no host).
- Model = exact JSON shape (`{ id, name, slug }`); inventing fields for "compatibility" is forbidden.
- `CategoryApiDto` (what arrives) vs `Category` (what the UI uses); conversion lives only in the mapper.
