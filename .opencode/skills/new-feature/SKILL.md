---
name: new-feature
description: Scaffold a complete feature (pages, components, models, data-access) following the project architecture
---

# Create a feature

Read `docs/architecture.md` and `docs/naming-conventions.md` first.

## Structure to create in `src/app/features/<name>/`

```
<name>/
├── index.ts                        # barrel: re-exports the feature's public API
├── models/<name>.model.ts           # domain (what the UI uses)
├── data-access/
│   ├── dtos/<name>.dto.ts               # API contract (<Name>ApiDto)
│   ├── mappers/<name>.mapper.ts         # map<Name>DtoToModel / map<Name>ListToModel
│   ├── services/<name>-api.service.ts   # pure HTTP via ApiClientService, resource='v1/...'
│   └── store/<name>.store.ts            # readonly signals + load()
├── pages/<name>-list-page/          # smart, with separate .ts/.html/.css
└── components/                     # dumb (input()/output() only)
```

Live reference: `src/app/features/categories/` (data-access) and
`src/app/features/news/components/` (shared domain dumb components).

## Rules

1. No `environment`, no absolute URLs: the api-service uses `ApiClientService.get('v1/...')`.
2. Store: private `_x = signal(...)`, public `x = this._x.asReadonly()`; `data/loading/error` slices.
3. Model = real JSON; conversion only in the mapper.
4. Standalone components with `templateUrl`/`styleUrl`; BEM CSS with `var(--token)`.
5. Alias imports `@core/@features/@shared`; cross-feature only via barrel.
6. Register the route in `src/app/app.routes.ts` (eager by current decision).
7. Identifiers in English (variables, methods, classes, files); Spanish only in user-visible text and data values.
8. Verify: `npm run lint && npm run build`.
