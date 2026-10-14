import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/services/api-client.service';
import { RecentArticleDto } from '../dtos/recent-article.dto';

@Injectable({ providedIn: 'root' })
export class RecentArticlesApiService {
  private apiClient = inject(ApiClientService);

  getRecentArticles(limit = 5): Observable<RecentArticleDto[]> {
    return this.apiClient.get<RecentArticleDto[]>(`v1/articles/recent?limit=${limit}`);
  }
}
