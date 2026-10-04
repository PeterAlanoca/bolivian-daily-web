import { Injectable, inject, signal } from '@angular/core';
import { HomeFeedApiService } from '../services/home-feed-api.service';
import { mapHomeFeedDtoToModel } from '../mappers/home-feed.mapper';
import { HomeFeed } from '../../models/home-article.model';

@Injectable({ providedIn: 'root' })
export class HomeFeedStore {
  private homeFeedApi = inject(HomeFeedApiService);

  private readonly _feed = signal<HomeFeed | null>(null);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly feed = this._feed.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() {
    this.load();
  }

  load(): void {
    this._loading.set(true);
    this._error.set(null);
    this.homeFeedApi.getHomeFeed().subscribe({
      next: (dto) => {
        this._feed.set(mapHomeFeedDtoToModel(dto));
        this._loading.set(false);
      },
      error: (err) => {
        this._feed.set(null);
        this._error.set('No se pudo cargar la portada');
        this._loading.set(false);
        console.error('[HomeFeedStore] GET home feed failed', err);
      },
    });
  }
}
