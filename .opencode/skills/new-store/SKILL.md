---
name: new-store
description: Create global or feature state with readonly signals (store + api-service + dto + mapper + model)
---

# Create a store with signals

Live reference: `src/app/core/state/` (global, e.g. `CategoryStore`) and
`docs/architecture.md` (State section).

## Where it lives

- Global shell state (read by 2+ features, e.g. the menu) → `src/app/core/state/`:
  `dtos/`, `mappers/`, `services/<x>-api.service.ts`, `store/<x>.store.ts`, model in `src/app/core/models/`.
- Feature state → same layout under `src/app/features/<feature>/data-access/` + model in `features/<feature>/models/`.
- Never in `shared/` (forbidden by lint: `shared/` holds no business logic).

## Store template

```ts
@Injectable({ providedIn: 'root' })
export class <Domain>Store {
  private api = inject(<Domain>ApiService);
  private readonly _items = signal<<Item>[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly items = this._items.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() { this.load(); }

  load(): void { /* loading/error + api.getAll().subscribe({ next, error }) */ }
}
```

## Rules

1. `data/loading/error` slices; DTO (`<X>ApiDto`) ≠ model (`<X>`); map in `*.mapper.ts`.
2. The api-service only knows the relative path (`resource = 'v1/...'`) via `ApiClientService`.
3. Consumers: `private store = inject(XStore); items = this.store.items;` — never `.set()` outside the store.
4. Identifiers in English (variables, methods, classes); Spanish only in user-visible text.
5. Verify: `npm run lint && npm run build`.
