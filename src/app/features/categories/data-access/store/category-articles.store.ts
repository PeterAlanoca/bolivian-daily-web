import { Injectable, inject, signal } from '@angular/core';
import { Category, News } from '@core/models/news.model';
import { CategoryArticlesApiService } from '../services/category-articles-api.service';
import { mapCategoryArticlesResponseDtoToResult } from '../mappers/category-articles.mapper';

@Injectable({ providedIn: 'root' })
export class CategoryArticlesStore {
  private api = inject(CategoryArticlesApiService);

  private readonly _category = signal<Category | null>(null);
  private readonly _articles = signal<News[]>([]);
  private readonly _loading = signal(false);
  private readonly _loadingMore = signal(false);
  private readonly _error = signal<string | null>(null);
  private readonly _nextCursor = signal<string | null>(null);
  private currentSlug: string | null = null;

  readonly category = this._category.asReadonly();
  readonly articles = this._articles.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly loadingMore = this._loadingMore.asReadonly();
  readonly error = this._error.asReadonly();
  readonly nextCursor = this._nextCursor.asReadonly();

  load(slug: string): void {
    this.currentSlug = slug;
    this._loading.set(true);
    this._error.set(null);
    this._articles.set([]);
    this._nextCursor.set(null);

    this.api.getByCategorySlug(slug).subscribe({
      next: (dto) => {
        if (this.currentSlug !== slug) return;
        const result = mapCategoryArticlesResponseDtoToResult(dto);
        this._category.set(result.category);
        this._articles.set(result.items);
        this._nextCursor.set(result.nextCursor);
        this._loading.set(false);
      },
      error: (err) => {
        if (this.currentSlug !== slug) return;
        this._category.set(null);
        this._articles.set([]);
        this._error.set('No se pudieron cargar las noticias de esta categoría');
        this._loading.set(false);
        console.error('[CategoryArticlesStore] load failed', err);
      },
    });
  }

  loadMore(): void {
    const cursor = this._nextCursor();
    const slug = this.currentSlug;
    if (!cursor || !slug || this._loadingMore()) return;

    this._loadingMore.set(true);
    this.api.getByCategorySlug(slug, cursor).subscribe({
      next: (dto) => {
        if (this.currentSlug !== slug) return;
        const result = mapCategoryArticlesResponseDtoToResult(dto);
        this._articles.update((prev) => [...prev, ...result.items]);
        this._nextCursor.set(result.nextCursor);
        this._loadingMore.set(false);
      },
      error: (err) => {
        this._loadingMore.set(false);
        console.error('[CategoryArticlesStore] loadMore failed', err);
      },
    });
  }
}
