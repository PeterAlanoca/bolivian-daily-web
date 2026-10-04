import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../tokens/api-url.token';

/**
 * Wrapper de HttpClient. Único lugar que une `API_BASE_URL` + path relativo
 * (p. ej. `v1/categories`). Los data-access services nunca importan
 * `environment` ni concatenan URLs. Las URLs absolutas se dejan intactas.
 */
@Injectable({ providedIn: 'root' })
export class ApiClientService {
  private http = inject(HttpClient);
  private baseUrl = inject(API_BASE_URL);

  private toUrl(path: string): string {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    return `${this.baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  }

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(this.toUrl(path), { params });
  }
}
