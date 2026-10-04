import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/services/api-client.service';
import { HomeFeedApiDto } from '../dtos/home-feed.dto';

@Injectable({ providedIn: 'root' })
export class HomeFeedApiService {
  private api = inject(ApiClientService);
  private readonly resource = 'v1/articles/home';

  getHomeFeed(): Observable<HomeFeedApiDto> {
    return this.api.get<HomeFeedApiDto>(this.resource);
  }
}
