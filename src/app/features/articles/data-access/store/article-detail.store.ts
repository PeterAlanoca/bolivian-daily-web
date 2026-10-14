import { Injectable, inject, signal } from '@angular/core';
import { ArticleDetail } from '../../models/article-detail.model';
import { ArticleDetailApiService } from '../services/article-detail-api.service';
import { mapArticleDetailDtoToModel } from '../mappers/article-detail.mapper';

@Injectable({ providedIn: 'root' })
export class ArticleDetailStore {
  private api = inject(ArticleDetailApiService);

  private readonly _article = signal<ArticleDetail | null>(null);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private currentId: number | null = null;

  readonly article = this._article.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  load(id: number): void {
    if (this.currentId === id && this._article()) return;
    this.currentId = id;
    this._loading.set(true);
    this._error.set(null);
    this._article.set(null);

    this.api.getArticleById(id).subscribe({
      next: (dto) => {
        if (this.currentId !== id) return;
        this._article.set(mapArticleDetailDtoToModel(dto));
        this._loading.set(false);
      },
      error: (err) => {
        if (this.currentId !== id) return;
        this._article.set(null);
        this._error.set('No se pudo cargar el artículo');
        this._loading.set(false);
        console.error('[ArticleDetailStore] load failed', err);
      },
    });
  }

  reset(): void {
    this.currentId = null;
    this._article.set(null);
    this._loading.set(false);
    this._error.set(null);
  }
}
