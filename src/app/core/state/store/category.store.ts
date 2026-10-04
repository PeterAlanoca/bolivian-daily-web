import { Injectable, inject, signal } from '@angular/core';
import { CategoryApiService } from '../services/category-api.service';
import { mapCategoryListToModel } from '../mappers/category.mapper';
import { Category } from '../../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryStore {
  private api = inject(CategoryApiService);

  private readonly _categories = signal<Category[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly categories = this._categories.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() {
    this.load();
  }

  load(): void {
    this._loading.set(true);
    this._error.set(null);
    this.api.getAll().subscribe({
      next: (dtos) => {
        this._categories.set(mapCategoryListToModel(dtos));
        this._loading.set(false);
      },
      error: (err) => {
        this._categories.set([]);
        this._error.set('No se pudieron cargar las categorías');
        this._loading.set(false);
        console.error('[CategoryStore] GET categories failed', err);
      },
    });
  }
}
