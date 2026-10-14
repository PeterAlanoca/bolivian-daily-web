import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/services/api-client.service';
import { CategoryArticlesResponseApiDto } from '../dtos/category-articles.dto';

@Injectable({ providedIn: 'root' })
export class CategoryArticlesApiService {
  private api = inject(ApiClientService);

  getByCategorySlug(
    slug: string,
    cursor?: string | null,
    limit = 20,
  ): Observable<CategoryArticlesResponseApiDto> {
    const params = new URLSearchParams();
    params.set('limit', limit.toString());
    if (cursor) {
      params.set('cursor', cursor);
    }

    return this.api.get<CategoryArticlesResponseApiDto>(
      `v1/articles/by-category/slug/${slug}?${params.toString()}`,
    );
  }
}
