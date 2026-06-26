import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '../../../core/models/news.model';
import { MOCK_MOST_READ } from '../../../core/data/mock-data';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe],
  template: `
    <aside class="sidebar">
      
      <!-- RELATED NEWS SECTION (Show only if input is provided and has items) -->
      @if (hasRelated()) {
        <div class="sidebar__block">
          <div class="sidebar__title">Más de {{ categoryName() }}</div>
          <ul class="most-read__list">
            @for (item of relatedNews(); track item.id) {
              <li class="most-read__item" style="display: block;">
                @if (itemImageUrl(item)) {
                  <a [routerLink]="['/', item.category?.url, item.url]">
                    <img [src]="itemImageUrl(item)" [alt]="item.title" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; margin-bottom: 10px; border: 1px solid var(--gray-border);">
                  </a>
                }
                <h4 class="most-read__title" style="font-size: 16px;">
                  <a [routerLink]="['/', item.category?.url, item.url]">{{ item.title }}</a>
                </h4>
                <div class="most-read__meta" style="margin-top: 8px;">
                  <span>{{ item.publication_date | timeAgo }}</span>
                </div>
              </li>
            }
          </ul>
        </div>
      }

      <!-- MOST READ SECTION -->
      <div class="sidebar__block">
        <div class="sidebar__title">Más leídas</div>
        <ul class="most-read__list">
          @for (item of mostRead(); track item.id; let i = $index) {
            <li class="most-read__item">
              <span class="most-read__num">{{ i + 1 }}</span>
              <div class="most-read__text">
                <div class="most-read__title">
                  <a [routerLink]="['/', item.category?.url, item.url]">{{ item.title }}</a>
                </div>
                <div class="most-read__meta">
                  <span>{{ item.publication_date | timeAgo }}</span>
                </div>
              </div>
            </li>
          }
        </ul>
      </div>

      <!-- ADVERTISING PLACEHOLDER -->
      <div class="sidebar__block" style="border-top: none; padding-top: 0;">
        <div class="sidebar__ad">
          <span>Publicidad</span>
          <div class="sidebar__ad-square">
            <span style="font-size: 11px; color: #b5b5b5;">300 x 250 AD PLACEHOLDER</span>
          </div>
        </div>
      </div>

    </aside>
  `
})
export class SidebarComponent {
  // Input for related news
  relatedNews = input<News[]>([]);

  // Local state signals
  mostRead = MOCK_MOST_READ;

  // Computed helper signals
  hasRelated = computed(() => this.relatedNews() && this.relatedNews().length > 0);
  
  categoryName = computed(() => {
    const list = this.relatedNews();
    if (list && list.length > 0) {
      return list[0].category?.name || 'la sección';
    }
    return 'la sección';
  });

  itemImageUrl(item: News): string {
    return item.multimedia && item.multimedia.length > 0 ? item.multimedia[0].url : '';
  }
}
