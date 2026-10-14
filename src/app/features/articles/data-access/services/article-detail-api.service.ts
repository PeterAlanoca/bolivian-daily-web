import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/services/api-client.service';
import { ArticleDetailApiDto } from '../dtos/article-detail.dto';

@Injectable({ providedIn: 'root' })
export class ArticleDetailApiService {
  private apiClient = inject(ApiClientService);

  getArticleById(id: number): Observable<ArticleDetailApiDto> {
    return this.apiClient.get<ArticleDetailApiDto>(`v1/articles/${id}`);
  }
}
