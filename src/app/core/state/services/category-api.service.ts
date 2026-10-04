import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../../services/api-client.service';
import { CategoryApiDto } from '../dtos/category.dto';

@Injectable({ providedIn: 'root' })
export class CategoryApiService {
  private api = inject(ApiClientService);
  private readonly resource = 'v1/categories';

  getAll(): Observable<CategoryApiDto[]> {
    return this.api.get<CategoryApiDto[]>(this.resource);
  }
}
