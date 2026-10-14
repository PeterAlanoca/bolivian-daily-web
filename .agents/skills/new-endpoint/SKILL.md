---
name: new-endpoint
description: >-
  Guides connecting and wiring a new backend REST endpoint in the BolivianDaily Angular web frontend
  (DTO -> Mapper -> ApiService -> Store). Use when consuming a new API endpoint in bolivian-daily-web.
---

# Consume a new endpoint

The API returns bare JSON (no envelope). Real example: `GET http://localhost:3000/v1/categories`
→ `[{ id, name, slug }]` (see `src/app/core/state/`).

## Steps

1. DTO in `dtos/<resource>.dto.ts` with the **exact** JSON shape (`<Resource>ApiDto`). Never invent fields.
2. Mapper in `mappers/<resource>.mapper.ts`: `map<Resource>DtoToModel` + `map<Resource>ListToModel`.
3. Method in the existing `<resource>-api.service.ts` (or create it per the `new-store` skill):
   `getAll()` → `this.api.get<Dto[]>(this.resource)` with `resource = 'v1/...'` (no leading `/`, no host).
4. The store consumes it and exposes readonly signals; the page reads the store.
5. Test against the local API with `curl` before wiring the UI.
6. Identifiers in English; never translate the domain (`category`, not `categoria`).
7. Never invent fields — and never fall back to mock data when the API fails (render loading/error states instead).
8. Verify: `npm run lint && npm run build`.

Note: only `GET` is used today. When POST/PUT/DELETE are needed, extend `ApiClientService` (`core/services/`) — not each feature.
