import { Injectable, inject, signal } from '@angular/core';
import { RecentArticlesApiService } from '../services/recent-articles-api.service';
import { mapRecentArticlesDtoToModel } from '../mappers/recent-article.mapper';
import { RecentArticle } from '../../models/recent-article.model';

@Injectable({ providedIn: 'root' })
export class RecentArticlesStore {
  private recentArticlesApi = inject(RecentArticlesApiService);

  private readonly _articles = signal<RecentArticle[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly articles = this._articles.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() {
    this.load();
  }

  load(limit = 5): void {
    this._loading.set(true);
    this._error.set(null);
    this.recentArticlesApi.getRecentArticles(limit).subscribe({
      next: (dtos) => {
        this._articles.set(mapRecentArticlesDtoToModel(dtos));
        this._loading.set(false);
      },
      error: (err) => {
        this._articles.set([]);
        this._error.set('No se pudieron cargar las noticias recientes');
        this._loading.set(false);
        console.error('[RecentArticlesStore] GET recent articles failed', err);
      },
    });
  }
}
